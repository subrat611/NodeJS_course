const { writeFileSync } = require('fs')

// write text in content.txt
for(let i=0; i < 10000; i++){
    writeFileSync('./content.txt',`hello world ${i}\n`, { flag: 'a' })
}