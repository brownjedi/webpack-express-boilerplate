// Use bluebird promises instead of native ES6 promises as bluebird supports specific error catches
const Bluebird = require('bluebird')
// Warnings are useful for user code, but annoying for third party libraries.
Bluebird.config({ warnings: false })
// https://github.com/babel/babel-loader#custom-polyfills-eg-promise-library
require('babel-runtime/core-js/promise').default = Bluebird

global.Promise = Bluebird
