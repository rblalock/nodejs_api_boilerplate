/**
 * Error handling dictionary
 * @class Error
 */

module.exports = {
	/**
	 * Handle a passed error and response
	 * @param {Object} _error
	 * @param {Object} _response
	 */
	handle: function(_error, _response) {
		var errorCode, errorMessage;

		if(_error && _error.code) {
			switch(_error.code) {
				/**
				 * @apiDefineErrorStructure ModuleNotFoundError
				 * @apiError (Error 404) module Module not found
				 *
				 * @apiErrorExample Module Missing Error
				 *     HTTP/1.1 404
				 *     {
				 *       "errorCode": 404,
				 *       "errorMessage": "Not Found"
				 *     }
				 */
				case "MODULE_NOT_FOUND":
					errorCode = 404;
					errorMessage = "Not Found";
					break;
				/**
				 * @apiDefineErrorStructure NoRecordsFoundError
				 * @apiError (Error 404) results No records found
				 *
				 * @apiErrorExample No Records Error
				 *     HTTP/1.1 404
				 *     {
				 *       "errorCode": 404,
				 *       "errorMessage": "No records available"
				 *     }
				 */
				case "NO_RECORDS_FOUND":
					errorCode = 404;
					errorMessage = "No records available";
					break;
				/**
				 * @apiDefineErrorStructure EmployeeIdError
				 * @apiError (Error 400) employeeId The employee id is missing
				 *
				 * @apiErrorExample Employee ID Error
				 *     HTTP/1.1 400
				 *     {
				 *       "errorCode": 400,
				 *       "errorMessage": "Invalid Request - Missing an employee ID"
				 *     }
				 */
				case "NO_EMPLOYEE_ID":
					errorCode = 400;
					errorMessage = "Invalid Request - Missing an employee ID";
					break;
				/**
				 * @apiDefineErrorStructure TokenMissingError
				 * @apiError (Error 400) api_token Missing API token
				 *
				 * @apiErrorExample Missing Token Error
				 *     HTTP/1.1 400
				 *     {
				 *       "errorCode": 400,
				 *       "errorMessage": "API Token is missing"
				 *     }
				 */
				case "NO_TOKEN":
					errorCode = 400;
					errorMessage = "API Token is missing";
					break;
				/**
				 * @apiDefineErrorStructure TokenInvalidError
				 * @apiError (Error 403) api_token Invalid token
				 *
				 * @apiErrorExample Invalid Token Error
				 *     HTTP/1.1 403
				 *     {
				 *       "errorCode": 403,
				 *       "errorMessage": "Invalid token"
				 *     }
				 */
				case "INVALID_TOKEN":
					errorCode = 403;
					errorMessage = "Invalid API token";
					break;
				default:
					errorCode = _error.code;
					errorMessage = _error.message || "Request error";
			}
		} else {
			errorCode = 404;
			errorMessage = "Not Found";
		}

		_response.status(errorCode).send({
			errorCode: errorCode,
			errorMessage: errorMessage
		});
	}
};