<template>
  <section className="sign-up">
    <!--  Sign-up Information  -->
    <article>
      <p>$30 discount for your first order</p>
      <h3>Get top deals,latest trends, and more.</h3>
      <p>
        Join our mail subscription now to get updates on promotions and
        coupons.
      </p>
      <!--  Form for email  -->
      <form action="#" method="get">
        <!--  Input for email with validation -->
        <input required type="email" name="email" id="email" placeholder="Email Address" autoComplete="true" />
        <!--  button to submit the form -->
        <button type="submit" id="signup">Sign Up</button>
      </form>
    </article>

    <!-- Image for the sign-up section  -->
    <img src="../../../../public/Images/girl-email.png" alt="girl-email.png" />
  </section>
</template>

<script>
export default {
  name: "SignUp"
}
</script>
<style src="../landingPage styles/SignUp.css" scoped></style>



