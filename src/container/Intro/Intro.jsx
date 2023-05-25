import  {React, useRef, useState} from 'react';
import  meal  from '../../assets/meal.mp4';
import {BsPlayFill, BsPauseFill} from 'react-icons/bs'
import './Intro.css';

const Intro = () => {

   const [playVideo, setPlayVideo] = useState(false);
   const videoRef = useRef();

   const handleClick = () => {
     setPlayVideo((playVideo) => !playVideo);

     if(playVideo){
      videoRef.current.pause();
     }
     else{
      videoRef.current.play();
     }

   }

  return(
    <div className='app__intro'>
      <video
      type="video/mp4"
      src={meal}
      controls={false}
      muted
      loop
      ref={videoRef}
      />

      <div className='flex__center app__intro-overlay'>
         <div className='flex__center app__intro-overlay_icons' onClick={handleClick}>
           {playVideo ?
          <BsPauseFill color='#fff' fontSize={30}/> :
          <BsPlayFill  color='#fff' fontSize={30}/>}
         </div>
      </div>
   </div>

)
  
};

export default Intro;
