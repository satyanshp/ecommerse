import React from 'react';
import './footer.css'
import { FiShoppingCart } from "react-icons/fi";


const Footer = () => {
  return <footer className='footer'>
         <div className='footer-links'>
             {/* <div className='ftr-links'> */}
                <div className='about'>
                    <h2>ABOUT</h2>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Folkart Stories</li>
                    <li>Press</li>
                    <li>Flipkart Wholesale</li>
                    <li>Corporate Information</li>
                </div>
                <div className='help'>
                    <h2>HELP</h2>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Return</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </div>
                <div className='policy'>
                    <h2>POLICY</h2>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Compliance</li>
                </div>
                <div className='social'>
                    <h2>SOCIAL</h2>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </div>
             {/* </div> */}
             {/* <div className='contact'> */}
                <div className='mail'>
                    <div>
                        <h2>Mail Us:</h2>
                        <p>
                            Flipkart Internet Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India
                        </p>
                    </div>
                       
                </div> 
                <div className='address'>
                        <h2>Registered Office Address:</h2>
                        <p>
                        Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,
                        Karnataka, India <br />
                        CIN : U51109KA2012PTC066107 <br />
                        Telephone: 1800 202 9898
                        </p>
                        
                </div>
             {/* </div> */}
     
         </div>
         <div className='copyrights'>
             <div className='logo'><FiShoppingCart/> &nbsp; FLIPKART</div>
             <div>© 2007-2022 Flipkart.com</div>
         </div>
  </footer>;
};

export default Footer;
