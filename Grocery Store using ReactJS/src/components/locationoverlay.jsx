
import React, { useState , useEffect } from 'react';
import  "../styles/checkout.css"

function Locationoverlay({ isOpen, handleClose, onSaveAddress,addresses }) {
  const [newAddressData, setNewAddressData] = useState({
    type: 'home',
    firstName: '',
    lastName: '',
    Email:'',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'Karnataka', 
    zipCode: '',
    isDefault: false,
  });
  const [saveClicked, setSaveClicked] = useState(false);
  useEffect(() => {
    setNewAddressData((prevData) => ({
      ...prevData,
      isDefault: !addresses.some((address) => address.type === newAddressData.type && address.isDefault),
    }));
  }, [addresses, newAddressData.type]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddressData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSave = () => {
    setSaveClicked(true);
    const filteredAddresses = addresses.filter(
      (address) => address.type !== newAddressData.type
    );
    // checking previous default and removing,find and update the previous default address
    if (newAddressData.isDefault) {
      const previousDefault = addresses.find((address) => address.isDefault);
  
      if (previousDefault) {
        // Set the previous default address as not default
        previousDefault.isDefault = false;
        const updatedAddresses = [...filteredAddresses]
        // Add the new address
        updatedAddresses.push({ ...newAddressData});
        onSaveAddress(updatedAddresses);
        handleClose();
        return;
      }
    } 
     // If not setting as default, update the state directly
    const updatedAddresses = [...filteredAddresses, { ...newAddressData}];
    onSaveAddress(updatedAddresses);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay1">
      <div id="popup-body1">
        <button className="close-button" id="cross1" onClick={handleClose}>
          &times;
        </button>
        <p className="headline" style={{ fontSize: '18px' }}>
          <b>New Shipping Address</b>
        </p>
        <p className="description" style={{ fontSize: '14px' }}>
          Add a new shipping address for your order delivery
        </p>

        <form className="addrform" method='get'>
          <div className='overlayradio' style={{display:'flex',justifyContent:'space-evenly'}}>
            <label htmlFor='home' style={{display:'flex'}}>
              <input  style={{height:'auto'}}
                id='home'
                type="radio"
                name="type"
                value="home"
                checked={newAddressData.type === 'home'}
                onChange={handleChange}
              />
              Home
            </label>
            <label htmlFor='office' style={{display:'flex'}}>
              <input style={{height:'auto'}}
              id='office'
                type="radio"
                name="type"
                value="office"
                checked={newAddressData.type === 'office'}
                onChange={handleChange}
              />
              Office
            </label>
            <label htmlFor='other' style={{display:'flex'}}>
              <input  style={{height:'auto'}}
              id='other'
                type="radio"
                name="type"
                value="other"
                checked={newAddressData.type === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          
          <input required type="text" name="firstName" id="firstname" placeholder="First Name" onChange={handleChange} />{saveClicked && !newAddressData.firstName.trim() && (<h6 style={{color:'red'}}>First Name is required</h6>)}
          <input required type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input required type="email" name="Email" placeholder="Email" onChange={handleChange} />{saveClicked && !newAddressData.Email.trim() && (<h6 style={{color:'red'}}>Email is required</h6>)}
          <input required type="text" name="addressLine1" placeholder="Address Line 1" onChange={handleChange} />{saveClicked && !newAddressData.addressLine1.trim() && (<h6 style={{color:'red'}}>address Line1 is required</h6>)}
          <input required type="text" name="addressLine2" placeholder="Address Line 2" onChange={handleChange} />{saveClicked && !newAddressData.addressLine2.trim() && (<h6 style={{color:'red'}}>address Line2 is required</h6>)}
          <input required type="text" name="city" placeholder="City" onChange={handleChange} />{saveClicked && !newAddressData.city.trim() && (<h6 style={{color:'red'}}>City is required</h6>)}
          <label htmlFor='state'></label>
          <select id="state" name="state" onChange={handleChange} value={newAddressData.state}>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="kerala">Kerala</option>
            <option value="Telangana">Telangana</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          <input type="text" name="zipCode" placeholder="Zip code" onChange={handleChange} />{saveClicked && !newAddressData.zipCode.trim() && (<h6 style={{color:'red'}}>zipCode is required</h6>)}
         
          <div>
            <input
              type="checkbox"
              name="isDefault"
              id='isDefault'
              onChange={handleChange}
              checked={newAddressData.isDefault}
            />
            <label htmlFor='isDefault'>Set as default</label>
            
            
          </div>
          <button type='submit' className="saveaddress" onClick={handleSave}>
            Save address
          </button>
          <button className="cancel" onClick={handleClose}>
            Cancel
          </button>
          </form>
        </div>
      </div>
  );
}

export { Locationoverlay };
