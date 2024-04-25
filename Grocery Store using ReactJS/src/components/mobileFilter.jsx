import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slider";
import { CiHeart, LiaExchangeAltSolid, PiShoppingBagOpen } from 'react-icons/ci';
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";

const MobileFilter = ({
  values,
  handleChange,
  selectedStars,
  handleStars,
  closeMobileFilter,
  handleCategoryClick,
}) => {



  const formatPrice = (value) => {
    return `${value}`;
  };

  // const handleCategoryClick = (categoryName) => {
  //   setSelectedCategory(categoryName.toLowerCase());
  // };

 

  return (
    <div className="mobile-filter-overlay" >
      <div className="left-categories">
      <button className="close-button" id="cross" onClick={closeMobileFilter}>
        &times;
      </button>
                <h3>Categories</h3>
                <div className="cat">
                  <a onClick={() => handleCategoryClick("Best Sellers")}>
                    Best Sellers
                    <span>
                      <MdArrowForwardIos
                        style={{ fontSize: "12px", marginLeft: "45%" }}
                      />
                    </span>
                  </a>
                </div>
                <div className="cat">
                  <a onClick={() => handleCategoryClick("Veg Pizzas")}>
                    Veg Pizzas
                    <span>
                      <MdArrowForwardIos
                        style={{ fontSize: "12px", marginLeft: "48%" }}
                      />
                    </span>
                  </a>
                </div>
                <div className="cat">
                  <a onClick={() => handleCategoryClick("NonVeg Pizzas")}>
                    Non veg Pizzas
                    <span>
                      <MdArrowForwardIos
                        style={{ fontSize: "12px", marginLeft: "32%" }}
                      />
                    </span>
                  </a>
                </div>
                <div className="cat">
                  <a onClick={() => handleCategoryClick("Side Dishes")}>
                    Side Dishes
                    <span>
                      <MdArrowForwardIos
                        style={{ fontSize: "12px", marginLeft: "44%" }}
                      />
                    </span>
                  </a>
                </div>
                <div className="cat">
                  {" "}
                  <a onClick={() => handleCategoryClick("Desserts")}>
                    Desserts
                    <span>
                      <MdArrowForwardIos
                        style={{ fontSize: "12px", marginLeft: "54%" }}
                      />
                    </span>
                  </a>
                </div>

                <div>
                  <h3 style={{ fontSize: "25px", marginTop: "5px" }}>
                    Price Range
                  </h3>

                  <Slider
                    className="slider"
                    value={values}
                    onChange={handleChange}
                    min={50}
                    max={500}
                  />
                  <div>
                    <p>
                      Price Range: {formatPrice(values[0])} to{" "}
                      {formatPrice(values[1])}
                    </p>
                  </div>
                </div>

                <h2>Rating</h2>
                <input
                  type="checkbox"
                  checked={selectedStars === 5}
                  onChange={() => handleStars(5)}
                />
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <br />
                <input
                  type="checkbox"
                  checked={selectedStars === 4}
                  onChange={() => handleStars(4)}
                />
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <br />

                <input
                  type="checkbox"
                  checked={selectedStars === 3}
                  onChange={() => handleStars(3)}
                />
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <br />

                <input
                  type="checkbox"
                  checked={selectedStars === 2}
                  onChange={() => handleStars(2)}
                />
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <br />

                <input
                  type="checkbox"
                  checked={selectedStars === 1}
                  onChange={() => handleStars(1)}
                />
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#ffdf00" }}
                ></i>
                <br />
              </div>
    </div>
  );
};

export default MobileFilter;
