const webpack = require('webpack')
const ClosureCompilerPlugin = require('webpack-closure-compiler')
const path = require('path')
const glob = require('glob')
const theme = require('./styles/custom-theme')

const rules = [
  {
    test: /\.(css|less)/,
    loader: 'emit-file-loader',
    options: {
      name: 'dist/[path][name].[ext]'
    }
  },
  {
    test: /\.css$/,
    use: ['babel-loader', 'raw-loader', 'postcss-loader']
  },
  {
    test: /\.(le|c)ss$/,
    use: [
      'babel-loader',
      'raw-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          includePaths: ['styles', 'node_modules']
            .map(d => path.join(__dirname, d))
            .map(g => glob.sync(g))
            .reduce((a, c) => a.concat(c), []),
          modifyVars: theme
        }
      }
    ]
  }
]

const production = [
  new webpack.optimize.DedupePlugin(), // dedupe similar code
  new webpack.optimize.AggressiveMergingPlugin() // Merge chunks
]

module.exports = {
  webpack: (config, { dev }) => {
    rules.forEach(rule => {
      config.module.rules.push(rule)
    })

    if (dev) {
      return config
    }

    // use react-lite in production client-side
    config.resolve.alias = {
      react: 'react-lite',
      'react-dom': 'react-lite',
      'create-react-class': 'react-lite/lib/createClass'
    }

    production.forEach(plugin => {
      config.plugins.push(plugin)
    })

    //    config.plugins = config.plugins.filter(
    //      plugin => plugin.constructor.name !== 'UglifyJsPlugin'
    //    )
    //
    //    config.plugins.push(
    //      new ClosureCompilerPlugin({
    //        compiler: {
    //          language_in: 'ECMASCRIPT6',
    //          language_out: 'ECMASCRIPT5',
    //          compilation_level: 'ADVANCED'
    //        },
    //        concurrency: 3
    //      })
    //    )

    return config
  },
  production,
  rules
}
