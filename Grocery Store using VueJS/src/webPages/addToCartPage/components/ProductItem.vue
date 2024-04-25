<template>
  <li :key="item.id" class="productitem">
    <div class="productimage">
      <img :src="item.img[0]" alt="Ecommerce" />
    </div>
    <div class="productdetails">
      <a class="producttitle">{{ item.name }}</a>
      <span class="productprice">{{ `$${item.price}` }}</span>
      <div class="productactions">
        <div class="removecontainer" @click="removeItemFromCart">
          <font-awesome-icon icon="trash" />
          <span class="removetext">Remove</span>
        </div>
      </div>
    </div>
    <div class="quantity">
      <button class="quantitybtn" @click="decreaseQuantity">-</button>
      <input name="quantityInput" type="text" v-model="quantity"  class="quantityInput" step="1" />
      <button class="quantitybtn" @click="increaseQuantity">+</button>
    </div>
    <div class="price">
      <span class="pricevalue">{{ `$${calculatedPrice}` }}</span>
    </div>
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  props: {
    item: Object,
  },

  data() {
    return {
      quantity: this.$store.state.cart.cartItems.find((i) => i.id === this.item.id)?.quantity || 1,
    };
  },

  computed: {
    calculatedPrice() {
      return (this.quantity * this.item.price).toFixed(2);
    },
  },

  methods: {
    removeItemFromCart() {
      this.$store.dispatch('cart/removeItem', this.item.id);
    },

    decreaseQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
        this.updateCartItemQuantity();
      
        if (this.quantity === 0) {
        this.removeItemFromCart();
      }
      }
    },
    
    increaseQuantity() {
      if (this.quantity < 10) {
        this.quantity++;
        this.updateCartItemQuantity();
      }
    },

    updateCartItemQuantity() {
      this.$store.dispatch('cart/setItemQuantity', {
        id: this.item.id,
        quantity: this.quantity,
      });
    },
  },

  watch: {
    '$store.state.cart.cartItems': {
      handler(newCartItems) {
        // Handle the case when quantities are updated outside of the component
        const cartItem = newCartItems.find((i) => i.id === this.item.id);
        this.quantity = cartItem?.quantity || 1;
      },
      deep: true,
    },
  },

  components: {
    FontAwesomeIcon,
  },
};
</script>

<style src="../addToCart styles/addToCart.css" scoped></style>