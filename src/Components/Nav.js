import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

import { FiShoppingCart } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
const Nav = ({popup}) => {
  return <div className='nav'>
         <div className='brand' >
             <h2> <Link to='/' style={{ textDecoration: 'none', color:'white' }}>FLIPCART</Link> </h2>
         </div>
         <div className='search'> 
             <form action="">
                    <input type="text" placeholder='Search for products...' />
                    <button type='submit'><FiSearch/></button>
              </form>
         </div>
         <div className='options'>
             <div className='login' > <span onClick={popup}>Login</span></div>
             <div className='more'>More &nbsp;<FiChevronDown/></div>
             <div> <Link to="/cart" style={{ textDecoration: 'none',color:'white' }}><FiShoppingCart/> &nbsp; Cart</Link></div>
         </div>
  </div>;
};

export default Nav;
