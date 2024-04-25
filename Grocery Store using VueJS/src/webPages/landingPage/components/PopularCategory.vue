<template>
  <div class="container2">
    <section class="popular-categories">
      <h2 class="section-title">Shop popular categories</h2>
      <div class="popular-categories-list">
        <div v-for="(category, index) in groceryData" :key="index" class="category-item">
          <router-link to="/productList">
            <div class="img-wrapper">
              <img :src="category.items[0].img[0]" :alt="category.items[0].img" />
            </div>
          </router-link>
          <p>{{ category.items[0].category }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import groceryData from '../../../../public/assets/grocery.json';

export default {
  name: 'PopularCategories',
  data() {
    return {};
  },

  computed: {
    groceryData() {
      return groceryData;
    },
  },
};
</script>

<style src="../landingPage styles/PopularCategory.css" scoped></style>
