var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var devConfig = require('./webpack.config.js');
var _ = require('lodash');
var path = require('path');

devConfig.output = {
  filename: '[name].js',
  path: path.join(__dirname, 'build'),
  publicPath: ''
};

devConfig.watch = false;

devConfig.plugins = [
  new HtmlWebpackPlugin({
    minify: {collapseWhitespace: false},
    inject: 'body',
    template: 'src/templates/test.html',
    filename: 'index.html'
  }),
  new ExtractTextPlugin('[name].[contenthash].css', {allChunks: true}),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  })
];

_.forEach(devConfig.module.loaders, function (loader, i) {
  var testFileType = loader.test.toString();
  if (testFileType.includes('css')) {
    loader.loader = ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader');
  }
});

module.exports = devConfig;
