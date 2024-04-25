<template>
  <div class="summarycontainer">
    <div class="summarycard">
      <ul class="summarylist">
        <li id="itemsub" class="summaryitem">
          <div>Item Subtotal</div>
          <span>${{ subTotal.toFixed(2) }}</span>
        </li>
        <li id="servicefee" class="summaryitem">
          <div>Service Fee</div>
          <span>$3.00</span>
        </li>
        <li id="subtotal" class="summaryitem">
          <div class="boldtext">Subtotal</div>
          <span class="boldtext">${{ (subTotal + 3.00).toFixed(2) }}</span>
        </li>
      </ul>
    </div>
    <br />
    <div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      subTotal: 0,
      listOfSubtotal : [],
    };
  },

  computed: {
    items() {
      return this.$store.state.cart.cartItems;
    },
  },

  watch: {
    items: {
      handler() {
        this.calculateSubTotal();
      },
      deep: true,
    },
  },

  methods: {
    calculateSubTotal() {
      this.subTotal = this.items.reduce((total, item) => {
        const itemDetails = this.$store.getters['cart/getItemById'](item.id);
        if (itemDetails) {
          return total + itemDetails.price * item.quantity;
        } else {
          return total;
        }
      }, 0);
      const newSubtotal = JSON.parse(localStorage.getItem('SubTotal')) || [];
      this.listOfSubtotal = [...newSubtotal, this.subTotal+3];
      localStorage.setItem('SubTotal', JSON.stringify(this.listOfSubtotal));

    },
  },

  created() {
    this.$store.dispatch('cart/loadGroceryData').then(() => {
      this.calculateSubTotal();
    });
  },
};
</script>


<style src="../../addToCartPage/addToCart styles/addToCart.css" scoped></style>