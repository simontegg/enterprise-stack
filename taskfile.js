const server = require('./server')
const spawn = require('child-process-promise').spawn
const getPort = require('get-port')

// ENV
const config = require('./config')
const env = process.env.NODE_ENV || 'development'
const prod = env === 'production'

// GLOBAL CSS
const paths = {
  css: [
    './node_modules/normalize.css/normalize.css',
    './styles/site.css', 
    './styles/styles.css' 
    ],
  styles: 'styles'
}

exports.acceptance = function * (task) {
  yield task.serial(['start', 'cucumber'])
}

exports.build = function * () {
  yield  build()
}




exports.start = function * () {
 // const port = yield getPort(config.port)
  yield server(config.port)
}

exports.cucumber = function * () {
  yield cucumber()
}

exports.css = function * (task) {
  yield task.source(paths.css)
    .concat('global-styles.js')
    .run({
      *func (file) {
        const css = file.data.toString().replace(/`/g, '')

        file.data = new Buffer(
          `module.exports = \`${css}\``
        )
      }
    })
    .target(paths.styles)
}

function cucumber () {
  const testRun = spawn('npm', ['run', 'acceptance'])

  testRun.childProcess.stdout.on('data', logBuffer)
  testRun.childProcess.stderr.on('data', logBuffer)

  return testRun
}

function build () {
  const b = spawn('npm', ['run', 'build'])

  b.childProcess.stdout.on('data', logBuffer)
  b.childProcess.stderr.on('data', logBuffer)

  return b
}

function start () {
  const s = spawn('npm', ['run', 'start:test'])

  s.childProcess.stdout.on('data', logBuffer)
  s.childProcess.stderr.on('data', logBuffer)

  return s
}

function logBuffer (buf) { console.log(buf.toString()) }

