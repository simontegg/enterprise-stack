// main
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

// modules
const knex = require('../../db')

test('schema', async done => {
  const filepath = path.join(__dirname, '../../db/verify/valueflows-schema.sql')
  const verify = await readFileAsync(filepath, 'utf8')

  const result = await knex.raw(verify)

  console.log(result)

  expect(1).toBe(1)

  

})
  
