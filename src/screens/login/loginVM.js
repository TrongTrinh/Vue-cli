import store from '@/store'
import router from '@/router'
import { mapGetters } from 'vuex'

export default {
  name: 'loginForm',
  data: function () {
    return {
      formstate: {},
      message: '',
      model: {
        username: 'admin@justnail.com',
        password: 'bh@132',
        onShowError: function (error) {
          alert(error)
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'appLogin'
    ])
  },
  methods: {
    onSubmit: function () {
      store.dispatch('LOGIN_REQUEST', this.model)
      if (this.formstate.$valid) {
        this.formstate._reset()
      }
    }
  },
  watch: {
    // watcher appLogin value change
    appLogin: function (newValue, oldValue) {
      router.push('/')
    }
  }
}
