const express = require('express')
const postgraphql = require('postgraphql')

module.exports = function () {
  const app = express()
  app.use(postgraphql('postgres://localhost:5432'))
  return app
}
