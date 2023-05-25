import React from 'react';
import {data, images} from '../../constants';
import {SubHeading} from '../../components/index';

import './Laurels.css';

const Award = ({imgUrl, title, subtitle}) => {
   return(
      <div className='app__laurels-awardcard'>
        <img src={imgUrl} alt="imgUrl" />
         <div className='app__laurels-awardcard-content'>
           <p className='subheadtext__cormorant'>{title}</p>
           <p className='app__laurels-awardcard-text p__gray'>{subtitle}</p>
         </div>
      </div>
   )
   }

const Laurels = () => {
  
  return(
    <div className='app__laurels main__section-padding'>

    <div className='app__laurels-content'>
      <SubHeading title="Awards & recognition" className="app__laurels--subheading"/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels-content_award'>
        {data.awards.map((award) => 
          (<Award imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} />)
        )}
      </div>  
    </div>

    <div className='app__laurels-image'>
      <img src={images.laurels} alt="gallery1" />
    </div>

  </div>

  )
  
};

export default Laurels;
