var templates = require('./get-all-templates.js');
var path = require('path');
var use = require('postcss-use');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devPlugins = templates.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('style.css', {allChunks: true})
]);

var webpackDevConfig = {
  entry: './src/app.js',
  devtool: 'eval-source-map',
  postcss: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-normalize')(),
    require('postcss-center'),
    require('postcss-cssnext')(),
    require('postcss-font-magician')({ foundries: 'google' }),
    require('postcss-reporter'),
    use({modules: ['lost']})
  ],
  plugins: devPlugins,
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')

      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src/styles'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ]
  }
};

module.exports = webpackDevConfig;
