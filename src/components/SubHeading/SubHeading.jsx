import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div >
     <h3 style={{fontFamily:"Cormorant Upright", fontSize:"23px"}}>{title}</h3>
     <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
