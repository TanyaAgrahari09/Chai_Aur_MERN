const http = require('http');

const fs= require('fs');

const { URLSearchParams} = require('url');

const requestHandler = (req,res) =>{
    console.log("Request received:",req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/')
        {res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <title>Node.js</title>
            </head>
            <body>
                <h1>Welcome to backend!</h1>
                <form action="/buy-product" method="POST">
                    <input type="text" placeholder="Enter the product that you want" name="product"> <br>
                    <input type="text" placeholder="Enter your budget" name="budget"><br>
                    <input type="submit">
                </form>
            </body>
            </html>`)
            res.end();
            
        }
        else if(req.url === '/buy-product'){
            console.log("Form data received.");
            const buffer = [];
            req.on('data',(chunk) => {
                console.log(chunk);
                buffer.push(chunk);
            })
            req.on('end',()=>{
                const body = Buffer.concat(buffer).toString();
                console.log(body);
                const urlparams = new URLSearchParams(body);
                console.log(urlparams);
                
                const jsonBody = {};
                for(const [key,value] of urlparams.entries()){
                    jsonBody[key] = value;
                }
                fs.writeFileSync("buy.txt", JSON.stringify(jsonBody));
                
            })
            
            
            res.statusCode = 302;
            res.setHeader('Location', '/products');
            console.log('Sending Response');
            
            res.end();
        }
        else if(req.url === "/products")
           {
           res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                <title>Porduct</title>
                </head>
                <body>
                    <h1>Product list will appear here!</h1>
                </body>
                </html> `)
            res.end();
            
        }
        else{
            res.statusCode = 404;
            res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                <title>Page Not Found</title>
                </head>
                <body>
                    <h1>404 Page Not Found</h1>
                </body>
                </html> `);
            res.end();
        }
        //res.end();
    
}

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`Server running at: https://localhost:${PORT}`);
    
});