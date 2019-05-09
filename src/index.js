import _ from 'lodash'
import fullNameMatch from './fullNameMatch'
import partNameMatch from './partNameMatch'

export default () => ({
  match: ({ key }) => (
    !fullNameMatch(key) && partNameMatch(key)
  ),
  resolve: ({ key, value }) => {
    if (!_.isBoolean(value)) {
      console.warn(`Amendable: shorthand property used with a non-boolean value at ${key}.`)
    }

    const match = partNameMatch(key)
    if (!match[2]) return {}

    return {
      [match[1]]: value ? _.kebabCase(match[2]) : value
    }
  }
})
