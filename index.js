const http = require("http");

const server = http.createServer((req, res) => {
  const resMessage = "I am a Ninja";
  console.log(req.url);
  if (req.url === "/") {
    res.write(resMessage);
    res.end();
  } else {
    res.write("Page not found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is listening at port 3000");
});

module.exports = server;
