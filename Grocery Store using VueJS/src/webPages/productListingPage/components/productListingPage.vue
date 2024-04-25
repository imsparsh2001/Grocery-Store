<template>
  <div class="categories-main" :style="{ marginBottom: '15px' }">
    <p>
      <router-link to="/">Home </router-link> / Shop / Snacks & Munchies
    </p>
    <div class="product-details">
      <div class="left-categories">

        <!-- Categories Container  -->
        <div class="Categories-Container">
          <h3 class="categories-heading">Categories</h3>
          <!-- Loop through categories using Vue.js v-for directive -->
          <div class="cat" v-for="category in categories" :key="category.name">
            <a style="display: flex;justify-content: space-between;" @click="handleCategoryClick(category.name)">
              <div>
                {{ category.name }}
              </div>
              <div>
                <font-awesome-icon icon="fa-solid fa-angle-right" />
              </div>
            </a>
          </div>
        </div>

        <!-- Container for the price filter -->
        <div class="price-filter-cont ainer">
          <div class="price-filter-box">
            <div class="price-filter-content" style="max-width: 390px;">

              <h3 class="price-heading">Price </h3>
              <div class="price-range-container">
                <Slider class="custom-slider" v-model="sliderValue" :min="minValue" :max="maxValue" :range="true"
                  @change="updateSliderValue" style="background-color: green;">
                  <template v-slot:startHandle>
                    <span class="p-slider-handle start-handle custom-handle" style="left: 1.5%;"></span>
                  </template>
                  <template v-slot:endHandle>
                    <span class="p-slider-handle end-handle custom-handle"></span>
                  </template>
                </Slider>

                <!-- current selected price range -->
                <p id="priceRange-value" class="price-value">Price Range : {{ formatSliderValue(sliderValue) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
  <!-- Ratings section -->
  <h3 class="star-ratings">Ratings</h3>
  <div class="stars">
    <template v-for="star in 5" :key="star">
      <input type="checkbox" :id="`star${5 - star + 1}`" :checked="selectedStars === 5 - star + 1" @change="handleStars(5 - star + 1)" />
      <font-awesome-icon class="view-star" icon="star" v-for="i in 5 - star + 1" :key="i" />
      <font-awesome-icon class="view-star" icon="far fa-star" v-for="i in star - 1" :key="i" />
      <br />
    </template>
  </div>
</div>

      </div>

      <div class="right-categories">
        <div class="Product-header">
          <h3>Snacks & Munchies</h3>
          <br />
        </div>
        <div class="product-row">
          <div class="product-col">
            <div class="product-flex-container">
              <div class="product-info">
                <!-- count of filtered products -->
                <p class="product-count">{{ filteredItemCount }} Products found</p>
              </div>
              <!-- Icon Section -->
              <div class="product-icon">
                <div class="icon-links">

                  <font-awesome-icon icon="fa-solid fa-list-ul" />
                  <font-awesome-icon icon="fa-solid fa-border-all" />
                  <font-awesome-icon icon="fa-solid fa-grip" />
                </div>
              </div>

              <div class="dropdowns">
                <div class="select-wrapper">

                  <select id="product-select" class="product-select">
                    <option selected>Show: 50</option>
                    <option value="60">Show 60</option>
                    <option value="70">Show 70</option>
                    <option value="80">Show 80</option>
                  </select>
                </div>
                <div class="select-wrapper">
                  <!-- Dropdown to sort products by price -->
                  <select id="productselected" class="product-select" @change="handleSortByPrice">
                    <option selected>Sort by: Featured</option>
                    <option value="Low to High">Price: Low to High</option>
                    <option value="High to Low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product details container -->
        <article class="product">
          <div v-for="category in filteredItems" :key="category.name">
            <div v-for="item in category.items" :key="item.id" class="productSection">
              <img class="productlist-image" :src="item.img[0]" alt="" @click="navigateToThumbnail(item.id)" />

              <!-- Product Description -->
              <div class="product-description">
                <p class="product-categories">{{ item.category }}</p>
                <p :style="{ fontSize: '17px' }">
                  <b class="product-name">{{ item.name }}</b>
                </p>

                <div class="rating">
                  <!-- Display star icons based on the item's rating -->
                  <font-awesome-icon style="color: rgb(245, 217, 34);" v-for="i in 5" :key="i"
                    :icon="getStarIcon(i, item.rating)" />
                  <span style="margin-left: 5px;">{{ item.rating }}</span>
                </div>

                <!-- Product Price -->
                <p class="product-price">
                  ${{ item.price }}
                </p>

                <!-- Action Icons -->
                <div class="icons-container">
                  <font-awesome-icon icon="fa-solid fa-eye" class="product-icons" />
                  &nbsp;
                  <font-awesome-icon icon="fa-regular fa-heart" class="product-icons" />
                  &nbsp;
                  <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" class="product-icons" />
                </div>

                <!-- Add to Cart Button -->
                <button @click="addToCart(item.id)" class="Cart-button">
                  <font-awesome-icon icon="fa-solid fa-bag-shopping" />&nbsp;
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </article>

        <br />
        <nav aria-label="Pagination">
          <ul class="pagination">
            <li class="pagination-item disabled">
              <a class="pagination-link" href="#" tabindex="-1" aria-disabled="true"><font-awesome-icon
                  icon="fa-solid fa-angle-left" /></a>
            </li>
            <li class="pagination-item active">
              <a class="pagination-link" href="#">1 <span class="visually-hidden"></span></a>
            </li>
            <li class="pagination-item"><a class="pagination-link" href="#">2</a></li>
            <li class="pagination-item"><a class="pagination-link" href="#">...</a></li>
            <li class="pagination-item"><a class="pagination-link" href="#">12</a></li>
            <li class="pagination-item">
              <a class="pagination-link" href="#"><font-awesome-icon icon="fa-solid fa-angle-right" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

// Libraries Imports
import { mapGetters } from 'vuex';
import Slider from 'primevue/slider';
import { library } from '@fortawesome/fontawesome-svg-core';
import groceryData from '../../../../public/assets/grocery.json';
import { faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faArrowRightArrowLeft, faBagShopping, faBorderAll, faEye, faGrip, faHeart, faListUl } from '@fortawesome/free-solid-svg-icons';
library.add(faStar, faListUl, faBorderAll, faGrip, faEye, faHeart, faArrowRightArrowLeft, faBagShopping, faAngleRight, faStarHalf, faAngleLeft, faAngleRight)

export default {
  name: "ListComp",

  data() {
    return {
      groceryData: [],
      categories: [
        { name: 'Best sellers' },
        { name: 'Veg Pizzas' },
        { name: 'NonVeg Pizzas' },
        { name: 'Side Dishes' },
        { name: 'Desserts' }
      ],
      sliderValue: [99, 600],
      minValue: 0,
      maxValue: 800,
      filteredItems: [],
      selectedStars: null,
      selectedCategory: null,
      filteredItemsCount: 0
    };
  },
  components: {
    Slider,
  },

  mounted() {
    this.fetchGroceryData();
  },

  computed: {
    ...mapGetters('cart', ['cartItemsWithDetails']),

    filteredItemCount() {
      return this.filteredItems.reduce((count, category) => count + category.items.length, 0);
    }
  },

  methods: {
    // Navigation to thumbnail page
    navigateToThumbnail(item_id) {
      this.$router.push({ name: 'thumbnail', params: { id: item_id } });
    },

    // Function to fetch data from Json file on the load of this page
    fetchGroceryData() {
      this.groceryData = groceryData;
      if (Array.isArray(this.groceryData)) {
        this.filteredItems = this.groceryData.map(category => {
          return {
            ...category,
            items: category.items.filter(item => {
              return item.category === 'Best sellers';
            })
          };
        }).filter(category => category.items.length > 0);
      }
    },

    // Categories filters
    handleCategoryClick(value) {
      this.selectedCategory = value;
      this.updateFilteredItems();
    },

    //Star rating filters
    handleStars(value) {
      this.selectedStars = this.selectedStars === value ? null : value;
      this.updateFilteredItems();
    },

    // Update slider value
    updateSliderValue() {
      this.updateFilteredItems();
    },

    // Format slider value
    formatSliderValue(value) {
      const [start, end] = Array.isArray(value) ? value : [value, value];
      return `${start} to ${end}`;
    },

    //Sending product id to cart page onclick of Add to cart button
    addToCart(id) {
      const item = this.$store.getters['cart/getItemById'](id);
      this.$store.dispatch('cart/addToCart', item.id);
      this.$router.push('/cart');
    },

    // Get star icon based on rating
    getStarIcon(index, rating) {
      if (index <= rating) {
        return 'fas fa-star';
      } else if (index - 0.8 <= rating) {
        return 'fas fa-star-half-stroke';
      } else {
        return 'far fa-star';
      }
    },

    // Update filtered items based on filters
    updateFilteredItems() {
      this.filteredItems = this.groceryData.map(category => {
        return {
          ...category,
          items: category.items.filter(item => {
            const categoryMatch = !this.selectedCategory || item.category === this.selectedCategory;
            const starsMatch = !this.selectedStars || item.rating >= this.selectedStars;
            const priceMatch = this.sliderValue[0] <= item.price && item.price <= this.sliderValue[1];
            return categoryMatch && starsMatch && priceMatch;
          })
        };
      }).filter(category => category.items.length > 0);
    },
    
    //  sorting by price function
    handleSortByPrice(event) {
      const sortBy = event.target.value;
    

      if (sortBy === 'Low to High') {
        
        this.filteredItems.forEach(category => {
          category.items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        });
      } else if (sortBy === 'High to Low') {
       
        this.filteredItems.forEach(category => {
          category.items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        });
      }

     
    },

  }

};
</script>


<style src="../productListingPage styles/productListingPage.css" scoped></style>