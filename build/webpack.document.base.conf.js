const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const markdownLoaderConfig = require('./markdown-loader.conf')
const amazevue = require('../package.json')

const PRODUCTION = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './doc/main.js',
    404: './doc/404.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: PRODUCTION
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('doc'),
      module: PRODUCTION ? resolve('dist') : resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [ resolve('src'), resolve('doc'), resolve('test') ],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: markdownLoaderConfig,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ resolve('src'), resolve('doc'), resolve('test') ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'amazevue.version': `"${amazevue.version}"`,
    }),
  ],
}
