const express = require('express')
const next = require('next')
const { postgraphql } = require('postgraphql')

module.exports = function (port, callback) {
  const dev = ['production'].indexOf(process.env.NODE_ENV) === -1
  const app = next({ dev })
  const handle = app.getRequestHandler()

  return app.prepare().then(() => {
    const server = express()

//   server.use(
//     postgraphql(
//       { 
//         host: 'localhost', 
//         database: 'sq_test', 
//         port: 5432, 
//         user: 'postgres',
//         password: process.env.PGPASSWORD 
//        },
//       'valueflows',
//       { graphiql: true }
//     )
//   )
//

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    if (!callback) {
    return new Promise((resolve, reject) => {
      server.listen(port, err => {
        if (err) reject(err)
        console.log(`> Ready on http://localhost:${port}`)
        resolve()
      })
    })
    } 

      server.listen(port, err => {
        if (err) callback(err)
        console.log(`> Ready on http://localhost:${port}`)
        callback(null)
      })
    
  })
}

