import { pingDatabase } from '@/lib/db/queries';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await pingDatabase();
    return Response.json(result);
  } catch {
    return Response.json({ error: 'Database ping failed' }, { status: 500 });
  }
}
