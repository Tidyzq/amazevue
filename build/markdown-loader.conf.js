var markdown = require('markdown-it')({ html: true, breaks: true })
var markdownContainer = require('markdown-it-container')
var jade = require('jade')

markdown.use(markdownContainer, 'demo', {
  validate (params) {
    return params.trim() === 'demo'
  },
  render (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      var next = tokens[idx + 1]
      var payload = next.type === 'fence' ? jade.compile(next.content)() : ''

      return `<div>${payload}\n`
    } else {
      return '</div>\n'
    }
  },
})

module.exports = markdown
