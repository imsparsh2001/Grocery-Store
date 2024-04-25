import React, { useState } from 'react';
import "../styles/index.css";
import "../styles/mobile.css";
import Modal from './modal';
import OrderData from './order-data';
import { useNavigate } from "react-router-dom";
import '../styles/index.css'

// import location from '../Images/location.png'


const Header = () => {
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container1">
      <header className="header">
        <a href="#">
          <img
            src="/Images/logo.PNG"
            alt="logo"
            className="logo-image"
            height="80px"
            width="80px"
          />
        </a>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search for Products"
          className="searchBar"
          style={{ backgroundImage: 'url(/Images/search-bar.png)' }}
        />
        <div className="nav">
          <a href="#">
            <img
              src="/Images/like.png"
              alt="logo"
              className="like-image"
              height="40px"
              width="40px"
            />
          </a>
          <a href="#" id="location">
            <img
             src='/Images/location.png'
              alt="logo"
              id="location-image"
              height="40px"
              width="40px"
              onClick={openModal}
            />
          </a>
          <a href="">
            <img
              src="/Images/person.png"
              alt="logo"
              id="person-image"
              height="40px"
              width="40px"
              onClick={() => navigate("/admin")}
            />
          </a>
          <a href="">
            <img
              src="/Images/cart.png"
              alt="logo"
              id="cart-image"
              height="40px"
              width="40px"
              onClick={() => navigate('/cart')}
            />
          </a>
          <div>
          <Modal isOpen={isModalOpen} setModalOpen={setModalOpen} handleClose={closeModal} />
          </div>
        </div>
      </header>
      <hr />
 
      
    </div>
  );
};

export default Header;