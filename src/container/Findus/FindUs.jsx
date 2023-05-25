import React from 'react';
import  {images}  from '../../constants';
import { SubHeading } from '../../components';

import './findus.css';

const FindUs = () => (
  <div className='app__findus main__section-padding'>
     <div className='app__findus-content'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant'>Find us</h1>
      <p className='p__findus'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className='subheadtext__cormorant'>Opening Hours</p>
      <p className='p__findus-time'>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className='p__gray'>Sat - Sun: 10:00 am - 03:00 am</p>
     </div>
     <div className='app__findus-image'>
        <img src={images.findus} alt="" />
     </div>
  </div>
);

export default FindUs;
