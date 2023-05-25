import React from 'react';
import { SubHeading } from '../../components/index';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header main__section-padding' id='home'>
     <div className='app__header-content'>
       <SubHeading title="Chase The New Flavor" className="app__subheading"/>
       <h1 className='headtext__cormorant app__header-h1'>The Key To Fine dining</h1>
       <p className='app__header-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis repellat, aliquam culpa quis dolorum sequi a mollitia illo odio!</p>
       <button className='custom__button '>Explore Menu</button>
     </div>
     <div className='app__header-image'>
       <img src={images.welcome} alt="welcome" />
     </div>
  </div>
);

export default Header;
