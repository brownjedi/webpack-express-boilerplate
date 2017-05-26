// Error Handler
import { error } from '~/utils/logging'

export default (err, req, res, next) => { // eslint-disable-line no-unused-vars
	error(err)
	res.status(err.status || 500)
	return res.send({
		errors: [err]
	})
}
