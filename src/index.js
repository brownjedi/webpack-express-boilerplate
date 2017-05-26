/* eslint no-console: 0, global-require: 0 import/first: 0 */
// Import envVars
import 'utils/envVars'
// Import polyfills
import 'utils/polyfills'

import {
	__TEST__,
	__PROD__,
	PORT,
	FORCE_SSL
}                       from 'config'

import express          from 'express'
import expressValidator from 'express-validator'
import bodyParser       from 'body-parser'
import morgan           from 'morgan'
import cors             from 'cors'
import hpp              from 'hpp'
import compression      from 'compression'

import {
	notFoundMiddleware,
	errorHandlerMiddleware
}                       from 'middlewares'
import helloRoutes      from 'routes/hello.routes'

const app = express()

// Don't expose any software information to hackers.
app.disable('x-powered-by')

// enable cors
app.use(cors())

// Response compression.
app.use(compression({ level: 9 }))

// enable body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Prevent HTTP Parameter pollution.
app.use(hpp())

// express-validator
app.use(expressValidator())

if (!__TEST__) {
	// Enable logging
	app.use(morgan('dev'))
}

if (__PROD__ && FORCE_SSL) {
	// Force HTTPs if FORCE_SSL env var is set to 'true'
	app.enable('trust proxy')
	app.use((req, res, next) => {
		if (req.secure) {
			return next()
		}
		return res.redirect(`https://${req.headers.host}${req.url}`)
	})
}

// API routes
app.use('/', helloRoutes)

// 404 Handler for api routes
app.use(notFoundMiddleware)

// Error Handler
app.use(errorHandlerMiddleware)

if (!module.parent) {
	// Start the server
	app.listen(PORT, (err) => {
		if (err) {
			console.log(err)
			return
		}
		console.log('===> 🌎 Express Server started!')
	})
}

export default app
