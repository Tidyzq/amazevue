require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
// var path = require('path')
var fs = require('fs')
var npm = require('npm')
var git = require('simple-git')()
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')

var spinner = ora('building for production...')
spinner.start()

function isVersion (v) {
  return /\d+\.\d+\.\d+/.test(v)
}

function nextVersion (v) {
  var version = v.split('.')
  version[2] = parseInt(version[2]) + 1
  return version.join('.')
}

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

var packageInfo = require('../package.json')
var version = packageInfo.version

if (process.env.npm_config_publish) {
  version = isVersion(process.env.npm_config_publish) ?
    process.env.npm_config_publish : nextVersion(packageInfo.version)
}

promisify(rm)(config.build.assetsRoot)
  .then(() => {
    // update version and save to package.json
    if (process.env.npm_config_publish) {
      console.log(chalk.cyan(`  New version ${version}`))

      packageInfo.version = version
      return promisify(fs.writeFile)('package.json', new Buffer(JSON.stringify(packageInfo, null, 2) + '\n'))
    }
  })
  .then(() => {
    return promisify(webpack)(require('./webpack.module.prod.conf'))
  })
  .then(stats => {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n')

    console.log(chalk.cyan('\n  Build complete.\n'))
  })
  .then(() => {
    if (process.env.npm_config_publish) {
      var customRegistry

      // load npm
      return promisify(npm.load)()
        .then(() => {
          // save current npm registry
          // and set registry to https://registry.npmjs.org/
          customRegistry = npm.config.get('registry')
          return promisify(npm.commands.config)([ 'set', 'registry', 'https://registry.npmjs.org/' ])
        })
        .then(() => {
          // publish to npm
          return promisify(npm.commands.publish)([])
        })
        .then(() => {
          console.log(chalk.cyan('\n  Publish complete.\n'))
          // restore registry setting
          return promisify(npm.commands.config)([ 'set', 'registry', customRegistry ])
        })
        .then(() => {
          // add git commit
          return promisify(git.add, git)([ '.' ])
            .then(() => {
              return promisify(git.commit, git)(`build v${version}`)
            })
            .then(() => {
              return promisify(git.addTag, git)(`v${version}`)
            })
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
