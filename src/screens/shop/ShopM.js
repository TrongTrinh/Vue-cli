import { mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: 'shop',
  computed: {
    ...mapGetters([
      'appLogin'
    ])
  },
  watch: {
    // watch appLogin variable on Vuex store change
    appLogin: function (newValue, oldValue) {
      router.push('/login')
    }
  },
  created: function () {
    if (this.$route.name === 'Dashboard') {
      router.push(`${this.$route.path}/shop-lists`)
    }
  }
}
