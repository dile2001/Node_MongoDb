const http = require('http');

const server = http.createServer((req, res) => {
    const {headers, url, method } = req;
    console.log(headers, url, method);
    res.setHeader('Content-Type','text/html');
    res.setHeader('Anything','anything');
    res.write('<h1>Hello world</h1>');
    res.write('<h2>Hello NodeJs</h2>');
    res.end();
});
const PORT = 5001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));
