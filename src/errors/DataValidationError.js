import BaseError from './BaseError'

export default class DataValidationError extends BaseError {
	constructor(title = 'Invalid Attribute', detail = 'Invalid Attribute', source) {
		// Calling parent constrcutor of base Error class.
		super(title, detail, 422)
		this.name = 'DataValidationError'

		// Source Object which has the JSON pointer to attribute
		this.source = source
	}
}
