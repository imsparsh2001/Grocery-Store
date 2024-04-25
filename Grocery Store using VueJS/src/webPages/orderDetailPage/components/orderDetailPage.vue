<template>
  <div v-if="isLoggedIn" class="order-details">
    <div class="orderHeader">
      <div class="input-tags">
        <!-- input to search a particular order id-->
        
        <input type="text" class="searchByText" name="searchbytext" placeholder="Search..." v-model="searchQuery" />
        <!-- drop down for increasing and decreasing orders on the basis of price -->
        <label for="sort-by">Sort By</label>
        <select name="sortBy" id="sort-by" v-model="sortOption">
          <option value="">Choose...</option>
          <option value="id">Order ID</option>
          <option value="total-increasing">Total-Increasing</option>
          <option value="total-decreasing">Total-Decreasing</option>
        </select>

      </div>
      <!-- button for logging out from orderdata page -->
      <button class="logout-btn" @click="logoutHandler">
        <strong>Sign Out</strong>
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <!-- first row displaying the headings of the order details -->
          <th class="row1">
            <input type="checkbox" v-model="selectAllItems" name="selection-all-inp" @change="handleSelectAllChange" />
          </th>
          <th>Order ID</th>
          <th>Date</th>
          <th>Payment Status</th>
          <th>Total</th>
          <th>Payment Method</th>
          <th>Order Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- running a for loop so that when the admin chooses increasing or decreasing option it comes in sorted way  -->
        <tr v-for="(order, index) in sortedOrders" :key="index">
          <td class="row1">
            <input type="checkbox" name="selection-inp" :checked="selectedItems[index] || false"
              @change="() => handleCheckboxChange(index)" />
          </td>
          <td>{{ order.order }}</td>
          <td>{{ new Date().toLocaleDateString() }}</td>
          <td>
            <span class="payment-status">
              <font-awesome-icon icon="money-bill" /> Paid</span>
          </td>
          <td>${{ order.price }}</td>
          <td>{{ payments[index] }}</td>
          <td>
            <span class="order-status">Processing</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "OrderDetail",
  data() {
    return {
      searchQuery: "",
      sortOption: "",
      selectAll: false,
      selectedItems: [],
      isLoggedIn: false,
      orders: [],
      prices: [],
      payments: [],
    };
  },

  components: {
    FontAwesomeIcon
  },
  // on mount of this component we are fetching the local storage data in the declared variables
  mounted() {
    this.orders = JSON.parse(localStorage.getItem("OrderData")) || [];
    this.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.payments = JSON.parse(localStorage.getItem("PaymentData")) || [];
    this.prices = JSON.parse(localStorage.getItem("SubTotal")) || [];
  },

  computed: {
    // it iterate through orders array and for each item in orders it create object with order, price and payment
    mergedArray() {
      return this.orders.map((value, index) => ({
        order: value,
        price: this.prices[index],
        payment: this.payments[index]
      }));
    },
   // it filters the merged array based on searchQuery
    filteredOrders() {
      return this.mergedArray.filter(({ order }) =>
        order.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  //Changed this functionality 
  sortedOrders() {
  if (this.sortOption) {
    return [...this.filteredOrders].sort((a, b) => {
      if (this.sortOption === "id") {
        return a.order.localeCompare(b.order);
      } else if (this.sortOption.includes("total")) {
        // Assuming any option containing "total" means sorting by total
        return this.sortOption.includes("increasing") ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });
  }
  return this.filteredOrders;
},

    selectAllItems: {
      get() {
        return this.selectedItems.length === this.sortedOrders.length && this.selectedItems.every(item => item);
      },
      set(value) {
        this.selectedItems = Array(this.sortedOrders.length).fill(value);
      },
    },
  },
//this watcher is updating the selectAll property based on changes to the selectedItems array
watch: {
  selectedItems: {
    handler() {
      this.updateSelectAll();
    },
    deep: true,
    immediate: true, 
  },
},
// these methods are responsible for managing the state of selected items and a "Select All" checkbox in a list.
  methods: {
    handleCheckboxChange(index) {
      const updatedSelectedItems = [...this.selectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      this.selectedItems = updatedSelectedItems;
    },

    handleSelectAllChange() {
      this.selectAll = !this.selectAll;
    },

    updateSelectAll() {
      this.selectAll = this.selectedItems.every((item) => item);
    },

  //logout will clear the admin information from local storage
    logoutHandler() {
      const saveddata = {
        username: "",
        password: "",
        remember: "",
      }
      this.$router.push("/loginPage");
      localStorage.setItem("formData", JSON.stringify(saveddata));
      this.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", JSON.stringify(this.isLoggedIn));
    },
  },
};
</script>
  
<style src="../orderDetailPage styles/orderDetailPage.css" scoped></style>
  