var path = require('path');
var use = require('postcss-use');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  devtool: 'eval-source-map',
  postcss: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-normalize')(),
    require('postcss-center'),
    require('postcss-cssnext')(),
    require('postcss-font-magician')({ foundries: 'google' }),
    use({modules: ['lost']})
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/templates/test.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('style.css', {allChunks: true})
  ],
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
        // loader: 'style-loader!css-loader!postcss-loader'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')

      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src/styles'),
        // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  }
};
