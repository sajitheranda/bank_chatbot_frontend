import React, { useState } from 'react'
import imageSlide from './data'
import { useEffect } from 'react';
import imager from './1.jpg'
import './backgroundslider.css'
import Typingbox from '../typingbox/Typingbox';

export default function Backgroundslider() {

    const[currentstate,setcurrentstate]=useState(0);

    const backgroundimgstyle={
        backgroundImage:`url(${imageSlide[currentstate].url})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Update the state value here
          setcurrentstate(currentstate => (currentstate + 1) % 3); // For example, cycling between 0, 1, 2
        }, 5000); // Interval is in milliseconds (5 seconds = 5000 ms)
    
        return () => {
          clearInterval(intervalId); // Clear the interval when the component unmounts
        };
      }, []);


  return (
    <div className='slider' style={backgroundimgstyle}>
        <Typingbox/>
        {/* <div className="title">{imageSlide[currentstate].title}</div>
        <div className="bodyer">{imageSlide[currentstate].body}</div> */}
    </div>
  )
}
