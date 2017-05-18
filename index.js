const express = require('express')
const postgraphql = require('postgraphql')
const { printSchema } = require('graphql')
const { createPostGraphQLSchema } = require('postgraphql')
const pretty = require('prettyjson')

createPostGraphQLSchema(
  'postgres://localhost:5432/',
  'valueflows'
).then(schema => {
  console.log(printSchema(schema))
})
