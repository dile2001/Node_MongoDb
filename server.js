const http = require('http');
const todos = [
    { id: 1, text: 'Learning Rust'},
    { id: 2, text: 'Learning Python'},
    { id: 3, text: 'Learning Java'},
];
const server = http.createServer((req, res) => {
    
    //res.setHeader('Content-Type','application/json');
    res.writeHead(400, {
        'Content-Type': 'application/json',
        'UserAccount':'something'
    });
    res.end(JSON.stringify({
        success: false,
        error: 'Not found',
        data: {},
    }));
});
const PORT = 5001;
server.listen(PORT, () => console.log(`server is running on ${PORT}`));
