import React from 'react';
import './MenuItem.css';

const MenuItem = ({title, tags, price}) => {
  return(
    <div className='app__menuitem'> 
      <div className='app__menuitem-title'>
       <p className='subheadtext__cormorant'>{title}</p>
       <div className='app__menuitem-bar'/>
       <p className='p__cormorant'>{price}</p>
       </div>
       <p className='app__menuitem-tags'>{tags}</p>
    </div>
)
  };
  

export default MenuItem;
