import Vue2048 from './App.vue'
import type { App, Plugin } from 'vue'
const install = (app: App) => {
  app.component(Vue2048.name!!, Vue2048)
}

Vue2048.install = install

export { Vue2048 }

