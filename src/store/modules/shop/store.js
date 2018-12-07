
// --------------- Initial State --------------- //
export const state = () => ({
  shopLists: {
    shops: [],
    totalPage: null,
    totalResult: null
  },
  shopDetail: null
})

// --------------- reducers --------------- //
export const mutations = {
  getShopListsRequest (state, payload) {
  },
  getShopListSuccess (state, { payload }) {
    state.shopLists = payload
  },
  getShopDetailRequest (state, { payload }) {
  },
  getShopDetailSucces (state, { payload }) {
    state.shopDetail = payload
  },
  saveShopRequest (state, {payload}) {
  },
  deleteOneShopRequest (state, {payload}) {

  }

}

// --------------- Actions & Hook --------------- //
export const actions = {
  GET_SHOP_LISTS_REQUEST ({commit}, payload) {
    commit('getShopListsRequest', payload)
  },
  GET_SHOP_DETAIL_REQUEST ({commit}, payload) {
    commit('getShopDetailRequest', payload)
  },
  SAVE_SHOP_REQUEST ({commit}, payload) {
    commit('saveShopRequest', payload)
  },
  DELETE_ONE_SHOP_REQUEST ({commit}, payload) {
    commit('deleteOneShopRequest', payload)
  }
}

export const getters = {
  shoplists: (state) => state.shopLists,
  shopDetail: (state) => state.shopDetail
}

// --------------- export default --------------- //
export default {
  actions,
  getters,
  mutations,
  state
}
