
// Global Object

var a = '1'
let b = '2'
const c = '3'

global.console.log(a + b + c)

// Bellow code returns undefined
// because the scope of the a, b, c is reside in the file index.js
// this does not work like window object in browser

console.log(global.a)
console.log(global.b)
console.log(global.c)