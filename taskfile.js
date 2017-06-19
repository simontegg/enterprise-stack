const lessVariablesToJson = require('less-variables-to-json')
const path = require('path')
const camelize = require('camelize')
const bufferJson = require('buffer-json')
const JSONB = require('json-buffer')
const objectDiff = require('object-diff')
const postcss = require('postcss')
const postcssJs = require('postcss-js')
const {
  adjust,
  curry,
  each,
  find,
  fromPairs,
  keys,
  map,
  mergeAll,
  pipe,
  propEq,
  replace,
  sort,
  toPairs,
  toString
} = require('ramda')

// functions
const mapKeys = curry((fn, obj) => fromPairs(map(adjust(fn, 0), toPairs(obj))))
const removeAt = mapKeys(replace('@', ''))
const parse = pipe(
  map(file => ({
    data: JSON.parse(
      file.data.toString('utf8').replace('module.exports = ', '')
    ),
    base: file.base
  })),
  sort((a, b) => (b.base === 'base-theme.js' ? 1 : -1)),
  map(file => file.data)
)

const parseAndMerge = pipe(parse, mergeAll, camelize, removeAt)

// paths
const sources = {
  SEMANTIC_CSS: ['semantic/dist/components/card.css'],
  LESS: './styles/*.less',
  THEMES: './styles/*-theme.js'
}

const targets = {
  STYLES: 'styles/',
  SEMANTIC_COMPONENTS: './semantic-ui-components/'
}

// tasks
exports.less = function*(task) {
  task.serial(['variables', 'mergeAndDiff'])
}

exports.mergeAndDiff = function*(task) {
  task.parallel(['merge', 'diff'])
}


exports.semantic = function * (task) {
  yield task 
    .source(sources.SEMANTIC_CSS)
    .run({
      *func (file) {
        const data = file.data.toString()

        const root = postcss.parse(data)
        const obj = postcssJs.objectify(root)
        file.data = new Buffer(
          `module.exports = ${JSON.stringify(obj, null, '\t')}`
        )

        file.base = replace('.css', '.js', file.base)
      }
    })
    .target(targets.SEMANTIC_COMPONENTS)

}

exports.variables = function * (task) {
  yield task
    .source(sources.LESS)
    .run({
      *func (file) {
        const data = file.data.toString()

        const json = yield lessVariablesToJson(data, {
          rootpath: path.join(__dirname, 'styles'),
          relativeUrls: true
        })

        file.data = new Buffer(
          `module.exports = ${JSON.stringify(json, null, '\t')}`
        )

        file.base = replace('.less', '.js', file.base)
      }
    })
    .target(targets.STYLES)
}

exports.merge = function*(task) {
  yield task.source(sources.THEMES).run({
    every: false,
    *func (files) {
      const merged = parseAndMerge(files)

      const data = new Buffer(
        `module.exports = ${JSON.stringify(merged, null, '\t')}`
      )

      task.$.write(path.join(__dirname, '/styles/theme.js'), data)
    }
  })
}

exports.diff = function*(task) {
  yield task.source(sources.THEMES).run({
    every: false,
    *func (files) {
      const [base, custom] = parse(files)
      const diff = objectDiff(base, custom)

      task.$.write(
        path.join(__dirname, '/styles/diff.js'),
        `module.exports = ${JSON.stringify(diff, null, '\t')}`
      )
    }
  })
}
