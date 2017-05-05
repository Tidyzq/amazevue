// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'tidyzq',
  ],
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js',
      },
    },
  }
}
