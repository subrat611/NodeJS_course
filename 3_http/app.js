const http = require('http')

// creating server having callback function
// parameter req - request and res - response
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home Page')
    }

    if(req.url === '/nodejs'){
        res.end('Welcome to NodeJS')
    }

    res.end('404 error')
})

server.listen(5000)