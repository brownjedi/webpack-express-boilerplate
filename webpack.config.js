/* eslint max-len: 0, no-nested-ternary: 0 */
const webpack            = require('webpack')
const WebpackShellPlugin = require('webpack-shell-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')
const nodeExternals      = require('webpack-node-externals')
const path               = require('path')

const isProd      = process.env.NODE_ENV === 'production'
const isDev       = process.env.NODE_ENV === 'development'
const isTest      = process.env.NODE_ENV === 'test'

const SRC_DIR     = path.resolve(__dirname, 'src')
const MODULE_DIR  = path.resolve(__dirname, 'node_modules')
const BUILD_DIR   = path.resolve(__dirname, 'build')
const INDEX_ENTRY = path.join(SRC_DIR, 'index.js')
const OUTPUT_NAME = 'server.js'

const DEV_PLUGINS = [
	// "onBuildEnd" event fires only once after first build, rebuilds are
	// not trigger "onBuildEnd", so nodemon works as intended
	new WebpackShellPlugin({
		onBuildEnd: [`nodemon ${path.join(BUILD_DIR, OUTPUT_NAME)} --watch ${BUILD_DIR}`]
	})
]

const TEST_PLUGINS = []

const PROD_PLUGINS = []

const PLUGINS = [
	new webpack.IgnorePlugin(/\.(css|less)$/),
	new webpack.BannerPlugin({
		banner: 'require("source-map-support").install();',
		raw: true,
		entryOnly: false
	}),
	new CopyWebpackPlugin([]),
	// Adds options to all of our loaders.
	// The 'debug' property was removed in webpack 2.
	// Loaders should be updated to allow passing this option via loader options in module.rules.
	// Until loaders are updated one can use the LoaderOptionsPlugin to switch loaders into debug mod
	new webpack.LoaderOptionsPlugin({
		// Indicates to our loaders that they should enter into debug mode
		// should they support it.
		debug: !isProd
	})
]

if (isDev) PLUGINS.push(...DEV_PLUGINS)
if (isProd) PLUGINS.push(...PROD_PLUGINS)
if (isTest) PLUGINS.push(...TEST_PLUGINS)

module.exports = {
	target: 'node',
	devtool: 'source-map',
	entry: INDEX_ENTRY,
	output: {
		// The dir in which our bundle should be output.
		path: BUILD_DIR,
		filename: OUTPUT_NAME
	},
	resolve: {
		// These extensions are tried when resolving a file.
		extensions: ['.js', '.jsx', '*'],
		// In which folders the resolver look for modules
		// relative paths are looked up in every parent folder (like node_modules)
		// absolute paths are looked up directly
		// the order is respected
		modules: [SRC_DIR, MODULE_DIR]
	},
	externals: [nodeExternals()],
	stats: {
		colors: true,
		hash: false,
		timings: true,
		chunks: false,
		chunkModules: false,
		modules: false,
		children: false,
		maxModules: 0
	},
	module: {
		rules: [
			// eslint
			{
				test: /\.js?$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					failOnWarning: false,
					failOnError: true,
					configFile: './.eslintrc'
				},
				exclude: [MODULE_DIR, BUILD_DIR]
			},
			// js
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: [MODULE_DIR, BUILD_DIR]
			}
		]
	},
	plugins: PLUGINS
}
