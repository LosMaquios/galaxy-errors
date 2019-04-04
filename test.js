import test from 'ava'

import GalaxyError, { highlightError }  from './src/index.js'

const code = 'INVALID_TEMPLATE'
const message = 'invalid template expression'
const input = 'Hello, {{ name }}'
const location = {
  start: input.indexOf('n'),
  end: input.lastIndexOf('e')
}

const expectedHighlighted = [
  'Hello, {{ name }}\n',
  '          ^^^^'
].join('')

const expectedFormatted = [
  '\n\nInvalid template expression:',
  '\n\n\tHello, {{ name }}\n',
      '\t          ^^^^\n'
].join('')

test('should be initialized correctly', t => {
  const error = new GalaxyError(code, message, location)

  t.is(error.name, 'GalaxyError')
  t.is(error.code, code)
  t.is(error.message, message)
  t.is(error.location, location)
})

test('should highlight error correctly', t => {
  const result = highlightError(input, location)

  t.is(result, expectedHighlighted)
})

test('should capture error correctly', t => {
  const { message: formattedMessage } = GalaxyError.capture(code, message, input, location)

  t.is(formattedMessage, expectedFormatted)
})
