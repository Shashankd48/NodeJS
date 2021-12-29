const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to home page<h1>");
      res.end();
   }
   if (req.url === "/user") {
      res.write("Welcome to user page");
      res.end();
   }
   if (req.url === "/file") {
      fs.readFile(path.join(__dirname, "file.html"), (err, data) => {
         if (err) {
            res.write("File not found!!!");
            res.end();
         }
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write(data);
         res.end();
      });
   }
   if (req.url === "/filetwo") {
      fs.readFile(path.join(__dirname, "fileTwo.html"), (err, data) => {
         if (err) {
            res.write("File not found!!!");
            res.end();
         }
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write(data);
         res.end();
      });
   }
});

server.listen(5000, () => console.log("Server is running at 5000"));
