const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.removeHeader("X-Powered-By"); //To Hide Server Info
  res.setHeader("Referrer-Policy", "no-referrer"); //To not send Referrer policy
  res.setHeader("X-Content-Type-Options", "nosniff"); //No Over engineerning
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  next();
});

app.get("/list", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Security Headers Example",
    },
  ]);
});

const port = 5010;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
