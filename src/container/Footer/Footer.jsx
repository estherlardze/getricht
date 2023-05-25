import React from 'react';
import {SubHeading} from '../../components/index';
import images from '../../constants/images';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <div className='app__footer main__section-padding'>
    <div className='app__footer-newsletter'>
      <SubHeading title="Newsletter"/>
      <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
      <p>And never miss latest Updates!</p>

      <div className='app__footer-input'>
        <input type="text" placeholder='Email address'/>
        <button className='custom__button' type='button'>Subscribe</button>
      </div>
</div>


    <div className='app__footer-content'> 
       <div className='app__wrapper_info'>
         <p className='app__footer-cormorant'>Contact Us</p>
         <p className='app__footer-opensans'>9 W 53rd St, New York, NY 10019, USA</p>
         <p className='app__footer-opensans'>+1 212-344-1230</p>
         <p className='app__footer-opensans'>+1 212-555-1230</p>
       </div>

       <div className='app__footer-quote app__wrapper_info'>
         <img src={images.gericht} alt="gericht" className='app__footer-gericht_image'/>
         <p className='app__footer-opensans'>"The best way to find yourself is to lose yourself <br /> in the service of others.”</p>
         <img src={images.spoon} alt="spoon" className='app__footer-spoon'/>
         <div className='app__footer-icons'>
         <FaFacebookF size={25} style={{marginRight:"10px"}}/>
         <FaTwitter size={25} style={{marginRight:"10px"}}/>
         <FaInstagram  size={25}/>
         </div> 
       </div>

       <div className='app__footer-time app__wrapper_info'>
         <p className='app__footer-cormorant'>Working Hours</p>
         <p className='app__footer-opensans'>Monday-Friday: <br /> 08:00 am -12:00 am</p>
         <p className='app__footer-opensans'>Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
       </div>
    </div>

  </div>
);

export default Footer;
