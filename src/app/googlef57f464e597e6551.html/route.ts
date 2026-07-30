export async function GET() {
  return new Response("google-site-verification: googlef57f464e597e6551.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
