let http = require('http')
let server = http.createServer()

server.on('request', (request, Response) => {
    console.log('Requête on ')
    Response.writeHead(200, { 
        'Content-type': 'text/html; charset=utf-8'
    })
    Response.end('Salut ça va ?')
})

server.listen(4980)