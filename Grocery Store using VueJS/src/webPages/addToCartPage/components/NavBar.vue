<template>
  <nav class="cart-navbar">
    <ul class="cart-navList">
      <li class="cart-navItem">
        <router-link to="/" class="cart-nav-link">Home /</router-link>
      </li>
      <li class="cart-navItem">
        <router-link to="/productList" class="cart-nav-link">Shop /</router-link>
      </li>
      <li class="cart-navItem">
        <router-link to="/cart" class="cart-nav-link">Cart</router-link>
      </li>
    </ul>
  </nav>
</template>
  
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
  
<style src="../addToCart styles/addToCart.css" scoped></style>
  