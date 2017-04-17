// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: "eslint:recommended",
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
  },
  // add your custom rules here
  'rules': {
    // disallow the use of console
    'no-console': 'warn',
    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',
    // enforce consistent brace style for all control statements
    'curly': 'error',
    // require default cases in switch statements
    'default-case': 'error',
    // enforce consistent newlines before dots
    'dot-location': ['error', 'property'],
    // enforce dot notation whenever possible
    'dot-notation': 'error',
    // require the use of === and !==
    'eqeqeq': 'error',
    // warn the use of alert, confirm, and prompt
    'no-alert': 'warn',
    // disallow the use of eval()
    'no-eval': 'error',
    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow shorthand type conversions
    'no-implicit-coercion': 'error',
    // disallow the use of eval()-like methods
    'no-implied-eval': 'error',
    // disallow labeled statements
    'no-labels': 'error',
    // disallow certain properties on certain objects
    'no-restricted-properties': 'error',
    // disallow assignment operators in return statements
    'no-return-assign': 'error',
    // disallow redundant return statements
    'no-useless-return': 'warn',
    // disallow void operators
    'no-void': 'error',
    // no with
    'no-with': 'error',
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': [ 'warn', 'always'],
    // enforce consistent spacing inside single-line blocks
    'block-spacing': [ 'warn', 'always' ],
    // enforce consistent brace style for blocks
    'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
    // require trailing commas
    'comma-dangle': [ 'warn', 'always-multiline' ],
    // enforce consistent spacing after commas
    'comma-spacing': [ 'warn', { before: false, after: true } ],
    // enforce consistent comma style
    'comma-style': [ 'warn', 'last' ],
    // require newline at the end of files
    'eol-last': [ 'warn', 'always' ],
    // disallow spacing between function identifiers and their invocations
    'func-call-spacing': [ 'warn', 'never' ],
    // enforce consistent indentation
    'indent': [ 'warn', 2 ],
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [ 'warn', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    }],
    // disallow multiple empty lines
    'no-multiple-empty-lines': 'warn',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'warn',
    // enforce the consistent use of single quotes
    'quotes': [ 'warn', 'single' ],
    // disallow semicolons instead of ASI
    'semi': [ 'warn', 'never' ],
    // require space before blocks
    'space-before-blocks': [ 'warn', 'always' ],
    // require space before function parenthesis
    'space-before-function-paren': [ 'warn', 'always' ],
    // require spacing around infix operators
    'space-infix-ops': 'warn',
    // enforece consistent spacing before of after unary operators
    'space-unary-ops': 'warn',
    // requires a whitespace (space or tab) beginning a comment
    'spaced-comment': 'warn',
    // require parens in arrow function arguments
    'arrow-parens': [ 'warn', 'as-needed' ],
    // require space before/after arrow function’s arrow
    'arrow-spacing': 'warn',
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'error',
    // disallow duplicate module imports
    'no-duplicate-imports': 'warn',
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'warn',
    // disallow renaming impo`rt, export, and destructured assignments to the same name
    'no-useless-rename': 'warn',
    // require method and property shorthand syntax for object literals
    'object-shorthand': 'warn',
    // require const declarations for variables that are never reassigned after declared
    'prefer-const': 'warn',
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'warn',
    // disallow unused variables
    'no-unused-vars': 'warn',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
