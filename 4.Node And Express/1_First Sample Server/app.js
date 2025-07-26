
const http = require('http');

console.log("I was here!");

const requestHandler = (req,res) =>{
    console.log("Request received:",req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <title>Node.js</title>
            </head>
            <body>
                <h1>Welcome to backend!</h1>
            </body>
            </html>
        `);
    res.end();
}

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`Server running at: https://localhost:${PORT}`);
    
});