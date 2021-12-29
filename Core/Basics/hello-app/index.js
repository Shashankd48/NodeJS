const http = require('http');
const hostname = 'localhost'
const port = 5000;
http.createServer((req, res) => {
    res.writeHead(200,{'Context-Type': 'text/plain'});

    res.end('<h1>Hello World App</h2>');
}).listen(port,hostname,() => {
    console.log(`Server is running on ${hostname} at port ${port}`);
});