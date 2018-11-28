import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login/store'
import shop from './modules/shop/store'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    login,
    shop
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
