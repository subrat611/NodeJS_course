const os = require('os')
const path = require('path')

// current user information
const user = os.userInfo()
// console.log(user)


// information about system uptime in seconds
const systemUptime = os.uptime()
// console.log(systemUptime)


// os diff methods
const currrentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
// console.log(currrentOS)



// NOTE: path methods

// console.log(path.sep);

const absolutePath = path.resolve(__dirname,'node-js_experiment', 'modules', 'app.js')
// console.log(absolutePath);



// NOTE: file system