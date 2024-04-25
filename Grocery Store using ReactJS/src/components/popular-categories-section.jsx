import React from 'react';
import '../styles/index.css';
import '../styles/mobile.css';
import groceryData from '../grocery.json'; 
import { useNavigate } from 'react-router-dom';

const PopularCategories = () => {
  const navigate = useNavigate();

  const handleThumbnailClick = () => {
    navigate('/productList');
  };

  return (
    <div className="container2">
      <section className="popular-categories">
        <h2 className="section-title">Shop popular categories</h2>
        <div className="popular-categories-list">
          {groceryData.map((category, index) => (
            <div className="category-item" key={index} onClick={handleThumbnailClick}>
              <div className="img-wrapper">
                <img src={category.items[0].img[0]} alt={category.items[0].img} /> 
              </div>
              <p>{category.items[0].category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
