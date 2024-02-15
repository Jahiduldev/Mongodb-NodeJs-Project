const circle = require('./circle')
console.log(circle(3))

const fs = require('fs')
let text = fs.readFileSync('./files/demo.txt', 'utf-8')
let textDocumnets = "Hi . How are you"
fs.writeFileSync('./files/writefile.txt', text)
