var http = require('http')
http.createServer((req,res)=>{
    res.end("<h1> hello node  123</h1>")
}).listen(4000)

console.log("server is started at http://127.0.0.1:4000")