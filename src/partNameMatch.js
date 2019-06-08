import _ from 'lodash'
import cssProperties from './cssProperties.json'
import singlePropPartNameMatch from './singlePropPartNameMatch'

export default (key) => {
  let result

  _.each(cssProperties, (prop) => {
    result = singlePropPartNameMatch(key, prop)
    if (result) return false
  })

  return result
}
