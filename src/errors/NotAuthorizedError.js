import BaseError from './BaseError'

export default class NotAuthorizedError extends BaseError {
	constructor(title = 'Permission Denied', detail = 'Permission Denied') {
		// Calling parent constrcutor of base Error class.
		super(title, detail, 403)
		this.name = 'NotAuthorizedError'
	}
}
