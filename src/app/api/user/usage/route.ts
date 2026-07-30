import { auth } from '@/app/(auth)/auth';
import { getUserUsageDetails } from '@/lib/db/queries';

export async function GET() {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const details = await getUserUsageDetails(session.user.id);
    return Response.json(details);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch usage details' }, { status: 500 });
  }
}
