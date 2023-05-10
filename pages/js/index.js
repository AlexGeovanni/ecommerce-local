// See https://github.com/typicode/json-server#module
import jsonServer from "json-server"

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;


server.use(middlewares)
server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

server.listen(port, () => {
    console.log('JSON Server is running',port)
})

