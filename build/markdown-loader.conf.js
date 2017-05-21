var prism = require('prismjs')
var markdownOptions = {
  html: true,
  breaks: false,
  highlight (str, lang) {
    var grammar = prism.languages[lang]
    if (grammar) {
      return prism.highlight(str, grammar)
    } else {
      return str
    }
  },
}
var markdown = require('markdown-it')(markdownOptions)
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

var defaultFenceRender = markdown.renderer.rules.fence

markdown.renderer.rules.fence = function () {
  return defaultFenceRender.apply(this, arguments).replace('pre', 'pre v-pre')
}

module.exports = markdown
