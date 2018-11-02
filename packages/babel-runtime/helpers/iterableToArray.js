function _iterableToArray(iter) {
  if (Array.isArray(iter) || typeof iter === 'string' || typeof global.Symbol === 'function' && global.Symbol.iterator in Object(iter) || iter && 'length' in iter || typeof global.Map !== 'undefined' && iter instanceof global.Map || typeof global.Set !== 'undefined' && iter instanceof global.Set || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;