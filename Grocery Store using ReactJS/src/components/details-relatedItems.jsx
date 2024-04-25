
import "../styles/index.css";
import "../styles/mobile.css";


let RelatedItems = () =>{
    return(
        // Related Items section
        <section className="related-items-section">
          <h3>Related Items</h3>
          <section className="specialoffers">
            <article>
              <pre><span> Sale </span></pre>
              <div className="item-img" >
                <img width="150px" src="Images/Haldiram.png" alt="Haldiram.png" />
              </div>
              <p className="item-name">Snacks & Munchies</p>
              <p>Haldiram's Sev Bhujia</p>
              <div className="review-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                4.5(149)
              </div>
              <div className="addcart">
                <p>$18 <del>$24</del></p>
                <button>+ Add</button>
              </div>
            </article>
  
            <article>
              <pre>‎</pre>
              
              <div className="item-img">
                <img width="150px" src="Images/britannia.webp" alt="biscuits.png" />
              </div>
              <p className="item-name">Bakery & Biscuits</p>
              <p>NutriChoice Digestive</p>
              <div className="review-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                4.5(25)
              </div>
              <div className="addcart">
                <p>$24</p>
                <button>+ Add</button>
              </div>
            </article>
  
            <article>
              <pre>‎</pre>
              <div className="item-img">
                <img width="150px" src="Images/5star.png" alt="5star.png" />
              </div>
              <p className="item-name">Bakery & Biscuits</p>
              <p>Cadbury 5 Star Chocolate</p>
              <div className="review-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                5(469)
              </div>
              <div className="addcart">
                <p>$32 <del>$35</del></p>
                <button>+ Add</button>
              </div>
            </article>
  
            <article>
              <pre>‎</pre>
              <div className="item-img">
                <img width="150px" src="Images/Lays.png" alt="Chips.png" />
              </div>
              <p className="item-name">Snacks & Munchies</p>
              <p>Onion Flavour Potato</p>
              <div className="review-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-regular fa-star" style={{color: "#ffdf00"}}></i>
                3.5(456)
              </div>
              <div className="addcart">
                <p>$3 <del>$5</del></p>
                <button>+ Add</button>
              </div>
            </article>
  
            <article>
              <pre>‎</pre>
              <div className="item-img">
                <img width="150px" src="Images/Slurrp.png" alt="Slurrp.png" />
              </div>
              <p className="item-name">Snacks & Munchies</p>
              <p>Slurrp Milet Chocolate</p>
              <div className="review-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                4.5(67)
              </div>
              <div className="addcart">
                <p>$6 <del>$10</del></p>
                <button>+ Add</button>
              </div>
            </article>
          </section>
        </section>
    )
} 

export default RelatedItems;