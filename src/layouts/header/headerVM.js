import store from '@/store'
import router from '@/router'
import {mapGetters} from 'vuex'

export default {
  name: 'main-header',
  computed: {
    ...mapGetters([
      'appLogin'
    ])
  },
  methods: {
    onLogin: function () {
      router.push('/login')
    },
    onLogout: function () {
      store.dispatch('LOGOUT')
      router.push('/login')
    }
  }
}
