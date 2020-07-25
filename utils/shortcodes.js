const markdownIt = require('markdown-it')

module.exports = {
  markdown: function (value) {
    if (!value) {
      return ''
    }

    let markdown = markdownIt({
      html: true,
    })

    return markdown.render(value)
  },
}
