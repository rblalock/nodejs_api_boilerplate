/**
 * Configuration for app
 */
module.exports = {
	/**
	 * Server port
	 */
	port: 8080,
	/**
	 * Versioned configuration
	 */
	v1: {
		/**
		 * Enable the caching module
		 */
		cacheEnabled: false,
		/**
		 * How long to cache data in the cache module
		 */
		cacheDuration: 3600000,
		/**
		 * The admin token / secret (to avoid the header tokens / secrets)
		 * Mainly this is just for trying stuff out in the browser real quick without the headers
		 * by adding the query string: `?secret_admin=boilerplatesRock`
		 */
		adminKeyEnabled: true,
		adminKey: "boilerplatesRock"
	}
};