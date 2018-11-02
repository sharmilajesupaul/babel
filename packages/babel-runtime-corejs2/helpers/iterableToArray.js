var _Array$from = require("../core-js/array/from");

var _Set = require("../core-js/set");

var _Map = require("../core-js/map");

var _isIterable = require("../core-js/is-iterable");

var _Symbol = require("../core-js/symbol");

var _Array$isArray = require("../core-js/array/is-array");

function _iterableToArray(iter) {
  if (_Array$isArray(iter) || typeof iter === 'string' || typeof _Symbol === 'function' && _isIterable(Object(iter)) || iter && 'length' in iter || typeof _Map !== 'undefined' && iter instanceof _Map || typeof _Set !== 'undefined' && iter instanceof _Set || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;