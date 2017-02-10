var path = require('path')

module.exports = {
  entry: {
    index: ['./src/index'],
    test: ['babel-polyfill', './example/test.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'canvas-animator',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      options: { mimetype: 'image/png' }
    }]
  },
  devtool: '#source-map',
  devServer: {
    port: 8889,
    host: '0.0.0.0'
  },
  plugins: []
}
