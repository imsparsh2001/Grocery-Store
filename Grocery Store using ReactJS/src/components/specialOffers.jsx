import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SpecialOffers = () => {
    let navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./assets/project.json");
        // console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect will run once after the initial render

  if (!data) {
    // Data is still loading
    return <div>Loading...</div>;
  }

   
  return (
    <div className="container3">
      <main id="photosJson">
        
        <section className="special-offers">
          <div>
            <h3>Special Offers of the View All Week!</h3>
            <p>
              Get exclusive ongoing offers, deals, and discount cides of
              shopping
            </p>
          </div>

          
          <div className="view-link">
            <a >View All </a>
          </div>
        </section>
        <div className= "specialoffers"> 
        {data.items.map(article => (
        <div className="article" key={article.id}>
          {article.discount && article.discount !== "" ? (
            <pre><span>{article.discount}%</span></pre>
          ) : (
            <pre>‎</pre>
          )}
          
            <div className="item-img">
              <img src={article.img} alt="Product-image" style={{ width: '150px' }} />
            </div>
        
          <p className="offer-price">${article.price}</p>
          <p>{article.name}</p>
          <div className="review-stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            4.3(68)
          </div>
          <p className="availibility">IN STOCK</p>
          <progress
            className="custom-progress"
            id="#"
            max="100"
            value={100 - article.availableStock}
          ></progress>
          <p>the available products: {article.availableStock}</p>
        </div>
        
      ))}
      </div>
      
      </main>
    </div>
    
  )
}

export default SpecialOffers
