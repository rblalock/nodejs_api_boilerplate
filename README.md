Node.JS REST API Server Boilerplate

What is it?
===============

This is a boilerplate / staring point for a REST API server.  The purpose of this is to give someone
a quick head start and a few conventions while creating REST API.  There are many frameworks and tools
out there and this does not try to be any of them.  This is simple some small conventions put together
for a start of a project.

Setup
===============

1.  Download the files
2.  Run `npm install -d` to install all dependencies of the project
3.  Run `node app.js` to start the server
4.  Visit the following in your browser to see the example API's:


	http://localhost:8080/1/employees/1?secret_admin=boilerplatesRock

	http://localhost:8080/1/employees?secret_admin=boilerplatesRock

![sampleResponse](http://content.screencast.com/users/XiDScreencasts/folders/Snagit/media/ecc6a662-b3dc-4e05-bdce-329897812e48/2014-05-27_22-00-41.png)

Overview
===============

The following are a few concepts you'll want to understand in this boilerplate:

## Configuration

There is a `/config.js` file in the root that you can use for some configuration of your project.  Currently,
the boilerplate takes in to account the following options:

	- port number
	- cache
	- cache duration
	- admin secret key (to get around the api_token/secret headers)

## Routing

The boilerplate uses Express, the most popular framework in the Node community for defining routes / API's, so any
routes you see here will be Express routes.

The boilerplate assumes you want to version your API.  In /routes.js is where you'll place the available API's
based on version.  v1 is already there for you to reference.  This will just bring in the v1/routes file and make
them ready in the Node.JS server.

Inside the v1/routes.js file is where you declare the normal Express routes, like you would with any other Express
app.  The convention assumes you will version your routes like so:  `:version/employees` e.g. `http://myserver/1/employees`

The example routes use the `validateToken` function.  This will check for the `api_token` and `api_secret` headers
and handle the response if they are incorrect or missing.  For now, simple token management is stubbed out for you via the `token.js` file.

## Model

The model file is a sample file the route will call to build the response data.  This can be where you place your
business logic, mashing data, etc.  Whatever suits your use case.

## API Documentation

The boilerplate uses [http://apidocjs.com/](http://apidocjs.com/) to generate REST API documentation.  As long
as you document your routes according to the apidocsjs.com spec, you can auto-gen the docs.  To view the documentation:

1.  Install APIDocs:  `npm install apidoc -g` (might need to use `sudo` of course)
2.  Run the command in your project folder:  `apidoc`
3.  There will be a new folder `doc`, open the index.html file to preview your docs

![APIDOCS](http://content.screencast.com/users/XiDScreencasts/folders/Snagit/media/31382867-8244-4e57-8abc-f2ea8dda9d9f/2014-05-27_21-52-57.png)

## File Structure

`app.js` - Bootstrap for the server.  Nothing much to see here

`config.js` - Server configuration

`core.js` - App-wide singleton for references to the express server and such.

`routes.js` - The routes the server is monitoring

`sampleDataSource.js` - This is just a stubbed out / mock data source to demonstrate some of the flow
of the routes and such.

`tokens.js` - Simple object with the approved tokens / secrets that are allowed to ping the API server.

`v1/` - Versioned API's go in folders like `v1`, `v2`, etc.

`v1/cache.js` - The caching module used in this version of the API.  This could probably be moved to more
of a global cache module but have it here for now.  The current cache module is simplistic, in-memory caching.
It's not meant to be for a lot of caching or production but rather an example of how a caching module
can work with the api's.

`v1/errorHandling.js` - All the error messages handled in the app go here.

`v1/model.js` - The boilerplate model the routes hit for data.

`v1/routes.js` - The routes defined for this version of the api.

License and Credits
===================

Copyright 2014 [Rick Blalock](https://github.com/rblalock)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
