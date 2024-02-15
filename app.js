// const circle = require('./circle')
// console.log(circle(3))



//const fs = require('fs')
//sync
// let text = fs.readFileSync('./files/demo.txt', 'utf-8')
//fs.writeFileSync('./files/writefile.txt', text, 'utf-8')


// //async
// fs.readFile('./files/demo.txt', 'utf-8', (error, result) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(result)
//         fs.writeFile('./files/writefile.txt', result, 'utf-8', (error) => {
//             if (error) {
//                 console.log(error)
//             }
//         })
//     }

// })



const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.on('event1', () => {
    console.log("event1 file")
})
emitter.on('event2', (e) => {
    console.log("event2 file", e)
})

emitter.emit('event2', { name: "jahidul Islam", age: 38 })

