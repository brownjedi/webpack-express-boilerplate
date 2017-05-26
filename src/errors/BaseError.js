export default class BaseError extends Error {
	constructor(title, detail, status) {
		// Calling parent constrcutor of base Error class.
		super(title)

		// Capturing stack trace, excluding constructor call from it.
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor)
		}

		// Status
		this.status = status || 500

		// Set the title
		this.title = title

		// Additional details
		this.detail = detail

		// Saving the name in the property of our custom error.
		this.name = 'BaseError'
	}
}
