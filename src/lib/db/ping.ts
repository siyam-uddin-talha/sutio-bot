import { config } from 'dotenv';
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env.local' });
config({ path: '.env' });

const runPing = async () => {
  const url = process.env.POSTGRES_URL;

  if (!url) {
    console.error('❌ POSTGRES_URL is not set (.env or .env.local)');
    process.exit(1);
  }

  console.log('✓ POSTGRES_URL is set');

  const connection = postgres(url, { max: 1 });
  const db = drizzle(connection);

  try {
    await db.execute(sql`SELECT 1`);
    console.log('✓ Database connection OK');
  } catch (error) {
    console.error('❌ Database connection failed');
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }

  try {
    const tables = await connection`
      SELECT tablename FROM pg_tables WHERE schemaname = 'public'
    `;

    if (tables.length === 0) {
      console.error('❌ No tables found — run: pnpm db:migrate');
      process.exit(1);
    }

    console.log('✓ Tables:', tables.map((t) => t.tablename).join(', '));

    await connection`SELECT id FROM "User" LIMIT 1`;
    console.log('✓ "User" table is queryable');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    if (message.includes('does not exist')) {
      console.error('❌ Schema missing — run: pnpm db:migrate');
    } else {
      console.error('❌ Database query failed');
      console.error(message);
    }

    process.exit(1);
  }

  await connection.end();
  console.log('✅ Database is ready');
  process.exit(0);
};

runPing();
