const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
   
    if(url === '/'){
        const arr = fs.readFileSync('massage.txt');
        const textname=[] ;
        textname.push(arr);
        const text = Buffer.concat(textname).toString();

        res.write('<html>')
            res.write('<head><title>my first page</title><head>')
            res.write(`<p>text :${text}</p>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">add</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method ==='POST'){
        const msg = [];
        req.on('data',(chunk)=>{
            msg.push(chunk);
        })
        req.on('end',()=>{
            const parsedMsg = Buffer.concat(msg).toString();
            const massage = parsedMsg.split('=')[1];
            fs.writeFile('massage.txt', massage, err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
}

module.exports = requestHandler;