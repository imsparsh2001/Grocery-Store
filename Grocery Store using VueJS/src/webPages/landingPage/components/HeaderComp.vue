<template>
  <div class="container1">
    <header id="header">
      <a href="#">
        <img src="/Images/logo.PNG" alt="logo" class="logo-image" height="80px" width="80px" />
      </a>
      <input type="search" id="search" name="search" placeholder="Search for Products" class="searchBar"
        :style="{ backgroundImage: 'url(/Images/search-bar.png)' }" />
      <div class="nav">
        <a href="#">
          <img src="/Images/like.png" alt="logo" class="like-image" height="40px" width="40px" />
        </a>
        <a href="#" id="location" @click="showLocationPopup">
          <img src="/Images/location.png" alt="logo" id="location-image" height="40px" width="40px" />
        </a>
        <router-link to="/loginPage">
          <a>
            <img src="/Images/person.png" alt="logo" id="person-image" height="40px" width="40px" />
          </a>
        </router-link>
        <router-link to="/cart">
          <a href="#">
            <img src="/Images/cart.png" alt="logo" id="cart-image" height="40px" width="40px" />
          </a>
        </router-link>
      </div>
    </header>
    <hr />

    <!-- location-overlay section -->
    <div v-if="showPopup" class="" id="blur" @click="hideLocationPopupOutside">
      <div id="popup-body" @click.stop>
        <button class="close-button" id="cross" @click="hideLocationPopup">
          &times;
        </button>
        <p class="headline" style="font-size: 18px">
          <b>Choose Your Delivery location</b>
        </p>
        <p class="description" style="font-size: 14px">
          Enter your address and we will specify the offer you area.
        </p>
        <input type="search" placeholder="Search your area." id="areaSearch" />

        <!-- table of location overlay -->
        <table class="LocationTable">
          <thead>
            <tr>
              <td id="loc"><b>Select Location</b></td>
              <td class="td-btn">
                <button class="clearBtn">Clear All</button>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(location, index) in locations" :key="index">
              <td>{{ location.name }}</td>
              <td>{{ location.minimum }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'HeaderComp',

  data() {
    return {
      showPopup: false,
      locations: [
        { name: 'Albama', minimum: 'Min:$20' },
        { name: 'Alaska', minimum: 'Min:$30' },
        { name: 'Arizona', minimum: 'Min:$50' },
        { name: 'California', minimum: 'Min:$29' },
        { name: 'Colorado', minimum: 'Min:$80' },
        { name: 'Florida', minimum: 'Min:$90' },
      ],
    };
  },

  methods: {
    showLocationPopup() {
      // console.log('showLocationPopup called');
      this.showPopup = true;
    },

    hideLocationPopup() {
      // console.log('hideLocationPopup called');
      this.showPopup = false;
    },

    hideLocationPopupOutside(event) {
      // Check if the click event occurred outside the popup body
      if (event.target.id === 'blur') {
        this.hideLocationPopup();
      }
    },
  },
}
</script>
  
 
<style src="../landingPage styles/HeaderComp.css" scoped></style>



  