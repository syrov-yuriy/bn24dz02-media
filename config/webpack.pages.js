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
  createPages('./src/pages/articles.html', './pages/articles.html', ['index']),

  createPages('./src/pages/articles/why-waste-time.html', './pages/articles/why-waste-time.html', ['index']),
  createPages('./src/pages/articles/how-to-find-time-for-hobbies.html', './pages/articles/how-to-find-time-for-hobbies.html', ['index']),
  createPages('./src/pages/articles/stress-free-group-project.html', './pages/articles/stress-free-group-project.html', ['index']),

  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/checklists.html', './pages/checklists.html', ['index']),
  createPages('./src/pages/resources.html', './pages/resources.html', ['index']),
  createPages('./src/pages/about.html', './pages/about.html', ['index']),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', ['index']),
  createPages('./src/pages/sitemap.html', './pages/sitemap.html', ['index']),
]

module.exports = htmlPages