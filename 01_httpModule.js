// HTTP Modules - Creates an HTTP server that listens to request and send responses

const http = require('http');
const port = process.env.port || 3000;
// Create a server 
const server = http.createServer((req,res)=>{
    console.log(req.url);
    
    if (req.url==='/') {
    res.statusCode=202;
    res.setHeader('Content-Type','Application/json');
    res.end('<h1> WelCome To NodeJS </h1>');    
    }

    
});

// listens on port

server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});



    