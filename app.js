const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type', 'text/html');

res.end('<center><h1>Hello World</h1>SH</center>');

});

server.listen(port,() => {

console.log(`Server running at port `+port);

});
