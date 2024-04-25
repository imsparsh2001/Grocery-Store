import React, { useEffect, useRef } from "react";
 
const Modal = ({ isOpen, handleClose,setModalOpen }) => {
  const modalRef = useRef()
  const modalOverlayRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (
        modalOverlayRef.current?.contains(e.target) &&
        !modalRef.current?.contains(e.target)
      ) {
        setModalOpen(false);
      }
    };
    
  
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [modalRef, setModalOpen]);
  
  
  

  if (!isOpen) return null;
 
    return ( 
    <div className="modal-overlay" ref={modalOverlayRef}>
    <div id="popup-body" ref={modalRef}>
      <button className="close-button" id="cross" onClick={handleClose}>
        &times;
      </button>
      <p className="headline" style={{ fontSize: '18px' }}>
        <b>Choose Your Delivery location</b>
      </p>
      <p className="description" style={{ fontSize: '14px' }}>
        Enter your address and we will specify the offer you area.
      </p>
      <input type="search" placeholder="Search your area." id="areaSearch" />

      <table className="LocationTable">
        <thead>
          <tr>
            <td id="loc">
              <b>Select Location</b>
            </td>
            <td className="td-btn">
              <button className="clearBtn">Clear All</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Albama</td>
            <td>Min:$20</td>
          </tr>
          <tr>
            <td>Alaska</td>
            <td>Min:$30</td>
          </tr>
          <tr>
            <td>Arizona</td>
            <td>Min:$50</td>
          </tr>
          <tr>
            <td>California</td>
            <td>Min:$29</td>
          </tr>
          <tr>
            <td>Colorado</td>
            <td>Min:$80</td>
          </tr>
          <tr>
            <td>Florida</td>
            <td>Min:$90</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
};
 
export default Modal;