import React, { useEffect, useState } from "react";
import Header from "./header";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";
import { BsColumnsGap } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { PiShoppingBagOpen } from "react-icons/pi";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Record from "../grocery.json";
import Slider from "react-slider";
import Footer from "./footer";
import { Navigate, useNavigate } from "react-router-dom";
import MobileFilter from "./mobileFilter";
import { Link } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../state/cart/cartSlice";
import RatingComponent from "./ratingComp";



const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Best Sellers");
  const [sortOrder, setSortOrder] = useState(null);
  const [values, setValues] = useState([50, 800]);
  const [selectedStars, setSelectedStars] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = filteredItems.length;

  const navigate = useNavigate();

  const CartClick = (id) => {
    dispatch(addItem(id));
    navigate("/cart");
    console.log(items);
  };

  const redirectToThumbnail = (itemId, category) => {
    // Set the selected item in the state
    setSelectedItem({ id: itemId, category });
  };

    
  const handleCategoryClick = (categoryName) => {
  
    setSelectedCategory(categoryName.toLowerCase());
  };

 

  const getItemsByCategory = (categoryName) => {
    const category = Record.find((cat) =>
    // Check if at least one item in the category has the specified categoryName
      cat.items.some(
        (item) => item.category.toLowerCase() === categoryName.toLowerCase()
      )
    );

    if (category) {
      const filteredItems = category.items.filter(
        (item) =>
          item.price >= values[0] &&
          item.price <= values[1] &&
          (item.rating >= selectedStars)
      );
      const sortedItems = filteredItems.slice().sort((a, b) => {
        if (sortOrder === "lowToHigh") {
          return a.price - b.price;
        } else if (sortOrder === "highToLow") {
          return b.price - a.price;
        }
        return 0;
      });

      return sortedItems.map((item) => (
        <div className="productSection" key={item.id}>
          <Link to={`/thumbnail/${item.id}/${item.category.toLowerCase()}`}>
            <img
              className="productlist-product"
              src={item.img[0]}
              alt=""
              width={150}
              height={150}
              onClick={() => redirectToThumbnail(item.id)}
            />
          </Link>
          <div className="product-description">
            <p>{item.category}</p>
            <p style={{ fontSize: "17px" }}>
              <b>{item.name}</b>
            </p>
            <div className="rate">
              <RatingComponent rating={item.rating} />
              <p style={{ marginLeft: "5px" }}>{item.rating}</p>
            </div>
            <p style={{ marginBottom: "3%" }}>
              <b>${item.price}</b>
            </p>

            <div className="eye">
              <IoEyeOutline />
            </div>
            <div className="eye">
              <CiHeart />
            </div>
            <div className="eye">
              <LiaExchangeAltSolid />
            </div>
            <button className="Bag-btn" onClick={() => CartClick(item.id)}>
              <PiShoppingBagOpen
                style={{ alignSelf: "center", marginRight: "2px" }}
              />
              Add to Cart
            </button>
            <br />
          </div>
        </div>
      ));
    } else {
      return <p>Category '{categoryName}' not found.</p>;
    }
  };

  const formatPrice = (value) => {
    return `${value}`;
  };

  const handleChange = (newValues) => {
    //Ensure that the minimum price is always less than or equal to the maximum price
    const sortedValues = newValues.sort((a, b) => a - b);
    console.log(sortedValues);
    setValues(sortedValues);
  };



  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  const handleStars = (value) => {
    setSelectedStars(selectedStars === value ? null : value);
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  const openMobileFilter = () => {
    setIsMobileFilterOpen(true);
  };

  const closeMobileFilter = () => {
    setIsMobileFilterOpen(false);
  };


  useEffect(() => {
    //filtered items will reflect the changes
    const filteredItems = getItemsByCategory(selectedCategory);
    setFilteredItems(filteredItems);
  }, [selectedCategory, values, selectedStars, sortOrder]);

  return (
    <div>
      <Header />
      <div className="categories-main" style={{ marginBottom: "15px" }}>
        <p>
          <span onClick={handleHomeClick}>Home </span> / Shop / Snacks &
          Munchies
        </p>
        <div className="product-details">
          <div className="left-categories Desktop">
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
              Non Veg Pizzas
                <span>
                  <MdArrowForwardIos
                    style={{ fontSize: "12px", marginLeft: "33%" }}
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
              <h3 style={{ fontSize: "18px", marginTop: "5px" }}>
                Price Range
              </h3>

              <Slider
                className="slider"
                value={values}
                onChange={handleChange}
                min={50}
                max={800}
              />
              <div>
                <p>
                  Price Range: {formatPrice(values[0])} to{" "}
                  {formatPrice(values[1])}
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: "18px" }}>Rating</h2>
            <input
              type="checkbox"
              checked={selectedStars === 5}
              onChange={() => handleStars(5)}
            />
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <br />
            <input
              type="checkbox"
              checked={selectedStars === 4}
              onChange={() => handleStars(4)}
            />
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <br />

            <input
              type="checkbox"
              checked={selectedStars === 3}
              onChange={() => handleStars(3)}
            />
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <br />

            <input
              type="checkbox"
              checked={selectedStars === 2}
              onChange={() => handleStars(2)}
            />
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <br />

            <input
              type="checkbox"
              checked={selectedStars === 1}
              onChange={() => handleStars(1)}
            />
            <i className="fa-solid fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#ffdf00" }}></i>
            <br />
          </div>
          {isMobileFilterOpen && (
            <MobileFilter
              values={values}
              handleChange={handleChange}
              selectedStars={selectedStars}
              handleStars={handleStars}
              selectedCategory={selectedCategory}
              handleCategoryClick={handleCategoryClick}
              closeMobileFilter={() => setIsMobileFilterOpen(false)}
            />
          )}

          <div className="right-categories">
            <div className="Product-header">
              <h3>Snacks & Munchies</h3>
              <br />
            </div>
            <div className="products-name">
              <p style={{}}> {totalItems} items found</p>
              <div className="search-options">
                <div className="iconss" style={{ marginTop: "10px" }}>
                  <TfiMenuAlt
                    style={{
                      color: "green",
                      marginRight: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <BsColumnsGap
                    style={{ marginRight: "10px", fontSize: "18px" }}
                  />
                  <CgMenuGridR
                    style={{ marginRight: "10px", fontSize: "20px" }}
                  />
                  <button
                    className="filter-in-mobile"
                    onClick={openMobileFilter}
                  >
                    Filter
                  </button>
                  <br />
                </div>
                <div className="filter-selection">
                  <a
                    className="selection-type"
                    style={{
                      marginLeft: "10px",
                      padding: "2px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Show:
                    <select
                      className="select-show"
                      name="showOptions"
                      id="showOptions"
                    >
                      <option value="60">60</option>
                      <option value="70">70</option>
                      <option value="80">80</option>
                    </select>
                  </a>

                  <a
                    className="price-selection"
                    style={{
                      marginLeft: "10px",
                      padding: "2px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Sortby:
                    <select
                      className="select"
                      onChange={(e) => handleSortChange(e.target.value)}
                      name="sortByOptions"
                      id="sortByOptions"
                    >
                      <option value="featured">Featured</option>
                      <option value="lowToHigh">Low To High</option>
                      <option value="highToLow">High to Low</option>
                    </select>
                  </a>
                </div>
              </div>
            </div>

            <article className="product">
              {selectedCategory && (
                <div>{getItemsByCategory(selectedCategory)}</div>
              )}
            </article>
            <div className="PageNum">
              <p
                style={{
                  border: "1px solid grey",
                  width: "3%",
                  textAlign: "center",
                }}
              >
                <MdChevronLeft />
              </p>
              <p style={{ backgroundColor: "green" }}>1</p>
              <p>2</p>
              <p
                style={{
                  border: "1px solid grey",
                  width: "3%",
                  textAlign: "center",
                }}
              >
                ...
              </p>
              <p>12</p>
              <p
                style={{
                  border: "1px solid grey",
                  width: "3%",
                  textAlign: "center",
                }}
              >
                <MdChevronRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
