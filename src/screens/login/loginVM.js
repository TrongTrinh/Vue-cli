export default {
  name: 'loginForm',
  data: function () {
    return {
      formstate: {},
      message: '',
      model: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      if (this.formstate.$valid) {
        this.formstate._reset()
      }
    }
  }
}
