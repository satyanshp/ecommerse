import React from 'react';
import { AiOutlineEnvironment } from "react-icons/ai";
import Button from './Button';

import './cart.css'

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const discount = 524

// let summ = 0;

// for (let price of cartData){

//     summ = summ + price
// }

// console.log(summ)

const Cart = ({onDelete ,items}) => {
  const sum = items.reduce((a,v) => a + v.price , 0 );
  console.log(numberWithCommas(sum));

  return <div className='cart'>
      <div id='sidebar'>
        <div className='bill'>
            <h2>PRICE DETAILS</h2>
        </div>
        <div className='bill-list'>
          <div className='pop'>
              <p> Price ({items.length} items)</p>
              <span>{numberWithCommas(sum)}</span>
          </div>
          <div className='dop'>
            <p>Discount</p>
            <span>- {discount}</span>
          </div>
          <div className='dc'>
            <p>Delivery Charges</p>
            <span>Free</span>
          </div>
        </div>
        <div className='total-amount'>
          <h2>Total Amount</h2>
          <h2>₹{numberWithCommas(sum-discount)}</h2>
        </div>
        <div className='saving' style={{color:'green'}}>You will save ₹{discount} on this order</div>
      </div>
      <div id='main'>
         <div className='cart-header div'>
           <div>
             <h2>My Cart ({items.length})</h2>
           </div>
           <div className='deliver-to'>
             <p>
               <AiOutlineEnvironment size={20}/>&nbsp;Deliver to
             </p>
             <select name="address" id="">
               <option value="">Default Address</option>
               <option value="">Address 1</option>
               <option value="">Address 2</option>
             </select>
           </div>
         </div>
         <div className='cartItems div'>
           {items.map((items,index)=>{
             return(
              <div className='itemss'>
                <div>
                   <img src={items.pic} alt="" />
                </div>
                <div className='info-container'>
                    <div className='item-info'>
                      <h3>{items.name}</h3>
                      <p>{items.category}</p>
                      <span>₹{numberWithCommas(items.price)}</span> 
                    </div>
                    <div className='info-btn'>
                      <div onClick = {()=>onDelete(items.id)}><Button bradius='3px' text='SAVE TO WISHLIST' color='white'bcolor='green' fs='12px' fw='600' width='150px'/></div>
                      <div onClick = {()=>onDelete(items.id)}><Button bradius='3px' text='REMOVE' color='white' bcolor='rgb(197, 0, 0)' fs='12px' fw='600' width='80px'/></div>
                    </div>
                </div>
                
                <div className='delivery-info'>
                  <div className='delivery-details'>
                  <h2>Delivery in 3 days</h2>
                  <span>|</span>
                  <span className='free'>FREE</span>
                  </div>
                  <div className='replace-policy'> 7 Days Replacement Policy </div>
                  
                </div>
            </div>
             );
              
           })}
         </div>
         <div className='confirm div'>
           <button>PLACE ORDER</button>
         </div>
      </div>

  </div>;
};

export default Cart;
