__webpack_public_path__ = window["__pub_mk-app-root__"];

const data = require('./data')
const config = require('./config')
require('./style.less')

export default {
    name: "mk-app-root",
    version: "1.0.8",
    description: "mk-app-root",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}