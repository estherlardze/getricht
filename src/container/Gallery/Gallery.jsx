import React, { useRef } from 'react';
import {SubHeading} from '../../components/index';
import { images } from '../../constants';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa'
import './Gallery.css';

const imageUrl = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    
    if(direction === "left"){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  }

  return(
  <div className='app__gallery section__padding'>

    <div className='app__gallery-content'>
      <SubHeading title = "Instagram"/>
      <h1 className='headtext__cormorant'> Photo Gallery</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className='custom__button' type='button'>View More</button>
    </div>


  <div className='app__gallery-images'>
    
    <div className='app__gallery-images_container' ref={scrollRef}>
      {imageUrl.map((image) => (
         <div className='app__gallery-imageCard flex__center'>
          <img src={image} alt="gallery"/>
          <FaInstagram className='app__gallery-instagram_icon'/>
        </div> 
        ))}
    </div>

    <div className='app__gallery-arrows'>
      <BsArrowLeftShort onClick={() => scroll("left")} className='app__gallery-icon'/>
      <BsArrowRightShort onClick={() => scroll("right")} className='app__gallery-icon'/>
    </div>

    </div> 
  </div>
)};

export default Gallery;
