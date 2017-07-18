import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_app_root_about from './apps/mk-app-root/apps/mk-template-root-about/index.js'
import mk_app_root_helloWorld from './apps/mk-app-root/apps/mk-template-root-helloWorld/index.js'
import mk_app_root from './apps/mk-app-root/index.js'

const apps = {
	[mk_app_root_about.name]:mk_app_root_about,	
	[mk_app_root_helloWorld.name]:mk_app_root_helloWorld,	
	[mk_app_root.name]:mk_app_root,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()