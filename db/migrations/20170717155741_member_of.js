const fs = require('fs')
const path = require('path')

exports.up = function (knex) {
  const filepath = path.join(__dirname, '../deploy/member_of.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}

exports.down = function (knex) {
  const filepath = path.join(__dirname, '../revert/member_of.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}
