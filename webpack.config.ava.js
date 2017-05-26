// This is used by babel-plugin-webpack-loaders during test env to resolve files
// when running ava

const path       = require('path')

const SRC_DIR    = path.resolve(__dirname, 'src')
const MODULE_DIR = path.resolve(__dirname, 'node_modules')

const config = {
	resolve: {
		// These extensions are tried when resolving a file.
		extensions: ['.js', '.jsx', '*'],
		// In which folders the resolver look for modules
		// relative paths are looked up in every parent folder (like node_modules)
		// absolute paths are looked up directly
		// the order is respected
		modules: [SRC_DIR, MODULE_DIR]
	},
	module: {
		loaders: []
	}
}

module.exports = config
