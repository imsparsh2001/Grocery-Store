<template>
  <div>
    <div class="container">
      <div>
        <!-- alert -->
        <div class="alert">
          You've got FREE delivery. Start <router-link to="/checkout" class="alert-link">checkout now!</router-link>
        </div>
        <ul class="product-list">
          <ProductItem v-for="key in itemKeys" :key="key" :item="findItemById(key)" />
        </ul>
        <br />
        <!-- buttons -->
        <div>
          <button @click="continueShopping" class="btn btncontinueshopping">Continue Shopping</button>
          <button @click="handleUpdateCart" class="btn btnupdate">Update Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import { mapState } from 'vuex';

export default {
  methods: {
    
    mounted() {
      this.$store.dispatch('cart/loadGroceryData');
    },

    findItemById(id) {
      for (const category of this.groceryData) {
        for (const item of category.items) {
          if (item.id == id) {
            return item;
          }
        }
      }
      return null;
    },

    handleUpdateCart() {
      
      this.$store.dispatch('cart/updateCart').then(() => {
        this.$store.commit('cart/setCartUpdated', true); 
        this.calculateSubTotal(); 
      });
    },

    continueShopping() {
      this.$router.push('/productList');
    },
    calculateSubTotal() {
      const items = this.$store.state.cart.cartItems;
      this.$store.commit('cart/setCartItems', items); 
      this.$store.dispatch('cart/updateCart'); // Update the cart
    },
  },

  computed: {
    ...mapState('cart', ['cartItems']),

    container() {
      return {
        [this.$style.container]: true,
      };
    },

    groceryData() {
      return require('../../../../public/assets/grocery.json');
    },


    itemKeys() {
      const items = this.$store.getters['cart/cartItemsWithDetails'];
      return items.map((item) => item.id);
    },

  },
  components: {
    ProductItem,
  },

  created() {
    this.$store.dispatch('cart/loadGroceryData');
  },
};
</script>

<style src="../addToCart styles/addToCart.css" scoped></style>
