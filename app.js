const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World! from Server-2</h1>");
});

app.get("/health", (req, res) => {
  res.send("Health Check Success");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
