
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
  }

}

// --------------- Actions & Hook --------------- //
export const actions = {
  GET_SHOP_LISTS_REQUEST ({commit}, payload) {
    commit('getShopListsRequest', payload)
  }
}

export const getters = {
  shoplists: (state) => state.shopLists
}

// --------------- export default --------------- //
export default {
  actions,
  getters,
  mutations,
  state
}
