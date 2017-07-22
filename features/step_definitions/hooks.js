var { defineSupportCode } = require('cucumber')
const fs = require('fs')
const createTestCafe = require('testcafe')
const testControllerHolder = require('../support/testControllerHolder')
const config = require('../../config')
const server = require('../../server')
const toPull = require('pull-promise')
const pull = require('pull-stream')
const { asyncMap, once, onEnd } = pull

let testcafe = null
const DELAY = 20000

function createTestFile (callback) {
  fs.writeFile(
    'test.js',
    'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +
      'fixture("fixture")\n' +
      'test("test", testControllerHolder.capture);',
    callback
  )
}

const runTest = async (callback) => {
  testcafe = await createTestCafe('localhost', 1337, 1338)
  const  runner = testcafe.createRunner()
  console.log('created runner')

  return runner
    .src('./test.js')
    .browsers('chrome')
    .run()
    .completionPrmoise
}

defineSupportCode(function ({ registerHandler, setDefaultTimeout }) {
  setDefaultTimeout(DELAY)

  registerHandler('BeforeFeatures', function (features, callback) {
    pull(
      once(config.port),
      asyncMap(server),
      asyncMap((_, cb) => createTestFile(cb)),
      toPull.through(() => runTest()),
      onEnd(callback)
    )
  })

  registerHandler('AfterFeatures', function (features, callback) {
    fs.unlinkSync('test.js')
    testControllerHolder.free()
    testcafe.close()
    callback(null)
  })
})
