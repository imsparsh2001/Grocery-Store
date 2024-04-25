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
      <Orderdetail />
      <InstructionComp />
    </div>
  </div>
</template>
  
<script>
import DelivaryComp from './delivery.vue';
import Orderdetail from './orderDetail.vue';
import InstructionComp from './instructions.vue'

export default {

  name: "CheckoutComp",
  
  components: {
    DelivaryComp,
    Orderdetail,
    InstructionComp
  },
};
</script>
  
<style src="../checkoutPage styles/checkoutPage.css" scoped></style>
  