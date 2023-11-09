const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html');
    if(req.url==='/home'){
        res.write('<html>')
            res.write('<head><title>my first page</title><head>')
            res.write('<body><h1>welcome home</h1></body>')
        res.write('</html>')
        return res.end();
    }
    if(req.url==='/about'){
        res.write('<html>')
            res.write('<head><title>my first page</title><head>')
            res.write('<body><h1>welcome to About us page</h1></body>')
        res.write('</html>')
        return res.end();
    }
    if(req.url==='/node'){
        res.write('<html>')
            res.write('<head><title>my first page</title><head>')
            res.write('<body><h1>welcome to my node.js project</h1></body>')
        res.write('</html>')
        return res.end();
    }
})

server.listen(4000);