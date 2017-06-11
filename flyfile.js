const lessVariablesToJson = require('less-variables-to-json')
const path = require('path')

exports.less = function * (fly) {
  yield fly
    .source('./styles/base-theme.less')
    .run({
      * func (file) {
        const json = yield lessVariablesToJson(file.data.toString(), {
          rootpath: path.join(__dirname, 'styles'),
          relativeUrls: true
        })

        file.data = new Buffer(
          `module.exports = ${JSON.stringify(json, null, '\t')}`
        )
        file.base = 'base-theme.js'
      }
    })
    .target('./styles/')
}
