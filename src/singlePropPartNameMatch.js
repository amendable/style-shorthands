export default (key, prop) => (
  key.match(new RegExp(`^(${prop})(.+)`))
)
