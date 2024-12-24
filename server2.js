var http = require('http')
var a=100
var b=20
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`<H1> value of a is ${a} and value of b is ${b} sum is ${a+b}</H1>`)
    res.end("done")
}).listen(4000) 
console.log("http://127.0.0.1:4000")