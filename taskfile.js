
// ENV
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

exports.css = function*(task) {
  yield task
    .source(paths.css)
    .concat('global-styles.js')
    .run({
      *func (file) {
        const css = file.data.toString().replace(/`/g, '')

        file.data = new Buffer(`module.exports = \`${css}\``)
      }
    })
    .target(paths.styles)
}
