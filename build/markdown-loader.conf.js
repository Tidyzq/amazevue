var markdown = require('markdown-it')({ html: true, breaks: true })
var markdownContainer = require('markdown-it-container')

markdown.use(markdownContainer, 'demo', {
  validate (params) {
    return params.trim() === 'demo'
  },
  render (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      var next = tokens[idx + 1]
      var payload = next.content
      if (next.info === 'jade') {
        payload = require('jade').render(payload)
      }

      return `<div>${payload}\n`
    } else {
      return '</div>\n'
    }
  },
})

module.exports = markdown
