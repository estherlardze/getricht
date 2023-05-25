import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus main__section-padding'>

    <div className='app__aboutus-G_image flex__center'>
      <img src={images.G} alt="G"/>
    </div>

    <div className='app__aboutus-content'>

       <div className="app__aboutus-content_aboutus">
         <h1 className='headtext__cormorant'>About Us</h1>
         <img src={images.spoon} alt="spoon" />
         <p className='p__gray'>Lorem ipsum dolor sit amet consectetur adipisicing 
           elit. Modi minima repudiandae qui rem architecto autem
           harum ut dolorem, ad, nulla, nemo iusto. Rerum, maiores
           odio.</p>
         <button className='custom__button'>Know More</button>
       </div>

       <div className='app__aboutus-content_image'>
         <img src={images.knife} alt="knife" />
       </div>

       <div className='app__aboutus-content_ourhistory'>
       <h1 className='headtext__cormorant'>Our History</h1>
         <img src={images.spoon} alt="spoon" />
         <p className='p__gray'>Lorem ipsum dolor sit amet consectetur adipisicing 
           elit. Modi minima repudiandae qui rem architecto autem
           harum ut dolorem, ad, nulla, nemo iusto. Rerum, maiores
           odio.</p>
         <button className='custom__button'>Know More</button>
       </div>
    </div>
  </div>
);

export default AboutUs;
