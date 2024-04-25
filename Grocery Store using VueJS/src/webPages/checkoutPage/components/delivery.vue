<template>
  <div class="delsec">
    <div class="location" style="margin-left: 0%;">
      <div>
        <font-awesome-icon icon="fa-solid fa-location-dot" style="margin-top: 6px;" />
        <h3 style="margin-left: 6px;">Add Delivery Address</h3>
      </div>
      <button @click="showLocationPopup">Add a new address</button>
    </div>
    
    <!-- Modal -->
    <div v-if="showPopup" class="modal-overlay1">
      <div id="popup-body1">
        <button class="close-button" id="cross1" @click="hideLocationPopup">
          &times;
        </button>
        <p class="headline" style="font-size: 18px">
          <b>New Shipping Address</b>
        </p>
        <p class="description" style="font-size: 14px">
          Add a new shipping address for your order delivery
        </p>
        <form class="addrform" @submit.prevent="submitForm">
          <div class="overlayradio" style="display: flex; justify-content: space-evenly">
            <label for="Home" style="display: flex; justify-content: center; align-items: center;">
              <input id="Home" type="radio" name="type" value="Home" v-model="newAddressData.type" />
              Home
            </label>
            <label for="Office" style="display: flex; justify-content: center; align-items: center;">
              <input id="Office" type="radio" name="type" value="Office" v-model="newAddressData.type" />
              Office
            </label>
            <label for="other" style="display: flex; justify-content: center; align-items: center;">
              <input id="other" type="radio" name="type" value="other" v-model="newAddressData.type" />
              Other
            </label>
          </div>

          <input required type="text" name="firstName" id="firstName" placeholder="First Name"
            v-model="newAddressData.firstName" />
          <input required type="text" name="lastName" id="lastName" placeholder="Last Name"
            v-model="newAddressData.lastName" />
          <input required type="email" name="Email" id="Email" autocomplete="email" placeholder="Email"
            v-model="newAddressData.Email" />
          <input required type="text" name="addressLine1" id="addressLine1" placeholder="Address Line 1"
            v-model="newAddressData.addressLine1" />
          <input required type="text" name="addressLine2" id="addressLine2" placeholder="Address Line 2"
            v-model="newAddressData.addressLine2" />
          <input required type="text" name="city" id="city" placeholder="City" v-model="newAddressData.city" />
          <label for="state"></label>
          <select id="state" name="state" v-model="newAddressData.state">
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="kerala">Kerala</option>
            <option value="Telangana">Telangana</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          <input type="text" name="zipCode" id="zipCode" placeholder="Zip code" v-model="newAddressData.zipCode" />

          <div>
            <input type="checkbox" name="isDefault" id="isDefault" v-model="newAddressData.isDefault" />
            <label for="isDefault">Set as default</label>
          </div>

          <button type="submit" class="saveaddress">Save address</button>
          <button class="cancel" @click="hideLocationPopup">Cancel</button>
        </form>
      </div>
    </div>

    <div class="submitted-data address" v-if="submitted">
      <div v-for="(address, index) in addresses" :key="index">
        <input type="radio" :value="address" id="radio" v-model="selectedAddress" :checked="address.isDefault" />
        <strong> {{ address.type }}</strong>
        <hr>
        <p><strong> {{ address.firstName }}</strong></p>
        <p>{{ address.addressLine1 }} {{ address.addressLine2 }} {{ address.city }}</p>
        <p> {{ address.zipCode }}</p>
        <p v-if="address.isDefault === true" style="color: red;">Default address</p>
      </div>
    </div>
    <div>
      <InstructionsComp :addresses=addresses />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InstructionsComp from './instructions.vue';

export default {
  name: "DeliveryComp",
  components: {
    InstructionsComp,
    FontAwesomeIcon
  },

  data() {
    return {
      showPopup: false,
      addresses: [],
      newAddressData: {
        type: "Home",
        firstName: "",
        lastName: "",
        Email: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "Karnataka",
        zipCode: "",
        isDefault: false,
      },
      submitted: false,
      selectedAddress: null,
      selectedType: '',
    };
  },

  methods: {
    showLocationPopup() {
      // console.log("showLocationPopup called");
      this.showPopup = true;
    },

    hideLocationPopup() {
      // console.log("hideLocationPopup called");
      this.showPopup = false;
    },

    submitForm() {
      if (!this.newAddressData.type) {
        alert("Please select an address type.");
        return;
      }

      this.submitted = true;
      const submittedAddress = { ...this.newAddressData };
      const existingAddressIndex = this.addresses.findIndex(address => address.type === submittedAddress.type);

      if (existingAddressIndex !== -1) {
        this.addresses.splice(existingAddressIndex, 1, submittedAddress);
      } else {
        if (submittedAddress.isDefault) {
          this.addresses.forEach(address => {
            address.isDefault = false;
          });
        }
        this.addresses.push(submittedAddress);
      }

    

      this.newAddressData = {
        type: "Home",
        firstName: "",
        lastName: "",
        Email: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "Karnataka",
        zipCode: "",
        isDefault: false,
      };

      this.hideLocationPopup();
    },
  },

};
</script>

<style src="../checkoutPage styles/checkoutPage.css" scoped></style>
