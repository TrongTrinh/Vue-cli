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
        username: '',
        password: '',
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
      if (this.formstate.$valid) {
        store.dispatch('LOGIN_REQUEST', this.model)
        this.formstate._reset()
      }
    }
  },
  watch: {
    // watcher appLogin value change
    appLogin: function (newValue, oldValue) {
      router.push('/dashboard')
    }
  }
}
