import React from 'react';
import images from '../../constants/images';
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef main__section-padding'> 
     <div className='app__chef-image'>
        <img src={images.chef} alt="chef" />
     </div>

     <div className='app__chef-content'>
        < SubHeading title="Chef’s Word"/>
        <h1 className='headtext__cormorant'>What we believe in</h1>
        <div className='app__chef-content_quote'>
           <img src={images.quote} alt="quote" />
           <p className='app__chef-content_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="app__chef-content_text">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla
           scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
          Congue iaculis integer curabitur semper sit nunc.</p>

          <div className='app__chef-content_author'>
            <h4>Kevin Luo</h4>
            <p>Chef & Founder</p>
          </div>
          <img src={images.sign} alt="sign" className='app__chef-sign_image'/>
     </div>
  </div>
);

export default Chef;
