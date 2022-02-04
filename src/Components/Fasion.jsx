import React from 'react';
import { fasionData } from './productData';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import './products.css'


const Fasion = (props) => {

  const leftScroll = ()=>{
    var slide = document.getElementById("cont");
    slide.scrollLeft = slide.scrollLeft - 500;
    // console.log(slide)
  }
  const rightScroll = ()=>{
    const slide =document.getElementById('cont');
    slide.scrollLeft = slide.scrollLeft + 500;
    
  }

  return <div className='product'>
       <div className='top'>
         <h2>Fashion's Bestseller</h2>
         <button>
            VIEW ALL
         </button>
         <div className='scroll scrollLeft' onClick={leftScroll}><AiFillCaretLeft size={35}/></div>
         <div className='scroll scrollRight' onClick={rightScroll}><AiFillCaretRight size={35}/></div>
       </div>

       
       <div className='containt' id='cont'>
          {fasionData.map((product, index)=>{
              return(
                <div className='product-container'>
                    <img src={product.pic} alt="product" />
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                    <h4>{product.category}</h4>
                </div>
                
              );
            })}
       </div>
        
        
  </div>;
};

export default Fasion;