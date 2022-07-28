import { createApp } from './lib'
import './style.css'
import App from './App.vue'
import { setShare } from '@satumjs/component-share'
import shareMsg from './components/HelloWorld.vue'

setShare('share-test', shareMsg)

createApp(App).mount('#layout')
