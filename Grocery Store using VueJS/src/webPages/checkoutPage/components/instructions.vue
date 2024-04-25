<template>
  <div>
    <div class="delins">
      <font-awesome-icon icon="fa-solid fa-bag-shopping" style="margin-top: 6px;" />
      <h3>Delivery instructions</h3>
    </div>
    <p style="margin: 5px;">Delivery instructions</p>
    <textarea placeholder="Write delivery instructions" rows="5" id="delins" name="deliveryinstructions"
      style="padding: 5px;"></textarea>
    <p>Add delivery instructions of how you want your order to be shipped and/or delivered</p>
    <div class="btncls">
      <button class="pre" @click="handlePrev">Prev</button>
      <button class="next" @click="handleNext">Next</button>
    </div>
    <hr />
    <PaymentComp v-if="isComponentVisible" :addresses="addresses" />
  </div>
</template>

<script>
import PaymentComp from './payment.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "InstructionsComp",
  data() {
    return {
      isComponentVisible: false,
      addresses: {},
    };
  },

  components: {
    PaymentComp,
    FontAwesomeIcon
  },

  methods: {
    handleNext() {
      if (!this.$parent.selectedAddress) {
        alert('Please select a delivery address before proceeding to payment.');
        return;
      }

      this.isComponentVisible = !this.isComponentVisible;
      this.addresses = this.$parent.selectedAddress;
    },

    handlePrev() {
      this.$router.push('/cart')
    }
  },
};
</script>

<style src="../checkoutPage styles/checkoutPage.css" scoped></style>
