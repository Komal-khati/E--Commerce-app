import React from "react";
import dummyCartImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import './CartItem.scss'

function CartItem() {
    return (
           <div className="CartItem">
               <div className="item-img">
                   <img src={dummyCartImg} alt="" />
               </div>
               <div className="item-info-wrapper">
                     <div className="item-info">
                         <p className="title">Product Title here</p>
                         <p className="price">₹450 </p>
                         <div className="quantity-selector">
                             <span className="btn decrement">-</span>
                             <span className="quantity">4</span>
                             <span className="btn increment">+</span>
                         </div>
                         <p className="total-price">Subtotal: ₹1800 </p>
                     </div>
                     <div className="item-remove">
                         <AiOutlineClose />
                     </div>
                </div>
          </div>
      );
}

export default CartItem;