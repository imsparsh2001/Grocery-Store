<template >
  <div class="cart2">
    <h2>Order Details</h2>
    <cartProduct2 />
    <cartSummary2 />
  </div>
</template>

<script>
import cartProduct2 from './cartProduct2.vue';
import cartSummary2 from './cartSummary2.vue';

export default {
  components: {
    cartProduct2,
    cartSummary2
  }
}
</script>

<style src="../checkoutPage styles/checkoutPage.css" scoped></style>