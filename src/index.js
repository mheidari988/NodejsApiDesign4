const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>Hey there...</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
