<template>
  <div class="chkout">
    <div class="nav">
      <ul>
        <li><router-link to="/">Home</router-link> /</li>
        <li>Shop /</li>
        <li>Checkout /</li>
      </ul>
    </div>
    <div class="subheading">
      <h1>Checkout</h1>
      <p>Already have an account? Click here to <span style="color: green;">signin</span></p>
    </div>
    <div class="delsections">
      <DelivaryComp />
      <OrderDetailsComp/>
     
  </div>
  </div>
</template>

<script>
import OrderDetailsComp from "@/webPages/checkoutPage/components/orderDetail.vue";
import DelivaryComp from "../webPages/checkoutPage/components/delivery.vue";

export default {
  name: "CheckoutComp",
  components: {
    DelivaryComp,
    OrderDetailsComp,

  },
};
</script>

<style src="../webPages/checkoutPage/checkoutPage styles/checkoutPage.css">
/* Add your component-specific styles here */
</style>
