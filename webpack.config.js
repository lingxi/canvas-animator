var path = require('path')

module.exports = {
  entry: {
    index: ['./src/index'],
    examples: ['babel-polyfill', './examples/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js',
    library: 'canvasAnimator',
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
