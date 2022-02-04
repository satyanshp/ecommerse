import React from 'react';
import './carosel.css'
import { useState } from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";



const CaroselData =[
    {
        image:'./img/1.png'
    },
    {
        image:'./img/2.png'
    },
    {
        image:'./img/3.png'
    },
    {
        image:'./img/4.png'
    },
    {
        image:'./img/5.png'
    }
];


 

const Carosel = () => {
    const [item , setItem] = useState(0)
    const length = CaroselData.length
    const slideRight=()=>{
       setItem(item === length - 1 ? 0 : item +1)
       
    }

    const slideLeft=()=>{
          setItem(item === 0 ? length - 1 : item - 1)
    }
  return <div className='carosel'>
      <div className='left-arrow arrow' onClick={slideLeft}><AiFillCaretLeft size={35}/></div>
      {CaroselData.map((slide,index) =>{
          return(
             <div
             className={index === item ?'container active': 'container'}
             key={index}
             >
                 {index === item &&(
                     <img className='img' src={slide.image} alt="name" />
                 )}
             </div>
          )
      })}
      
      <div className='right-arrow arrow' onClick={slideRight}><AiFillCaretRight size={35}/></div>
  </div>;
};

export default Carosel;
