/**
 * @param {Array<string>} keys - set of keys we want to check if exists in target
 * @param {Object} target - Object that will be checked keys against
 */
function keysFoundInTarget (keys, target) {
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    const hasOwnProperty = target.hasOwnProperty(key)
    if (hasOwnProperty) {
      return key
    }
  }
  return false
}

/**
 * @param {...Object} source - Objects to be merged
 * @return {Object|String}  if there are no conflicts, then a merged object will
 *                          be returned. In the case of a conflict a string with
 *                          the key that is creating the conflict will
 *                          be returned
 */
function assignNoConflict (...source) {
  const accumulator = {}
  for (var index = 0; index < source.length; index++) {
    const object = source[index]
    const objectKeys = Object.keys(object)
    const key = keysFoundInTarget(objectKeys, accumulator)
    if (key !== false) {
      return key
    }

    Object.assign(accumulator, object)
  }
  return accumulator
}

module.exports = {
  keysFoundInTarget,
  assignNoConflict
}
