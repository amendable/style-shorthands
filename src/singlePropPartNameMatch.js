import camelCaseCss from 'camelcase-css'

export default (key, prop) => (
  key.match(new RegExp(`^(${camelCaseCss(prop)})(.+)`))
)
