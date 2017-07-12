const fs = require('fs')
const path = require('path')

exports.up = function (knex) {
  const filepath = path.join(__dirname, '../deploy/valueflows-schema.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}

exports.down = function(knex, Promise) {
  const filepath = path.join(__dirname, '../revert/valueflows-schema.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}
