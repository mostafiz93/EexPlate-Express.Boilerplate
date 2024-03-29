const { APIError, InternalServerError } = require('rest-api-errors');
const { STATUS_CODES } = require('http');
const logger = require('../../logger');

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
	const error =
		err.status === 401 || err instanceof APIError
			? err
			: new InternalServerError();

	if (process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line
		console.log('-----> Unknown server error...');
		// todo: comment here for production
		// eslint-disable-next-line
		console.log(err);
	}

	if (['UserExistsError', 'ValidationError'].includes(err.name)) {
		return res.status(405).json(err);
	}

	logger.info('API error', { error: err });

	return res.status(error.status || 500).json({
		code: error.code || 500,
		message: error.message || STATUS_CODES[error.status]
	});
};

const errorHandlerM = (err, req, res) => {
	console.log(err);
	const { status, ...rest } = err;
	return res.status(status).json(rest);
};

class ErrorHandlerM extends Error {
	constructor({ status = 520, message = 'Unknown error occurred' }) {
		super();
		this.status = status;
		this.message = message;
	}
}

module.exports = { errorHandler, errorHandlerM, ErrorHandlerM };
