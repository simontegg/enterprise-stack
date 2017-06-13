const objectDiff = require('object-diff')
const { adjust, curry, fromPairs, map, replace, toPairs } = require('ramda')

// functions
const mapKeys = curry((fn, obj) => fromPairs(map(adjust(fn, 0), toPairs(obj))))
const removeAt = mapKeys(replace('@', ''))

const baseTheme = removeAt(require('./base-theme'))
const customTheme = removeAt(require('./custom-theme'))

console.log(objectDiff(baseTheme, customTheme))
