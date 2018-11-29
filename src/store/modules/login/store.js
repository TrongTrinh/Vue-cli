import services from '@/services/DataStore'
// const stateKey = 'user'
// --------------- Initial State --------------- //
export const state = () => ({
  isLogin: false,
  token: null,
  user: null
})

// --------------- reducers --------------- //
export const mutations = {
  loginRequest (state, payload) {
    // set state to store
  },

  loginSuccess (state, { payload }) {
    const { user, token, isLogin } = payload
    services.setHeaders({ token })
    // set token, user to localStorage
    state.token = token
    state.user = user
    state.isLogin = isLogin
  },

  logout (state) {
    // write code here
  }
}

// --------------- Actions & Hook --------------- //
export const actions = {
  LOGIN_REQUEST ({ commit }, payload) {
    // commit mutations
    commit('loginRequest', payload)
  },

  LOGIN_SUCCESS ({ commit }, payload) {
    // commit mutations
    commit('loginSuccess', payload)
  },

  LOGOUT ({ commit }) {
    // commit mutations
    commit('logout')
  }
}

export const getters = {
  appLogin: (state) => state.isLogin
}

// --------------- export default --------------- //
export default {
  actions,
  getters,
  mutations,
  state
}
