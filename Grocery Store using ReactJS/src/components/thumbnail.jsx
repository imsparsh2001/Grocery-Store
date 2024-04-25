import React, { useEffect, useState } from 'react'
import "../styles/index.css"
import "../styles/mobile.css"
import { Navigation } from './navigation';
import { useNavigate, useParams} from 'react-router-dom';
import Record from "../grocery.json"
import { useRef } from 'react';
import Header from './header';
import Footer from './footer';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../state/cart/cartSlice';



// import "./Images"


const Thumbnail = () => {

  const { id, category } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();
  const selectedItemRef = useRef(null);
  const dispatch = useDispatch();

  let a = 1;
  function plus() {
  var num = document.querySelector(".num");
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
}
function minus() {
  var num = document.querySelector(".num");
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
}

const CartClick = (id) => {

  console.log(info);
  dispatch(addItem(id));
  navigate('/cart');
  console.log(info);
};

 useEffect(() => {
  if (Record) {
    const selectedItem = Record.reduce((foundItem, record) => {
      if (foundItem) {
        return foundItem;
      }

      const item = record.items.find(item => {
        return item.id === Number(id) && item.category.toLowerCase() === category.toLowerCase();
      });

      return item || foundItem;
    }, null);

    if (selectedItem) {
      console.log("Selected Item found:", selectedItem);
      selectedItemRef.current = selectedItem;
      setInfo(selectedItem);
    } else {
      console.log(`Item not found for id=${id} and category=${category}`);
    }
  } else {
    console.log("Record is not available");
  }
}, [Record, id, category]);

 let displayImage = (url) =>{
    var load = document.getElementById("image-space")
    load.src = url;
    load.classList.add('image-style');
 }

  return(
      <div className="new-container">
        <Header/>
        <div className="row">
            <section className="column-1">
            <div className="path">
             <span onClick={()=>(navigate("/"))}>Home /</span>
            <span> Bakery Biscuits / </span>
            <span> NapolitankeLjesnjak </span>
            </div>

            <div className="display">
            {info && info.img && (
    <img
      id="image-space"
      src={info.img.slice(0, 1)}
      alt="img"
      style={{ height: "400px", width: "500px" }}
    />
  )}
</div>
       
<div className="thumbnails-container">
{info&&
    info.img &&
    info.img.slice(0, 4).map((imgUrl, index) => (
      <img
        key={index}
        className="thumbnail-photo"
        src={imgUrl}
        style={{ height: "70px", width: "85px" }}
        alt={`Product-img-${index}`}
        onClick={() => displayImage(imgUrl)}
      />
    ))}
          </div>
      </section>

      <section className="column-2">
        <hgroup>
          <h6>Bakery Biscuits</h6>
          <h2> {info && info.name}</h2>
        </hgroup>
        <div className="stars">
          <i className="fa-solid fa-star" style={{color: "#FFDF00"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFDF00"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFDF00"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFDF00"}}></i>
          <i className="fa-solid fa-star-half-stroke" style={{color: "#FFDF00"}}></i>
          <span className="review">(30 reviews)</span>
        </div>
        <div className="clear"></div>
        <h4 className="headingFour"> ${ info && info.price}</h4>
        <br />
        <div className="thumb-hr">
          <hr />
        </div>
        <br />
        { info && info.attributes.size.slice(0,3).map((value,index)=>{
        return (
            <span key = {index} className="size">{value}</span> 
          )
        })}
        <div className="btn">
          <button onClick={()=>minus()}>-</button><button className="num">01</button><button onClick={()=>plus()}>+</button>
        </div>
        <div className="icons">
          <button id="button" onClick={() => CartClick(info.id)}>Add to cart <i className="fa-solid fa-bag-shopping"></i></button>&nbsp;
          <button className="icon"><i className="fa-solid fa-arrow-right-arrow-left"></i></button>&nbsp;
          <button className="icon"><i className="fa-regular fa-heart"></i></button>
        </div>
        <br />
        <div className="thumb-hr">
        <hr />
        </div>
        <br />
        
        <div className="information">
          <table className="table1">
            <thead></thead>
            <tbody>
              <tr>
                <td className="data">Product: </td>
                <td className="data">{ info && info.productCode} </td>
              </tr>
              <tr>
                <td className="data">Availability: </td>
                <td className="data">{ info && info.availability} </td>
              </tr>
              <tr>
                <td className="data">Type: </td>
                <td className="data">{ info && info.type} </td>
              </tr>
              <tr>
                <td className="data">Shipping: </td>
                <td className="data">{ info && info.shipping}.<span>(Free pickup today)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
   <Navigation/>
   <Footer/>
   </div>
  

    )}
   
      
    
    


export default Thumbnail;

