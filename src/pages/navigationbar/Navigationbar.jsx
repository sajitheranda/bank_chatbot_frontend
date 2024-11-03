import React, { useEffect } from 'react'
import './navigationbar.css'
import {Link} from 'react-scroll'
import myImage from './bank.jpg'
import {AiOutlineHome} from 'react-icons/ai'
import {BiDetail} from 'react-icons/bi'
import {BsChatText} from 'react-icons/bs'

export default function Navigationbar() {
    // const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    // const closeMenu = () => setClick(false)

       const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      };
      useEffect(() => {
        const addScript = document.createElement('script');
        addScript.setAttribute(
          'src',
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        addScript.onerror = (error) => {
          console.error('Error loading Google Translate script:', error);
        };
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, []);
  return (
      
      <div className='header'>
        <div className="navleft">
          <div className='imager'>
            <img src={myImage} alt="" style={{width: '35px', height: '35px', borderRadius: '50%',cursor: 'pointer'}}  />
          </div>
   

        </div>
        <div className="navmiddle">
          ABC Bank
        </div>
          <div className="navright">
              <span classname="spanner">
                  <Link to='home'  activeClass="active" spy={true} smooth={true} offset={50} duration={500}  className='section' ><AiOutlineHome/>{' '}Home</Link>
              </span>
              <span classname="spanner">
                  <Link to='detail'  activeClass="active" spy={true} smooth={true} offset={50} duration={500} className='section' ><BiDetail/>{' '}Detail</Link>
              </span>
              <span classname="spanner">
                  <Link to='chat'  activeClass="active" spy={true} smooth={true} offset={50} duration={500} className='section' ><BsChatText/>{' '}Chat</Link>
              </span>
              {/* <div id="google_translate_element"></div> */}
              
             
          </div>   
        </div>
    
  )
}


{/* <div className="navleft">

</div>
<div className="navright">
  <span classname="spanner"><a href="#section1" className='section'>Section 1</a></span>
  <span classname="spanner"><a href="#section2" className='section'>Section 2</a></span>
  <span classname="spanner"><a href="#section3" className='section'>Section 3</a></span>
 
</div> */}

