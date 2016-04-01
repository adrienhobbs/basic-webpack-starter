var webpack = require('webpack');
var templates = require('./get-all-templates.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var prodConfig = require('./webpack.config.js');
var _ = require('lodash');
var path = require('path');

var prodPlugins = templates.concat([
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
]);

prodConfig.output = {
  filename: '[name].js',
  path: path.join(__dirname, 'build'),
  publicPath: ''
};

prodConfig.watch = false;

prodConfig.plugins = prodPlugins;
_.forEach(prodConfig.module.loaders, function (loader, i) {
  var testFileType = loader.test.toString();
  if (testFileType.includes('css')) {
    loader.loader = ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader');
  }
});

module.exports = prodConfig;
