// Navbar.js
import style from "../styles/cartstyles.module.css"
import React from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className={style.navbar}>
      <ul className={style.nav_list}>
        <li className={style.nav_item}>
          <a onClick={() => navigate("/")} className={style.nav_link}>
            Home
          </a>
        </li>
        <li className={style.nav_item}>
          <a onClick={() => navigate("/productList")} className={style.nav_link}>
            Shop
          </a>
        </li>
        <li className={style.nav_item}>
          <a href="#cart" className={style.nav_link}>
            Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
