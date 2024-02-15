
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve call")
    }, 2000)
})
console.log(p)

p.then((result) => { console.log(result) })
    .catch((error) => { console.log(error) })
console.log("After")