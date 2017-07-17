// main
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
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
  const sqlFiles = await glob.readdirPromise('db/verify/*.sql')

  for (let file of sqlFiles) {
    console.log(file)
    const sql = await readFileAsync(file, 'utf8')

    try {
      const result = await knex.raw(sql)

      for (let row of result.rows) {
        for (let key in row) {
          console.log(row[key])

          if (typeof row[key] === 'boolean') {
            expect(row[key]).toEqual(true)
          }
        }
      }

    } catch (err) {
      return Promise.reject(err)
    }
  }
})
  
