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
      let {shop} = this.shopDetail
      const avatar = `${API_CONFIG.IMAGE_PATH}/${shop.avatar}`
      shop = {
        ...shop,
        avatar
      }
      return shop
    }
  },
  methods: {
    onGetShopDetail: function () {
      const id = this.$route.params.id
      console.log(id)
      store.dispatch('GET_SHOP_DETAIL_REQUEST',
        {id}
      )
    }
  },
  created: function () {
    this.onGetShopDetail()
  }
}
