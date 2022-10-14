const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    let filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/about.html") {
    let filePath = path.join(__dirname, "public", "about.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/contact.html") {
    let filePath = path.join(__dirname, "public", "contact.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url == "/home") {
    // do a 302 redirect
    response.writeHead(302, {
      location: "localhost:5000/",
    });
    response.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log("Server is up!");
});
