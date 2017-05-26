import { NotFoundError } from '~/errors'

// catch 404 and forward it to error handler
export default (req, res, next) => {
	const err = new NotFoundError('Not Found', 'The URL is not found')
	return next(err)
}
