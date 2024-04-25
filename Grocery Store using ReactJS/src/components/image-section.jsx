import React from 'react';
import '../styles/index.css'; 
import '../styles/mobile.css'; 

let ImageSection = () => {
  return (
    <div className="container2">
      <section className="image-section">
        <div className="left-image">
          <img src="./Images/slider-image-1.jpg" alt="Large-img" />
          <div className="image-overlay">
            <p style={{ fontWeight: 600 }}>
              Exclusive Offer <span className="highlight">15%</span>
            </p>
            <h1>
              Best Online<br />
              Deals, Free Stuff
            </h1>
            <p style={{ fontWeight: 600 }}>Only on this Week...don't miss</p>
            <p style={{ fontWeight: 600 }}>
              Starts from <span className="price">$5.99</span>
            </p>
            <button className="green-button">Get Best Deals -&gt;</button>
          </div>
        </div>

        <div className="right-top-image">
          <img src="./Images/ad-banner-1.jpg" alt="Small-img" />
          <div className="top-image">
            <h1>
              10% Cashback on <br />
              Personal Care
            </h1>
            <p style={{ fontWeight: 600 }}>
              Max Cashback: $12<br />Code:<span className="code">CARE12</span>
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="right-bottom-image">
          <img src="./Images/ad-banner-2.jpg" alt="Small-img" />
          <div className="bottom-image">
            <h1>
              Say yes to <br />
              season's fresh
            </h1>
            <p style={{ fontWeight: 600 }}>
              Refresh your day <br />
              the fruity way
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSection;