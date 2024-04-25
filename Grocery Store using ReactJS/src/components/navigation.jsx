import React, { useState } from 'react';
import { InfoComp } from './information';
import { DetailComp } from './details';
import { ReviewComp } from './review';
import { SellerComp } from './sellerinfo';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [activeComponent, setActiveComponent] = useState('info'); 

  const handleTabClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div id="infopage">
        <div  className="navbar">
      <ul>
        <li>
          <NavLink className={`nav-link ${activeComponent === 'info' ? 'active' : ''}`} onClick={() => handleTabClick('info')}>
            Product Details
          </NavLink>
        </li>
        <li>
          <NavLink className={`nav-link ${activeComponent === 'details' ? 'active' : ''}`} onClick={() => handleTabClick('details')}>
            Information
          </NavLink>
        </li>
        <li>
          <NavLink className={`nav-link ${activeComponent === 'review' ? 'active' : ''}`} onClick={() => handleTabClick('review')}>
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink className={`nav-link ${activeComponent === 'sellerinfo' ? 'active' : ''}`} onClick={() => handleTabClick('sellerinfo')}>
            Seller Info
          </NavLink>
        </li>
      </ul>
      <div className='active-line'></div>
      <hr></hr>
      </div>


      {activeComponent === 'info' && <InfoComp />}
      {activeComponent === 'details' && <DetailComp />}
      {activeComponent === 'review' && <ReviewComp />}
      {activeComponent === 'sellerinfo' && <SellerComp />}
    </div>
  );
}

export {Navigation};
