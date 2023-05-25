import React, { useState } from 'react';
import images from '../../constants/images';
import './Navbar.css';

import {RiMenuLine} from 'react-icons/ri';
import {MdOutlineClose} from 'react-icons/md';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
  <div className='app__navbar section__padding'>
     <div className='app__navbar-image'>
       <img src={images.gericht} alt="gericht" />
     </div>

     <div className='app__navbar-links'>
       <ul>
          <li><a href="home" className='p__opensans'>Home</a></li>
          <li><a href="#pages" className='p__opensans'>Pages</a></li>
          <li><a href="#contact" className='p__opensans'>Contact Us</a></li>
          <li><a href="#blog" className='p__opensans'>Blog</a></li>
          <li><a href="#landing" className='p__opensans'>Landing</a></li>
       </ul>
     </div>

     <div className='app__navbar-register'>
       <div className='app__navbar-login'>
         <p >Login / Register</p>
       </div>
       <div className='app__navbar-bar'/>
        <div className='app__navbar-booktable'>
        <p >Book Table</p>
        </div>     
     </div>

     <div className='app__navbar-smallscreen'>
      < RiMenuLine size="27" onClick={() => setToggleMenu(true)} className='app__navbar-smallscreen_menu'/>

      {toggleMenu &&
      
        <div className='app__navbar-smallscreen_overlay slide-bottom '>
          <MdOutlineClose size="27" onClick={() => setToggleMenu(false)} className='app__navbar-close_overlay'/>
          <ul className='app__navbar-smallscreen_links'>
            <li><a href="#home" className='p__opensans'>Home</a></li>
            <li><a href="#pages" className='p__opensans'>Pages</a></li>
            <li><a href="#contact" className='p__opensans'>Contact Us</a></li>
            <li><a href="#blog" className='p__opensans'>Blog</a></li>
            <li><a href="#landing" className='p__opensans'>Landing</a></li>
          </ul>
        </div>
     }     
       </div>
       
     </div>
  )
  };

export default Navbar;
