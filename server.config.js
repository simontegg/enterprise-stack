const path = require('path')
const glob = require('glob')
const { rules } = require('./next.config')

module.exports = {
  webpack: (config, { dev }) => {
    rules.forEach(rule => {
      config.module.rules.push(rule)
    })

    // plugins.forEach(plugin => {
    //   config.module.rules.push(plugin)
    // })

    return config
  }
}
