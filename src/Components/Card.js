import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }




const Card = ({hide,order,add}) => { 
  return <div className='card'>
         <div className='card-cont'>
             <div className='cardImg'>
                 <img src={order.pic} alt="" />
             </div>
             <div className='cartContaint'>
                 <h2>{order.name}</h2>
                 <p>{order.category}</p>
                 <p style={{color:'green'}}>₹{numberWithCommas(order.price)}</p>
                 <h2 className='spe'>Specification:</h2>
                 <p className='lor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus, at odio corrupti voluptate a debitis necessitatibus et veritatis unde quae totam assumenda quibusdam explicabo culpa harum saepe dolor est.</p>
                 <div className='butto'>
                    <button className='addtocart' onClick={()=>add(order.id)}>Add To Cart</button>
                    <Link to="/cart"><button className='showcart' onClick={hide} >SHOW CART ITEMS</button></Link> 
                 </div>
                 
             </div>
         </div>
         <div onClick={hide} className='card-overlay'></div>

  </div>;
};

export default Card;
