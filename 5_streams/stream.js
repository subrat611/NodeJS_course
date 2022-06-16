const { createReadStream } = require('fs')

// default 64kb size
// last buffer - remainder
// highWaterMark - control size of stream

const stream = createReadStream('./content.txt',{
    highWaterMark: 90000,
})

stream.on('data', (res)=>{
    console.log(res)
})

stream.on('error',(err)=>{
    console.log(err)
})