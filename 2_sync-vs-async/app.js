// const fs = require('fs')
// or
const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./content/one.txt', 'utf8')
const second = readFileSync('./content/two.txt','utf8')

writeFileSync(
    './content/result.txt',
    `Result of one and two file is : ${first}, ${second}`,
    {flag: 'a'}
)

console.log('Done with this task')


// In sync code runs line by line, after one line execute then the next one comes.