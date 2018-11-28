import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login/store'
import shop from './modules/shop/store'

import createSagaPlugin from 'vuex-redux-saga'
import { rootSaga } from './modules/rootSagas'
import createPersistedState from 'vuex-persistedstate'

import services from '@/services/DataStore'

export const sagaPlugin = createSagaPlugin()

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login,
    shop: shop
  },
  plugins: [
    sagaPlugin,
    createPersistedState({
      getState: (key, storage, value) => {
        try {
          const persistedState = (value = storage.getItem(key)) && typeof value !== 'undefined'
            ? JSON.parse(value)
            : undefined

          // get token after store after rehydrate previously persisted state
          if (persistedState) {
            const { login: { token } } = persistedState
            token && services.setHeaders({ token })
          }
          return persistedState
        } catch (err) {}

        return undefined
      }
    })
  ]
})

sagaPlugin.run(rootSaga)
