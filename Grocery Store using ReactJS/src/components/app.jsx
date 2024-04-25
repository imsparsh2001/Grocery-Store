import React from "react";
// import RelatedItems from "./details-relatedItems";
// import Footer from "./footer";
// import Signup from "./sign-up";
import Thumbnail from "./thumbnail.jsx";
import Home from "./Home";
// import Thumbnail from "./thumbnail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./productList.jsx";
import Cart from "./cart.jsx";
import Admin from "./admin.jsx";
import OrderData from "./order-data.jsx";
import { Checkout } from "./checkout.jsx";
import OrderConfirmation from "./orderConfirmation.jsx";
import { useEffect } from "react";
import '../styles/index.css'
import Header from "./header.jsx";


// import Thumbnail from "./thumbnail";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Home/>}/> 
        <Route path="/thumbnail/:id/:category" element={<Thumbnail />}/>
        <Route exact path="/productList" element={<ProductList/>}/> 
        <Route exact path="/cart" element={<Cart/>}/> 
        <Route exact path="/admin" element={<Admin/>}/> 
        <Route exact path="/orderdata" element={<OrderData />}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route exact path="/orderConfirmation" element={<OrderConfirmation />}/>
      </Routes> 
  
      </BrowserRouter> 
   
  );
};

export default App;
