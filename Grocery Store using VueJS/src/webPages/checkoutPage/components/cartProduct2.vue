<template>
  <div>
    <div class="container" style="margin-left: 0%; padding:0%; padding-top: 10px;">
      <div>
        <ul class="product-list">
          <ProductItem v-for="key in itemKeys" :key="key" :item="findItemById(key)" />
        </ul>
        <br />
      </div>
    </div>
  </div>
</template>


<script>
import ProductItem from './productItem2.vue';
import { mapState } from 'vuex';

export default {
  methods: {
    
    async mounted() {
      await this.$store.dispatch('cart/loadGroceryData');
      // console.log('Mounted: Loaded grocery data');
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
      if (this.items) {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
      }
    },

    continueShopping() {
      this.$router.push('/productList');
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

    cartItems() {
      return this.$store.state.cart.cartItems;
    },

    itemKeys() {
      const items = this.$store.getters['cart/cartItemsWithDetails'];
      return items.map((item) => item.id);
    },
  },

  watch: {
    // cartItems: {
    //   // handler(newValue) {
    //   //   console.log('cartItems changed:', newValue);
    //   // },
    //   deep: true,
    // },

    '$store.state.cart.cartItems': {
      handler(newCartItems) {
        // Handle the case when quantities are updated outside of the component
        this.$store.commit('cart/setCartItems', newCartItems);
      },
      deep: true,
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

<style src="../../addToCartPage/addToCart styles/addToCart.css" scoped></style>