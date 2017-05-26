import BaseError from './BaseError'

export default class NotFoundError extends BaseError {
	constructor(title = 'Not Found', detail = 'Resource Not Found') {
		// Calling parent constrcutor of base Error class.
		super(title, detail, 404)
		this.name = 'NotFoundError'
	}
}
