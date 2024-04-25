import React, { useState } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Instructions } from './instructions';
import { Locationoverlay } from './locationoverlay';
import  "../styles/checkout.css"

function Delivary() {
  const [isVisible, setIsVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedType, setSelectedType] = useState('home'); 

  const handleNext = () => {
    setIsVisible(true);
  };

  const handlePrev = () => {
    setIsVisible(false);
  };

  const handleSaveAddress = (newAddresses) => {
    setAddresses(newAddresses); 
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const renderAddressSection = (type, sectionAddresses) => {
    return (
      <div className={type} key={type} style={{ display: sectionAddresses.length > 0 ? 'block' : 'none' }}>
        <input
          type="radio"
          name="addressType"
          value={type}
          id={type}
          checked={selectedType === type}
          onChange={() => handleTypeChange(type)}
        />
        <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)} Addresses</label>
        {sectionAddresses.map((address) => (
  <div key={`${address.firstName}-${address.lastName}`}>{renderAddressDetails(address)}</div>
))}
    
      </div>
    );
  };
  return (
    <div className='delsec'>
      <div className="location">
        <div>
          <IoLocationOutline style={{ height:'60%'}} />
          <h3>Add Delivery Address</h3>
        </div>
        <button onClick={handleNext}>Add a new address</button>
      </div>
      <div className="address">
      {renderAddressSection('home', addresses.filter((address) => address.type === 'home'))}
        {renderAddressSection('office', addresses.filter((address) => address.type === 'office'))}
        {renderAddressSection('other', addresses.filter((address) => address.type === 'other'))}
      </div>
      <hr />
      <Instructions  selectedType={selectedType} addresses={addresses}  handleNext={handleNext} handlePrev={handlePrev}/>
      <Locationoverlay isOpen={isVisible} handleClose={handlePrev} onSaveAddress={handleSaveAddress}   addresses={addresses}
selectedType={selectedType}/>
    </div>
  );
}

function renderAddressDetails(address) {
  return (
    <>
      <h3>{address.firstName} {address.lastName}</h3>
      <p>{address.addressLine1}</p>
      <p>{address.addressLine2}</p>
      <p>{address.city}, {address.state} - {address.zipCode}</p>
      <p>{address.Email}</p>
      {address.isDefault && <p style={{ color: 'red' }}>Default address</p>}
    </>
  );
}

export { Delivary };
