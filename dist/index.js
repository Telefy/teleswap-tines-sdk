
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./teleswap-tines-sdk.cjs.production.min.js')
} else {
  module.exports = require('./teleswap-tines-sdk.cjs.development.js')
}
