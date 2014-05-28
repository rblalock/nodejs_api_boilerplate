# General Information

This is a sample REST API doc set.  `apidoc.md` defines what goes in this section of the docs.

## Common Error Codes

#### Missing Location Error
This occurs when the required `location` url param is missing.

	HTTP/1.1 400
	{
		"errorCode": 400,
		"errorMessage": "Invalid Request - Missing a location"
	}

#### Missing Token / Secret Error
This occurs when the required `api_token` header is missing

	HTTP/1.1 400
	{
		"errorCode": 400,
		"errorMessage": "API Token is missing"
	}

#### Invalid Token / Secret Error
This occurs when the required `api_token` is invalid

	HTTP/1.1 403
	{
		"errorCode": 403,
		"errorMessage": "Invalid token"
	}

#### No Records Available
This occurs when a result is successful but there are no records found

	HTTP/1.1 404
	{
		"errorCode": 404,
		"errorMessage": "No records available"
	}
