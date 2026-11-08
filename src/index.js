const REDIRECT_URL = "https://multiportllc.com";

const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="refresh" content="5;url=${REDIRECT_URL}" />
<title>Multiport Link Checker has moved</title>
<style>
  :root { color-scheme: light dark; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Google Sans", Roboto, "Segoe UI", Helvetica, Arial, sans-serif;
    background: #f5f5f7;
    color: #1d1d1f;
  }
  @media (prefers-color-scheme: dark) {
    body { background: #000; color: #f5f5f7; }
  }
  .card { max-width: 420px; }
  h1 { font-size: 22px; font-weight: 700; margin: 0 0 12px; letter-spacing: -0.01em; }
  p { font-size: 15px; line-height: 1.5; color: #6e6e73; margin: 0 0 8px; }
  a { color: #0071e3; font-weight: 600; text-decoration: none; }
</style>
</head>
<body>
  <div class="card">
    <h1>Multiport Link Checker is no longer available here</h1>
    <p>This site has shut down. You'll be redirected automatically in a few seconds, or continue now:</p>
    <p><a href="${REDIRECT_URL}">${REDIRECT_URL.replace("https://", "")}</a></p>
  </div>
  <script>setTimeout(function () { location.href = ${JSON.stringify(REDIRECT_URL)}; }, 5000);</script>
</body>
</html>
`;

export default {
  async fetch() {
    return new Response(PAGE, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
