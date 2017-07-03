const express = require('express')
const next = require('next')
const { postgraphql } = require('postgraphql')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
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

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
