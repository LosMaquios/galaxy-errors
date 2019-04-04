# Galaxy errors

  Standard generated errors for GalaxyJS

## Usage

```js
import GalaxyError from '@galaxy/errors'

const code = 'Hello, {{ #getName() }}'

const error = GalaxyError.capture(
  'INVALID_TEMPLATE_EXPRESSION',
  'invalid template expression',
  code,
  {
    start: code.indexOf('#'),
    end: code.indexOf(')')
  }
)

error.code // INVALID_TEMPLATE_EXPRESSION
error.location // { start: 10, end: 19 }
error.message
/**
 * Invalid template expression:
 *
 *   Hello, {{ #getName() }}
 *             ^^^^^^^^^^
 */
```
