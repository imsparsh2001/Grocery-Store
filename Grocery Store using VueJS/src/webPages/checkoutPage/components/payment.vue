<template>
  <div v-if="showComp">
    <div class="payment">
      <font-awesome-icon icon="fa-solid fa-credit-card" style="margin-top: 5px;" />
      <h3>Payment Methods</h3>
    </div>
    <div>
      <div class="boxbor paypal">
        <input type="radio" id="paypall" name="payment" value="paypall" v-model="selectedPaymentMethod" style="margin-right: 1%;"/>
        <label for="paypall"><b>Payment with Paypal</b></label>
        <p>You will be directed to the PayPal website to complete your payment securely</p>
      </div>
      <div class="boxbor card">
        <input type="radio" id="creditcard" name="payment" value="creditcard" v-model="selectedPaymentMethod" style="margin-right: 1%;" />
        <label for="creditcard"><b>Credit / Debit card</b></label>
        <p>Safe money transfer using a bank account. We support Mastercard, Visa, Discover, and Stripe</p>
        <div class="cardnum">
          <h5 style="margin: 0.5%">Card Number</h5>
          <input id="cardnumber" type="text" placeholder="1234 4567 6789 4321" name="" />
        </div>
        <div class="carddetails">
          <div class="nameoncard">
            <h5>Name on card</h5>
            <input id="cardname" type="text" placeholder="Enter your first name" />
          </div>
          <div class="expiry">
            <h5>Expiry date</h5>
            <input id="expirydate" type="date" placeholder="Select Date" />
          </div>
          <div class="cvv">
            <h5>CVV code</h5>
            <input id="cvv" type="number"  placeholder="•••" />
          </div>
        </div>
      </div>
      <div class="boxbor Payoneer">
        <input type="radio" id="Payoneer" name="payment" value="Payoneer" v-model="selectedPaymentMethod" style="margin-right: 1%;" />
        <label for="Payoneer"><b>Payment with Payoneer</b></label>
        <p>You will be directed to the Payoneer website to complete your payment securely</p>
      </div>
      <div class="boxbor COD">
        <input type="radio" id="COD" name="payment" value="COD" v-model="selectedPaymentMethod" style="margin-right: 1%;" />
        <label for="COD"><b>Cash on Delivery</b></label>
        <p>Pay with cash when your order is delivered</p>
      </div>
    </div>
    <div class="btncls">
      <button class="pre" @click="handlePrev">Prev</button>
      <button class="placeorder" @click="handlePlaceOrder">
        Place Order
      </button>
    </div>
    <hr />
  </div>
</template>
 
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
export default {
  props: {
    addresses: {
      type: Object,
      default: () => ({}),
    },
  },
 
  name: 'PaymentComp',
 
  components: {
    FontAwesomeIcon
  },
 
  data() {
    return {
      showComp: true,
      selectedPaymentMethod: null
    }
  },
 
  methods: {
    handlePlaceOrder() {
      if (this.selectedPaymentMethod) {
        this.$store.commit('orderDetails/setPaymentMethod', this.selectedPaymentMethod);
        this.$store.commit('orderDetails/setAddresses', this.addresses);
        this.$router.push('/OrderConfirmation');
      } else {
        alert('Please select a payment method to place your order.');
      }
    },
    handlePrev() {
    this.$parent.isComponentVisible = false;
  },
  }
}
</script>
 
<style src="../checkoutPage styles/checkoutPage.css" scoped></style>