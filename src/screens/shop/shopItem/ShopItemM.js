export default {
  name: 'shop-item',
  props: {
    shop: Object
  },
  methods: {
    onToggleshowModal: function () {
      this.$emit('onToggleshowModal', this.shop.id)
    }
  }
}
