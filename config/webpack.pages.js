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
  createPages('./src/pages/react.html', './react.html', ['index', 'react']),
]

module.exports = htmlPages