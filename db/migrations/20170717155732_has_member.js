const fs = require('fs')
const path = require('path')

exports.up = function (knex) {
  const filepath = path.join(__dirname, '../deploy/has_member.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}

exports.down = function (knex) {
  const filepath = path.join(__dirname, '../revert/has_member.sql')
  const sql = fs.readFileSync(filepath, 'utf8')
  return knex.schema.raw(sql)
}
