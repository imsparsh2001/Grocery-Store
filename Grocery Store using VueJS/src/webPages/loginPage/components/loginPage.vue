<template>
  <div class="admin-login-page">
    <div class="admin-img">
      <img src="Images/picture1.png" alt="" />
    </div>

    <div class="signin-form">
      <div>
        <!-- Info about login to user -->
        <h2>Sign in</h2>
        <p>Welcome back to FreshCart! Enter your email to get started.</p>
        <form @submit.prevent="handleSubmit">
          <!-- input for email with validation -->
          <input ref="ip1" required class="input-bar" type="email" placeholder="Email" id="admin-email"
            v-model="formData.username" />
          <br />
          <!-- input for password -->
          <input ref="ip2" required class="input-bar" type="password" placeholder="••••••" id="admin-password"
            v-model="formData.password" />
          <br />
          <input ref="ip3" type="checkbox" id="remember-me" name="remember-me" v-model="formData.remember" />
          &nbsp;
          <label for="remember-me">Remember Me</label>
          <br />
          <!-- button for login in -->
          <button type="submit" class="signin-btn">
            <strong>Sign In</strong>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  
  name: "LoginComp",
  data() {
    return {
      formData: {
        username: "",
        password: "",
        remember: false,
      },
    };
  },

  mounted() {
      this.$refs.ip1.focus();
    // Retrieve data from localStorage
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("formData"));

    // Update formData with the retrieved data
    if (dataFromLocalStorage) {
      this.formData = dataFromLocalStorage;
    }

    // Update the checked attribute of the checkbox
    if (this.$refs.ip3) {
      this.$refs.ip3.checked = this.formData.remember;
    }
  },

  methods: {

    //  method to check whether the user has provided both the fields or not as well as the user is the admin or not
    handleSubmit() {
      if (this.$refs.ip1.value && this.$refs.ip2.value) {
        if (this.$refs.ip1.value === "admin@admin.in" && this.$refs.ip2.value === "admin") {
          if (this.$refs.ip3.checked) {
            this.updateFormData();
            this.handleSuccessfulLogin();
          } else {
            this.handleSuccessfulLogin();
          }
        } else {
          alert("Invalid Login Details");
          this.handleUnsuccessfulLogin();
        }
      } else {
        alert("Fill login details");
      }
    },
    // saving the admin details in local storage
    updateFormData() {
      this.formData = {
        username: this.$refs.ip1.value,
        password: this.$refs.ip2.value,
        remember: this.$refs.ip3.checked,
      };
      localStorage.setItem("formData", JSON.stringify(this.formData));
    },
    // if the admin details are correct then redirect him to the order data page
    handleSuccessfulLogin() {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      this.$router.push("/orderdata");
    },
    //if it is not correct then it will redirect you to loginPage
    handleUnsuccessfulLogin() {
      this.$router.push("/loginPage");
      this.formData = { username: "", password: "", remember: false };
      localStorage.setItem("formData", JSON.stringify(this.formData));
    },
  },
};
</script>
  
<style src="../../loginPage/loginPage styles/loginPage.css" scoped></style>
  