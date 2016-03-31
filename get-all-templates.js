var fs = require('fs');
var path = require('path');
var templatesDir = path.join(__dirname, 'src/templates');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var templatesArray = fs.readdirSync(templatesDir);

var createHtmlTemplates = (function () {
  return templatesArray.map(function (temp) {
    return new HtmlWebpackPlugin({
      template: 'src/templates/' + temp,
      filename: temp,
      inject: 'body'
    });
  });
}());

module.exports = createHtmlTemplates;
