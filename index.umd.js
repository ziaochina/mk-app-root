
import config from './config'
import * as data from './data'
import './style.less'

export default {
    name: "mk-app-root",
    version: "1.0.7",
    description: "mk-app-root",
    meta: data.getMeta(),
    components: [],
    config: config,
    load: (cb) => {
        cb(require('./component'), require('./action'), require('./reducer'))
	}
}