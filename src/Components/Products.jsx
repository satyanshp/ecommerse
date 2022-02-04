import React from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import './products.css'


const Products = ({electronicsData,show,get}) => {
  
  const leftScroll = ()=>{
    var slider = document.getElementById("containt");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const rightScroll = ()=>{
    const slider =document.getElementById('containt');
    slider.scrollLeft = slider.scrollLeft + 500;
    
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  return <div className='product'>
       <div className='top'>
         <h2>Electronics' Bestseller</h2>
         <button>
            VIEW ALL
         </button>
         <div className='scroll scrollLeft' onClick={leftScroll}><AiFillCaretLeft size={35}/></div>
         <div className='scroll scrollRight' onClick={rightScroll}><AiFillCaretRight size={35}/></div>
       </div>
       <div className='containt'id='containt' onClick={show}>
          {electronicsData.map((product, index)=>{
              return( 
                     <div onClick={()=>get(product.id)} className='product-container'>
                        <img src={product.pic} alt="product" />
                        <h2>{product.name}</h2>
                        <h3>₹{numberWithCommas(product.price)}</h3>
                        <h4>{product.category}</h4>
                     </div>
             
                
                
              );
            })}
       </div>
        
        
  </div>;
};

export default Products;
