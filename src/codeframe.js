/**
 * Matches line feed
 *
 * @type {RegExp}
 */
const LINE_FEED_REGEX = /\r?\n/g

/**
 * Default highlight padding
 *
 * @type {number}
 */
const DEFAULT_PADDING = 25

/**
 * @type {string}
 */
const INDICATOR_CHAR = '^'

/**
 * @type {string}
 */
const PADDING_CHAR = ' '

/**
 * Simple codeframe implementation
 *
 * @param {string} code
 * @param {number|Object.<number>} location
 * @param {number=} padding
 *
 * @return {string}
 */
export function highlightError (code, location, padding = DEFAULT_PADDING) {
  let start, end

  if (typeof location === 'number') {
    start = end = location
  } else {
    ({ start, end } = location)
  }

  const leftPadding = Math.max(0, start - padding)

  let lineFeedPadding = 0
  let part = code.slice(leftPadding, end + padding)

  part = part.replace(LINE_FEED_REGEX, () => {
    lineFeedPadding++
    return '\\n'
  })

  return `${part}\n${PADDING_CHAR.repeat(lineFeedPadding + start - leftPadding)}${INDICATOR_CHAR.repeat(end - start + 1)}`
}
