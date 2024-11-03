import React, { useState,useEffect } from 'react';
import './home.css'
import Backgroundslider from '../../components/backgroundslider/Backgroundslider';
//import { useNavigate } from 'react-router-dom';
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'


import translate from 'translate-google-api';
//import translate from 'google-translate-api';

export default function Home() {

  const [translatedText, setTranslatedText] = useState('');
  const [textToTranslate, setTextToTranslate] = useState('Hello, world!');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Example: Spanish

  const translateText = () => {
    translate(textToTranslate, { to: targetLanguage })
      .then((response) => {
        setTranslatedText(response.text);
      })
      .catch((error) => {
        console.error('Translation error:', error);
      });
  };


  


  



  const {text}=useTypewriter({
    words :['apple','mango','bannana'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
  })

  
  return (
    <div className='screner1' id="home">
      
      <Backgroundslider/>
      {/* <span style={{color:'white'}}>I am a{' '}</span>
      <span style={{color:'white'}}>{text}</span>
      <Typewriter words={['Hello, World!', 'Welcome to React Typewriter','apple']} loop={true} cursor={true} cursorStyle="|"/>
      <Cursor/> */}

     {/* <button onClick={translateText}>Translate</button> */}
      {/* <p>Original Text: {textToTranslate}</p>
      <p>Translated Text: {translatedText}</p>  */}
      

  
      
    </div>
  )
}

