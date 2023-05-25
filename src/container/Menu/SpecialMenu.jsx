import React from 'react';
import {SubHeading} from '../../components/index';
import './SpecialMenu.css';
import { MenuItem } from '../../components/index';
import images from '../../constants/images';
import data from '../../constants/data';


const SpecialMenu = () => (
   
  <div className='app__menu main__section-padding'>

    <div className='app__menu-header'>
      <SubHeading title="Menu That Fit You Pallete"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__menu-content'>
      <div className='app__menu-content_wine'>
        <h1 className='h1__cormorant'>Wine & Beer</h1>
        {data.wines.map((wine, index) => 
          (<MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>)
        )}
        </div>

      <div className='app__menu-image'>
        <img src={images.menu} alt="" />
      </div>

       <div className='app__menu-content_cocktail'>
        <h1 className='h1__cormorant'>Cocktails</h1>
        {data.cocktails.map((cocktail, index) => 
          (<MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>)
        )}
        </div>

    </div>
    <button type='button' className='custom__button'>View More</button>
    
  </div>
);

export default SpecialMenu;
