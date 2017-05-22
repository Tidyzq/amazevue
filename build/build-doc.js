require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
// var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.document.prod.conf')

var spinner = ora('building for production...')
spinner.start()

function promisify (func, self) {
  self = self || func
  return function () {
    var args = Array.prototype.slice.call(arguments)
    return new Promise((resolve, reject) => {
      args.push((err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
      func.apply(self, args)
    })
  }
}

promisify(rm)(config.doc.assetsRoot)
  .then(() => {
    return promisify(webpack)(webpackConfig)
  })
  .then(stats => {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
  })
  .then(() => {
    if (process.env.npm_config_publish) {
      var ghpages = require('gh-pages')

      return promisify(ghpages.publish, ghpages)(config.doc.assetsRoot)
        .then(() => {
          console.log(chalk.cyan('\n  Publish to github pages success.\n'))
        })
    }
  })
  .catch(err => {
    console.log(chalk.red(err.message))
    console.log(chalk.red(err.stack))
  })
  .then(() => {
    spinner.stop()
  })
