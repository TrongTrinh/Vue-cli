import store from '@/store'
import {Dialog} from '@/components'
import { mapGetters } from 'vuex'
import { API_CONFIG, APP_CONFIG } from '@/constants'
import ShopItem from '../shopItem/ShopItem.vue'
export default {
  name: 'shopLists',
  data: function () {
    return {
      pageNo: 1,
      search: '',
      perPage: APP_CONFIG.SHOP.PerPage,
      showModal: false,
      shopId: null
    }
  },
  components: {
    ShopItem,
    Dialog
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
  methods: {
    onGetListShops () {
      const { pageNo, search } = this
      store.dispatch('GET_SHOP_LISTS_REQUEST', {
        pageNo,
        search
      })
    },
    onToggleshowModal (id) {
      this.showModal = !this.showModal
      this.shopId = id || null
    },
    onDelete () {
      const {shopId} = this
      this.onToggleshowModal()
      store.dispatch('DELETE_ONE_SHOP_REQUEST', {
        shopId
      })
    }
  },
  created: function () {
    this.onGetListShops()
  },
  watch: {
    pageNo: function (newVal, oldVal) { // watch it
      this.onGetListShops()
    }
  }
}
