<template>
    <div class="OrderConfirm">
        <h1>Checkout</h1>
        <div class="mainbox">
            <span><font-awesome-icon icon="fa-regular fa-circle-check" /></span>
            <div class="firstbox">
                <p class='order-text'>Order {{ orderid }}</p>
                <h2>Thank you {{ addresses.firstName }} </h2>
            </div>

            <div class='orderUpdates'>
                <h2>Order Updates</h2>
                <p class="text-style">You will receive order and shipping updates via email</p>
            </div>
        </div>
        <div class="blank-space"></div>
        <div class="table-content">
            <div class="inside-content">
                <p class='info-q'><strong>Contact</strong></p>
                <p> {{ addresses.Email }} </p>
            </div>
            <div class="inside-content">
                <p class='info-q'><strong>Address</strong></p>
                <div class="paras-for-add">
                    <p> {{ addresses.addressLine1 }} , {{ addresses.addressLine2 }} , {{ addresses.state }} -
                        {{ addresses.zipCode }} </p>
                </div>
            </div>
            <div class="inside-content">
                <p class='info-q'><strong>Payment</strong></p>
                <p> {{ paymentMethod }} </p>
            </div>
        </div>
    </div>
</template>
  
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'OrderConfirmationComp',
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            addresses: [],
            paymentMethod: "",
            orderid: null,
            paymentM: []
        }
    },
    //Accessing data from store
    mounted() {
        // console.log(this.$store.state.orderDetails.addresses);
        this.addresses = this.$store.state.orderDetails.addresses;
        //   console.log(this.addresses)
        //   console.log(this.$store.state.orderDetails.selectedPaymentMethod);
        this.paymentMethod = this.$store.state.orderDetails.selectedPaymentMethod;
        //   console.log(this.paymentMethod);
        this.orderid = "#BM" + Math.floor(1000 + Math.random() * 9000);
        const storedOrderData = JSON.parse(localStorage.getItem('OrderData')) || [];
        const storedPaymentData = JSON.parse(localStorage.getItem('PaymentData')) || [];
        const newOrderData = [...storedOrderData, this.orderid];
        const newPaymentData = [...storedPaymentData, this.paymentMethod];
        localStorage.setItem('OrderData', JSON.stringify(newOrderData));
        localStorage.setItem('PaymentData', JSON.stringify(newPaymentData));
    },
};
</script>
  
<style src="../orderConfirmation styles/orderConfirmation.css" scoped></style>
  