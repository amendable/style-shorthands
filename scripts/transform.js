const { all } = require('known-css-properties');

module.exports = (fn) => (
  fn(all)
);
