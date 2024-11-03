import React from 'react'
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'
import './typingbox.css'
import descript from './description'

export default function Typingbox() {
  return (
    <div className='typing_box'>
        <div className="titletyping">
            Welcome to ABC Bank
        </div>
        <div className="bodytyping">
            <Typewriter words={descript} loop={true} typeSpeed='200'  deleteSpeed='10' />
            {/* <div>{descript[0]}</div> */}
            <Cursor/>
        </div>
        
    </div>
  )
}
