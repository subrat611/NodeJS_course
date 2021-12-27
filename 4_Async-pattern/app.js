// NOTE: Async Patterns Blocking Code

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page')
//     }

//     if(req.url === '/about'){

//         // Blocking Code
//         for(let i=0; i<1000; i++){
//             for(let j=0; j<1000; j++){
//                 console.log(`${i} and ${j}`);
//             }
//         }
//         res.end('About Page')
//     }

//     res.end('error page')
// })


// server.listen(5000,()=>{
//     console.log("Server Listening on port 5000...");
// })



// NOTE: Async Pattern - promises setup
const { readFile } = require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject)=>{

        readFile(path,'utf-8',(err,data)=>{
          
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })
        
    })
}

// getText('../2_sync-vs-async/content/one.txt')
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })



// NOTE: Async Pattern - Refactor to Async

const start = async()=>{
    try{
        const first = await getText('../2_sync-vs-async/content/one.txt')
        console.log(first);
    } catch(error){
        console.log(error);
    }
}

start()