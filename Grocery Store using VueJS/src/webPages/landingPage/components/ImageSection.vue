<template>
  <div class="container2">
    <section class="image-section">
      <div class="left-image">
        <img src="../../../../public/Images/slider-image-1.jpg" alt="Large-img" />
        <div class="image-overlay">
          <p style="fontWeight: 600 ">
            Exclusive Offer <span class="highlight">15%</span>
          </p>
          <h1>
            Best Online<br />
            Deals, Free Stuff
          </h1>
          <p style="fontWeight: 600 ">Only on this Week...don't miss</p>
          <p style="fontWeight: 600 ">
            Starts from <span class="price">$5.99</span>
          </p>
          <button class="green-button">Get Best Deals -&gt;</button>
        </div>
      </div>

      <div class="right-top-image">
        <img src="../../../../public/Images/ad-banner-1.jpg" alt="Small-img" />
        <div class="top-image">
          <h1>
            10% Cashback on <br />
            Personal Care
          </h1>
          <p style="fontWeight: 600 ">
            Max Cashback: $12<br />Code:<span class="code">CARE12</span>
          </p>
          <button>Shop Now</button>
        </div>
      </div>
      <div class="right-bottom-image">
        <img src="../../../../public/Images/ad-banner-2.jpg" alt="Small-img" />
        <div class="bottom-image">
          <h1>
            Say yes to <br />
            season's fresh
          </h1>
          <p style="fontWeight: 600 ">
            Refresh your day <br />
            the fruity way
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ImageSection"
}
</script>

<style src="../landingPage styles/ImageSection.css" scoped></style>