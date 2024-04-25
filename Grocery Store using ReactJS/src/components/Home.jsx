import React from "react";
import Signup from "./sign-up";
import Footer from "./footer";
import ImageSection from "./image-section";
import PopularCategories from "./popular-categories-section";
import SpecialOffers from "./specialOffers";
import OrderConfirmation from "./orderConfirmation";
import Header from "./header";
import Cart from "./cart";

const Home = () => {

  return ( <>
     <Header/>
     
      <div >
      <ImageSection  />
      <PopularCategories  />
      <SpecialOffers   />
      <Signup   />
      <Footer   />
      </div>
      {/* <Cart/> */}
      
     {/* <button className='btn btn-primary' onClick={()=>navigate("/thumbnail")}>Thumbnail</button> */}
   
    </>
  );
};

export default Home;
