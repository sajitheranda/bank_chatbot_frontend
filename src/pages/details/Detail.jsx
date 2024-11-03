import React from 'react'
import './detail.css'
import {Link} from 'react-scroll'


export default function Detail() {
  return (
    <div className='screner2' id="detail">
      <div className='home_main'>
          <div className='homeleft'></div>
          <div className='homeright'>
            <div className='chatbot_title'>Welcome to Virtual Assistant Chatbot!</div>
            <div className='description_app'>
            Welcome to Sri lanka's virtual banking assistant! Say goodbye to long wait times and hello to instant, round-the-clock assistance. Our AI-powered chatbot is here to revolutionize your banking experience.
            Explore account details, make transactions, and get real-time answers to your financial questions, all in one place. Our chatbot is designed to simplify your interactions, providing personalized solutions tailored to your needs.
            Ready to embark on a new era of banking convenience? Start a conversation with our chatbot today and discover a smarter way to manage your finances.
            </div>
            <Link to='chat'  activeClass="active" spy={true} smooth={true} offset={50} duration={500} ><button className='chatbot_btn' >Try chatbot...</button></Link>
           
            
          </div>
        </div>
    </div>
  )
}

