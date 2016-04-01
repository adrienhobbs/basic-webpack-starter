/* istanbul ignore next */
require('./styles/style.scss');

var arr = [1, 2, 3, 4];
var test = function () {
  var newArr = [];
  arr.forEach(function (i) {
    newArr.push(i);
  });
};

test();

