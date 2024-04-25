<template>
  <div class="summarycontainer">
    <div class="summarybox">
      <div class="summarycontent">
        <h2 class="summaryheading">Summary</h2>
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
        <button class="actionbtn primaryaction" type="button" @click="checkoutClick">
          Go to Checkout <span class="boldtext">${{ (subTotal + 3.00).toFixed(2) }}</span>
        </button>
        <p>
          <small>
            By placing your order, you agree to be bound by the Freshcart
            <a>Terms of Service</a> and
            <a>Privacy Policy.</a>
          </small>
        </p>
        <div>
          <br />
          <br />
          <h2 class="summaryheading">Add Promo or Gift Card</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subTotal: 0,
    };
  },

  computed: {
    items() {
      return this.$store.state.cart.cartItems;
    },
  },

  watch: {
  '$store.state.cart.isCartUpdated'(newVal) {
    if (newVal) {
      this.calculateSubTotal();
      this.$store.commit('cart/setCartUpdated', false); 
    }
  },
},
  methods: {

    calculateSubTotal() {
      this.subTotal = this.items.reduce((total, item) => {
        const itemDetails = this.$store.getters['cart/getItemById'](item.id);
        if (itemDetails) {

          return total + itemDetails.price * item.quantity;
        } else {
          console.error('Item details not found for item ID:', item.id);
          return total;
        }
      }, 0);
    },
    handleCartUpdated() {
    this.calculateSubTotal();

  },

    checkoutClick() {
      this.$router.push('/checkout')
    },
  },

  created() {
    this.$store.dispatch('cart/loadGroceryData').then(() => {
      this.calculateSubTotal();
    });
  },
};
</script>


<style src="../addToCart styles/addToCart.css" scoped></style>
