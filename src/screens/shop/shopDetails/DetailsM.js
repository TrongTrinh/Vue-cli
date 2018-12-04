import store from '@/store'
import { mapGetters } from 'vuex'
import {API_CONFIG} from '@/constants'
export default {
  name: 'shop-details',
  computed: {
    ...mapGetters([
      'shopDetail'
    ]),
    getShopDetail: function () {
      console.log(this)
      let {shop} = this.shopDetail
      const avatar = `${API_CONFIG.IMAGE_PATH}/${shop.avatar}`
      shop = {
        ...shop,
        avatar
      }
      return shop
    }
  },
  created: function () {
    const id = this.$route.params.id
    store.dispatch('GET_SHOP_DETAIL_REQUEST',
      {id}
    )
  }
}
