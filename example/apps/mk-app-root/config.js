import webapi from './webapi'

var _options = {
	webapi,
	defaultAppName: 'mk-app-root-about',
	defaultAppParams: {}
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config