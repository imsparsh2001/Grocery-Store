<template>
  <li :key="item.id" class="productitem" style="width: 90%;">
    <div class="productimage">
      <img :src="item.img[0]" alt="Ecommerce" />
    </div>
    <div class="productdetails">
      <a class="producttitle">{{ item.name }}</a>
      <span class="productprice">{{ `$${item.price}` }}</span>
    </div>
    <div class="quantity" style="border: none; margin-left: 8%; ">
      <!-- Replace input with p tag to display updated quantity -->
      <p class="quantity-input">{{ $store.state.cart.cartItems.find(cartItem => cartItem.id === item.id).quantity }}</p>
    </div>
    <div class="price" style="border: none; margin-left: 8%;">
      <span class="pricevalue">{{ `$${$store.state.cart.cartItems.find(cartItem => cartItem.id === item.id).quantity *
        item.price}` }}</span>
    </div>
  </li>
</template>
  
<script>
export default {

  props: {
    item: Object,
  },

  data() {
    return {
      quantity: this.$store.state.cart.items && this.$store.state.cart.items[this.item.id] || 1,
    };
  },

  watch: {
    quantity: function (newQuantity) {
      this.$store.dispatch("cart/setItemQuantity", {
        id: this.item.id,
        quantity: newQuantity,
      });
    },

    '$store.state.cart.cartItems': {
      handler(newCartItems) {
        // Handle the case when quantities are updated outside of the component
        this.$store.commit('cart/setCartItems', newCartItems);
      },
      deep: true,
    },
  },

};
</script>
  
<style src="../../addToCartPage/addToCart styles/addToCart.css" scoped></style>