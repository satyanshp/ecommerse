import React from 'react';
// import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

import './popup.css'
const Popup = ({toggle}) => {

// const [close , setClose]=useState(false)
// const toggle=()=>{
//     setClose(!close)
// }

  return <div className='popup'>
          <div className='popup-container'>
              <div className='popup-text'>
                  <div className='p-text'>
                     <h2>Login</h2>
                     <p>
                        Get access to your Orders, Wishlist and Recommendations
                     </p>
                  </div>
                  <div className='p-img'>
                      <img src="./img/login.png" alt="" />
                  </div>
              </div>
              <div className='popup-form-container'>
                   <div className='close' id='close-btn' onClick={toggle}><AiOutlineClose size={20} color='green'/></div> 
                  <div className='popup-form'>
                     <form action="">
                       <input className='p-inp' type="text" placeholder='Enter Email/Mobile Number' />
                       <input className='p-inp' type="text" placeholder='Enter Password' />
                       <p>By continuing, you agree to Fuckart's <i>Terms of Use</i> and <i>Privacy Policy</i>.</p>
                       <input className='p-btn' type="submit" value='LOGIN' />
                       <h2>OR</h2>
                       <button>Request OTP</button>
                     </form>
                     <p>Forget Password ?</p>
                  </div>
                  <div className='new-user'>
                      <p>New to Fuckart? Create an account</p>
                  </div>
              </div>
          </div>
          <div className='overlay'onClick={toggle}></div>
  </div>;
};

export default Popup;
