var { defineSupportCode } = require('cucumber')
const fs = require('fs')
const createTestCafe = require('testcafe')
const testControllerHolder = require('../support/testControllerHolder')
const config = require('../../config')
const server = require('../../server')
const getPort = require('get-port')
const delay = require('timeout-as-promise')
const series = require('run-series')

let testcafe = null
const DELAY = 20000

function createTestFile () {
  fs.writeFileSync(
    'test.js',
    'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +
      'fixture("fixture")\n' +
      'test("test", testControllerHolder.capture);'
  )

}

const runTest = async () => {
  testcafe = await createTestCafe('localhost', 1337, 1338)
  const  runner = testcafe.createRunner()

  return runner
    .src('./test.js')
    .browsers('chrome')
    .run()
    .completionPromise
}

defineSupportCode(function ({ registerHandler, setDefaultTimeout }) {
  setDefaultTimeout(DELAY)

  registerHandler('BeforeFeatures', function (features) {
    createTestFile()

    return server(config.port)
      .then(() => {
        return runTest()
      })
      .catch(console.error)

  })

  registerHandler('AfterFeatures', function (features, callback) {
    fs.unlinkSync('test.js')
    testControllerHolder.free()
    testcafe.close()
    callback()
  })
})
