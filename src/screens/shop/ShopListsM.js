import store from '@/store'
import { mapGetters } from 'vuex'
import { API_CONFIG } from '@/constants'
import ShopItem from './shopItem/ShopItem.vue'
export default {
  name: 'shopLists',
  data: function () {
    return {
      pageNo: 1,
      search: ''
    }
  },
  components: {
    ShopItem
  },
  computed: {
    ...mapGetters([
      'shoplists'
    ]),
    // create new array shop with config avatar propety
    renderShops: function () {
      const shopsConfigAvatar = this.shoplists.shops.map((shop) => {
        const avatar = `${API_CONFIG.IMAGE_PATH}/${shop.avatar}`
        return {
          ...shop,
          avatar
        }
      })
      return shopsConfigAvatar
    }
  },
  created: function () {
    const { pageNo, search } = this
    store.dispatch('GET_SHOP_LISTS_REQUEST', {
      pageNo,
      search
    })
  }
}
