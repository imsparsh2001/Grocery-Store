import "../styles/index.css";
import "../styles/mobile.css";

const Signup = () => {
  return (
      <section className="sign-up">
      {/* Sign-up Content */}
      <article>
        <p>$30 discount for your first order</p>
        <h3>Get top deals,latest trends, and more.</h3>
        <p>
          Join our mail subscription now to get updates on promotions and
          coupons.
        </p>
        {/* Form to accept Mail ID */}
        <form action="#" method="get">
          {/* Input tag with placeholder and validation for user to enter their mail */}
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            autoComplete="true"
          />
          {/* button to submit the form */}
          <button type="submit" id="signup">Sign Up</button>
        </form>
      </article>

      {/* Image for the sign-up section */}
      <img src="../Images/girl-email.png" alt="girl-email.png" />
    </section>
  );
};

export default Signup;
