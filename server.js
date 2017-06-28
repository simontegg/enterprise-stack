const express = require('express')
const next = require('next')
const { postgraphql } = require('postgraphql')

const serverConfig = require('./server.config')
const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev, conf: serverConfig })
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  //  server.use(
  //    postgraphql(
  //      { 
  //        host: 'localhost', 
  //        database: 'sq_test', 
  //        port: 5432, 
  //        user: 'postgres',
  //        password: process.env.PGPASSWORD 
  //       },
  //      'valueflows',
  //      { graphiql: true }
  //    )
  //  )

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
