const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/articles.html', './articles.html', ['index']),
  createPages('./src/pages/search.html', './search.html', ['index', 'searchdata', 'search']),

  /* createPages('./src/pages/articles/why-waste-time.html', './articles/why-waste-time.html', ['index']),
  createPages('./src/pages/articles/how-to-find-time-for-hobbies.html', './articles/how-to-find-time-for-hobbies.html', ['index']),
  createPages('./src/pages/articles/stress-free-group-project.html', './articles/stress-free-group-project.html', ['index']),

  createPages('./src/pages/tests.html', './tests.html', ['index']),
  createPages('./src/pages/checklists.html', './checklists.html', ['index']),
  createPages('./src/pages/resources.html', './resources.html', ['index']),
  createPages('./src/pages/about.html', './about.html', ['index']),
  createPages('./src/pages/styleguide.html', './styleguide.html', ['index']),
  createPages('./src/pages/sitemap.html', './sitemap.html', ['index']), */
]

module.exports = htmlPages