var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'js'),
        publicPath: '/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      query: { mimetype: 'image/png' }
    }]
  },
  devtool: '#source-map',
  devServer: {
    port: 8888,
    host: '0.0.0.0'
  },
  plugins: []
}
