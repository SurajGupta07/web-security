const express = require("express");

const PORT = 3020;
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-trustedKey' 'unsafe-inline' https://unsecure.com;"
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
