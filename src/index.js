import { highlightError } from './codeframe.js'

export { highlightError }

export default class GalaxyError extends Error {
  name = 'GalaxyError'

  /**
   * Build an error message with a codeframe in it
   *
   * @param {string} code
   * @param {string} message
   * @param {string} input
   * @param {number|Object.<number>} location
   *
   * @return {GalaxyError}
   */
  static capture (code, message, input, location) {
    const parts = [
      '',
      `${message.replace(/^[a-z]/, l => l.toUpperCase())}:`,
      `\t${highlightError(input, location).replace('\n', '\n\t')}`
    ]

    return new this(code, `${parts.join('\n\n')}\n`, location)
  }

  constructor (code, message, location = null) {
    super(message)

    this.code = code
    this.location = location
  }
}
