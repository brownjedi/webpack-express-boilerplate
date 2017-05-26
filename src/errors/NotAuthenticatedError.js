import BaseError from './BaseError'

export default class NotAuthenticatedError extends BaseError {
	constructor(title = 'Not Authenticated', detail = 'Not Authenticated') {
		// Calling parent constrcutor of base Error class.
		super(title, detail, 401)
		this.name = 'NotAuthenticatedError'
	}
}
