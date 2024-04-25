import React,{useState} from 'react'
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { Payment } from './payment';
import  "../styles/checkout.css";
import { useNavigate} from 'react-router-dom';


function Instructions({ selectedType, addresses}) {
  const filteredAddresses = addresses.filter((address) => address.type === selectedType);


  const firstAddress = filteredAddresses.length > 0 ? filteredAddresses[0] : {};

    const [isVisible, setIsVisible] = useState(false);

    const handleNext = () => {
      setIsVisible(true);
    };
    const handlePrev = () => {
      setIsVisible(false);
    };
    const navigate = useNavigate();

  
  
    return (
      <div>
        {isVisible ? (
          <Payment selectedType={selectedType} address={firstAddress} isOpen={isVisible} handleClose={handlePrev} />
        ) : (
          <div>
            <div className='delins'>
              <PiShoppingBagOpenLight style={{height:"auto"}}/>
              <h3>Delivary instructions</h3>
            </div>
            <p>Delivary instructions</p>
            <textarea placeholder='Write delivary instructions' rows={5}  id="delins" name="deliveryinstructions"  ></textarea>
            <p>Add delivary instructions of how you want your order to be shipped and / or Delivered</p>
            <div className='btncls'>
              <button className='pre'  onClick={()=>navigate('/cart')} >Prev</button>
              <button className='next' onClick={handleNext} >Next</button>
            </div>
            <hr/>
          </div>
        )}
      </div>
    );}
    
    export {Instructions};