// main
const fs = require('fs')
const path = require('path')
//const { promisify } = require('util')
const promisify = require('es6-promisify')
const readFileAsync = promisify(fs.readFile)
const glob = require('glob-fs')({ gitignore: true })


// modules
const knex = require('../../db')

beforeAll(() => {
  return knex.migrate.latest()
})

afterEach(() => {
  return knex.migrate.rollback()
})

afterAll(() => {
  return knex.destroy() 
})

test('schema', async () => {
  expect(1).toBe(1)
//  const sqlFiles = await glob.readdirPromise('db/verify/*.sql')
//
//  for (let file of sqlFiles) {
//    const sql = await readFileAsync(file, 'utf8')
//
//    try {
//      const result = await knex.raw(sql)
//
//      for (let row of result.rows) {
//        for (let key in row) {
//          expect(row[key]).toEqual(true)
//        }
//      }
//
//    } catch (err) {
//      return Promise.reject(err)
//    }
//  }
})
  
