<template>
  <div id="image-thumbnail-container">
    <div class="row">
      <section class="column-1">
        <div class="path">
          <span><router-link to="/">Home /</router-link></span>
          <span> Bakery Biscuits / </span>
          <span> NapolitankeLjesnjak </span>
        </div>

        <!-- Space to display clicked thumbnail photo -->
        <div class="display">
          <img :src="item_data.img && item_data.img[0]" alt="item_img" id="image-space"
            :style="{ height: '400px', width: '500px' }" />
        </div>

        <div class="thumbnails-container">
          <img v-for="(imgUrl, index) in item_data.img && item_data.img.slice(0, 4)" :key="index" class="thumbnail-photo"
            :src="imgUrl" style="height: 70px; width: 85px;" :alt="'Product-img-' + index"
            @click="displayImage(imgUrl)" />
        </div>
      </section>

      <!-- Product Details -->
      <section class="column-2">
        <hgroup>
          <h6>Bakery Biscuits</h6>
          <h2>{{ item_data && item_data.name }}</h2>
        </hgroup>
        
        <div class="review-stars">
          <font-awesome-icon v-for="(x, idx)  in [1, 2, 3, 4]" :key="idx" class="view-star" icon="star" />
          <font-awesome-icon class="view-star" icon="star-half-stroke" />
          <span class="review">(30 reviews)</span>
        </div>

        <h4 class="headingFour">${{ item_data && item_data.price }}</h4>
        <br />

        <div class="thumb-hr">
          <hr />
        </div>
        <br />

        <div>
          <span v-for="(value, index) in item_data.attributes && item_data.attributes.size.slice(0, 3)" :key="index"
            class="size">
            {{ value }}
          </span>
        </div>

        <div class="item_btn">
          <button @click="minus">-</button>
          <button class="num">{{ quantity }}</button>
          <button @click="plus">+</button>
        </div>

        <div class="icons">
          <button id="button" @click="addToCart(item_data.id)"><font-awesome-icon icon="fa-solid fa-shopping-bag" />
            <span>Add to cart</span>
          </button>
          <button class="icon"><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" /></button>
          <button class="icon"><font-awesome-icon icon="fa-regular fa-heart" /></button>
        </div>

        <br />
        <div class="thumb-hr">
          <hr />
        </div>
        <br />

        <div class="item_datarmation">
          <table class="table1">
            <thead></thead>
            <tbody>
              <tr>
                <td class="data">Product: </td>
                <td class="data">{{ item_data && item_data.productCode }}</td>
              </tr>
              <tr>
                <td class="data">Availability: </td>
                <td class="data">{{ item_data && item_data.availability }}</td>
              </tr>
              <tr>
                <td class="data">Type: </td>
                <td class="data">{{ item_data && item_data.type }}</td>
              </tr>
              <tr>
                <td class="data">Shipping: </td>
                <td class="data">{{ item_data && item_data.shipping }}.<span>(Free pickup today)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
  
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import groceryData from '../../../../public/assets/grocery.json';
import { mapGetters } from 'vuex';

export default {
  props: {
        id: {
            type: String,
            required: true,
        },
    },
  data() {
    return {
      item_data: [],
      quantity: 1,
    };
  },
  
  components: {
    FontAwesomeIcon,
  },

  created() {
    this.fetchGroceryData();
  },

  mounted() {
    // console.log('Received props:', this$props..id);
    // console.log(groceryData);
    // console.log(groceryData[0].items);
    // console.log(groceryData[0].items[0].id);
    const foundItem = groceryData.find(item => {
      return item.items.some(data => data.id === parseInt(this.$props.id));
    });

    if (foundItem) {
      this.item_data = foundItem.items.find(data => data.id === parseInt(this.$props.id));
      // console.log(this.item_data);
      // console.log(this.item_data.img[0]);
    } else {
      console.error('Item not found for id:', this.$props.id);
    }
  },

  methods: {
    fetchGroceryData() {
      setTimeout(() => {
        this.groceryData = groceryData;
      }, 1000);
    },

    //Function to change thumbnail images
    displayImage(url) {
      this.currentImage = url;
    },

    //Code to decrease quantity
    minus() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    //Code to increase quantity
    plus() {
      this.quantity++;
    },

    //Function to add items in cart
    addToCart() {
      const cartItemIndex = this.$store.state.cart.cartItems.findIndex((i) => i.id === this.item_data.id);
      if (cartItemIndex !== -1) {
        this.$store.state.cart.cartItems[cartItemIndex].quantity = this.quantity;
      } else {
        // If the item is not in the cart, create a new cart item
        const newItem = {
          id: this.item_data.id,
          quantity: this.quantity,
        };
        this.$store.state.cart.cartItems.push(newItem);
      }

      localStorage.setItem('cartItems', JSON.stringify(this.$store.state.cart.cartItems));

      this.$router.push('/cart');
    },
  },

  computed: {
    ...mapGetters('cart', ['cartItemsWithDetails']),
  },
};
</script>
  
<style  src="../thumbnailPage styles/ImageThumbnail.css" ></style>
  