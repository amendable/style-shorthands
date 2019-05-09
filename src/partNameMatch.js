import _ from 'lodash'
import { all as cssProperties } from 'known-css-properties'
import singlePropPartNameMatch from './singlePropPartNameMatch'

const orderedCssProperties = _.orderBy(cssProperties, ['length'], ['desc'])

export default (key) => {
  let result

  _.each(orderedCssProperties, (prop) => {
    result = singlePropPartNameMatch(key, prop)
    if (result) return false
  })

  return result
}
