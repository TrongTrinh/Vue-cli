

export default {
  name: 'ShopForm',
  data: function () {
    return {
      formstate: {},
      message: '',
      model: {
        name: '',
        description: '',
        address: '',
        email: '',
        phone: '',
        categoryId: '',
        closeTime: '',
        openTime: '',
        avatar: '',
        latitude: '',
        longitude: '',
        postCode: ''
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
      if (!field) {
        return ''
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'is-valid'
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'is-invalid'
      }
    },
    onSubmit: function () {
      if (this.formstate.$valid) {
        const formData = this.model
        this.$store.dispatch('SAVE_SHOP_REQUEST', {
          formData
        })
      }
    }
  }
}
