<template>
  <div class="cartBody"  :style="{ 'width' : '85%', 'margin' : '0px auto' }">
    <Navbar />
    <h1 class="cartHeading">Shopping Cart</h1>
    <h4 class="cartHeading">Shopping in 382480</h4>

    <div class="gridContainer">
      <div class="cartItem">
        <CartProduct />
      </div>
      <div class="cartSummary">
        <CartSummary />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './NavBar.vue';
import CartProduct from './CartProduct.vue'
import CartSummary from "./CartSummary.vue";

export default {
  components: {
    Navbar,
    CartProduct,
    CartSummary
  },
  data() {
    return {
    };
  },
};
</script>
  
<style src="../addToCart styles/addToCart.css"  scoped></style>
  