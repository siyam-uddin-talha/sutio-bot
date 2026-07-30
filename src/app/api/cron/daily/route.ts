import { getAllUserIds } from '@/lib/db/queries';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    console.warn(`[CRON WARN] Unauthorized cron execution attempt at ${new Date().toISOString()}`);
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const startTime = new Date();
  try {
    const userIds = await getAllUserIds();
    const logSummary = {
      status: 'success',
      timestamp: startTime.toISOString(),
      executionTimeMs: Date.now() - startTime.getTime(),
      usersCount: userIds.length,
      userIds,
    };

    console.log(`[CRON SUCCESS] Fetched User IDs:`, JSON.stringify(logSummary));

    return Response.json(logSummary);
  } catch (error) {
    const errorSummary = {
      status: 'failed',
      timestamp: startTime.toISOString(),
      error: 'Failed to fetch user IDs',
      details: error instanceof Error ? error.message : String(error),
    };

    console.error(`[CRON ERROR] Fetching user IDs failed:`, JSON.stringify(errorSummary));

    return Response.json(errorSummary, { status: 500 });
  }
}
