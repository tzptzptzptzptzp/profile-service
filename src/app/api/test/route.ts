export async function GET() {
  return new Response(
    JSON.stringify({ name: 'test api', description: 'This is a test API.' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
