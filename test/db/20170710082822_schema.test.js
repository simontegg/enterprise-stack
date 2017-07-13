// main
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

// modules
const knex = require('../../db')

beforeAll(() => {
  return knex.migrate.latest()
})

afterAll(() => {
  return knex.migrate.rollback()
    .then(() => {
      knex.destroy() 
    })
})

test('schema', async () => {
  const filepath = path.join(__dirname, '../../db/verify/valueflows-schema.sql')

  try {
    const verify = await readFileAsync(filepath, 'utf8')
    const result = await knex.raw(verify)

    for (let row of result.rows) {
      for (let key in row) {
        expect(row[key]).toEqual(true)
      }
    }

  } catch (err) {
    return Promise.reject(err)
  }
})
  
