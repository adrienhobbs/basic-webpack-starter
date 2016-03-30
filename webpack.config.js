var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var use = require('postcss-use');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  postcss: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-normalize')(),
    require('postcss-center'),
    require('postcss-cssnext')(),
    use({modules: ['lost']})
  ],
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/templates/test.html')
  })],
  watch: true,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/styles'),
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  }
};
