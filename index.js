const jsonServer = require('json-server')
const EMPServer =jsonServer.create()
const middleware =jsonServer.defaults()

const PORT = 3000
const route =jsonServer.router('db.json')
EMPServer.use(middleware)
EMPServer.use(route)

EMPServer.listen(PORT,()=>{
    console.log(`ShopNext server started at PORT: ${PORT} and waiting for client request!!!`);
    
})