import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";

function Cart({onClose}) {
    return ( 
        <div className='Cart'>
              <div className='overlay' onClick={onClose}></div>
                  <div className="cart-content">
                        <div className="header">
                        <h3>Shopping Cart</h3>
                           <div className="close-btn"onClick={onClose}>
                                  <AiOutlineClose /> Close
                           </div>
                        </div>
                  </div>
        </div>
     );
}

export default Cart;