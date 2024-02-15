///Http module
const http = require('http')
const server = http.Server((request, response) => {

    if (request.url === '/') {
        response.write("Hellow word")
        response.end()
    }

    if (request.url === '/student') {
        response.write("Hellow word student")
        response.end()
    }

})

server.listen(3000)
console.log('listenning on port 3000')