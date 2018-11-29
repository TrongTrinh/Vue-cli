export default {
  name: 'shop-details',
  methods: {
    getShopDetail: function () {
      console.log(this)
    }
  },
  created: function () {
    console.log(this.$route.params)
  }
}
