const _ = require('lodash')
const camelCaseCss = require('camelcase-css')
const transform = require('./transform')
const save = require('./save')

module.exports = (async () => {
  const data = transform((cssProperties) => (
    _.orderBy(
      cssProperties.map(prop => camelCaseCss(prop)),
      ['length'],
      ['desc'],
    )
  ))

  await save({
    path: `${__dirname}/../src/cssProperties.json`,
    data,
  })
})();
