import BaseError from './BaseError'

export default class InternalServerError extends BaseError {
	constructor(title = 'Internal Server Error', detail = 'Interna Server Error') {
		// Calling parent constrcutor of base Error class.
		super(title, detail, 500)
		this.name = 'InternalServerError'
	}
}
