<template>
  <div id="infopage">
    <div class="navbar">
      <ul>
        <li class="nav-link" @click="showComponent('details')">
          <a>Product Details</a>
        </li>
        <li class="nav-link" @click="showComponent('information')">
          <a>Information</a>
        </li>
        <li class="nav-link" @click="showComponent('Reviews')">
          <a>Reviews</a>
        </li>
        <li class="nav-link" @click="showComponent('Seller Info')">
          <a>Seller Info</a>
        </li>
      </ul>
    </div>
    <hr>

    <detail-segment v-if="selectedComponent === 'details'" />
    <information-segment v-if="selectedComponent === 'information'" />
    <p v-if="selectedComponent === 'Reviews'">
      --need to be added--
    </p>

    <p v-if="selectedComponent === 'Seller Info'">
      --need to be added--
    </p>
  </div>
</template>
  
<script>
import DetailSegment from './detail.vue';
import InformationSegment from './information.vue';

export default {
  name: 'ThumbnailPage',
  components: {
    DetailSegment,
    InformationSegment,
  },
  data() {
    return {
      selectedComponent: 'details', // Set the default selected component
    };
  },
  methods: {
    showComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>
  
<style src="../thumbnailPage styles/thumbnailPage.css" scoped></style>
  