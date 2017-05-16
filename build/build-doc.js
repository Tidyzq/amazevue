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

rm(config.doc.assetsRoot, err => {
  if (err) { throw err }
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) { throw err }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    if (process.env.npm_config_publish) {
      var ghpages = require('gh-pages')

      ghpages.publish(config.doc.assetsRoot, function (err) {
        if (err) {
          console.error(err)
        } else {
          console.log(chalk.cyan('  Publish to github pages success.\n'))
        }
      })
    }
  })
})
