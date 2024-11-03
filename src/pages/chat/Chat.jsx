import React, { useState,useEffect, useRef } from 'react'
import {IoMdSend}  from 'react-icons/io';
import {BiBot,BiUser} from 'react-icons/bi';
import './chat.css'
// import axios from "axios";


export default function Chat() {
    const lastUserActivity = useRef(new Date());
    

    useEffect(() => {
        // Check for user inactivity every second
        const interval = setInterval(() => {
          const currentTime = new Date();
          const timeSinceLastUserActivity = (currentTime - lastUserActivity.current) / 1000; // Convert to seconds
  
          // If the user has been inactive for a minute, send a message
          if (timeSinceLastUserActivity >= 600) {
            rasaAPI("shreyas","logout");
            // User provides input, update the last activity time
            lastUserActivity.current = new Date();
          }
        }, 1000);
  
        return () => clearInterval(interval);
      }, []);

    //   const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     const name = "shreyas";
    //     const request_temp = { sender: "user", senderid: name, msg: inputMessage };
      
    //     if (inputMessage !== "") {
    //       // User provides input, update the last activity time
    //       lastUserActivity.current = new Date();
          
    //       setChat((chat) => [...chat, request_temp]); // Use the correct variable name "request_temp"
    //       setbotTyping(true);
    //       setInputMessage('');
    //       rasaAPI(name, inputMessage);
    //     } else {
    //       window.alert("Please enter a valid message");
    //     }
    //   }
      


    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //       {
    //         pageLanguage: "en",
    //         autoDisplay: false
    //       },
    //       "google_translate_element"
    //     );
    //   };
    //   useEffect(() => {
    //     var addScript = document.createElement("script");
    //     addScript.setAttribute(
    //       "src",
    //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    //     );
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
    //   }, []);

    const [chat,setChat] = useState([]);
    const [inputMessage,setInputMessage] = useState('');
    const [botTyping,setbotTyping] = useState(false);

    
   useEffect(()=>{
   
        console.log("called");
        const objDiv = document.getElementById('messageArea');
        objDiv.scrollTop = objDiv.scrollHeight;
        
    
    },[chat])

    


    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const name = "shreyas";
        const request_temp = {sender : "user", sender_id : name , msg : inputMessage};
        
        if(inputMessage !== ""){
            lastUserActivity.current = new Date();
            
            setChat(chat => [...chat, request_temp]);
            setbotTyping(true);
            setInputMessage('');
            rasaAPI(name,inputMessage);
        }
        else{
            window.alert("Please enter valid message");
        }
        
    }


    const rasaAPI = async function handleClick(name,msg) {
    
        //chatData.push({sender : "user", sender_id : name, msg : msg});
        

          await fetch('http://localhost:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": name, "message": msg }),
        })
        .then(response => response.json())
        .then((response) => {
            if(response){
                const temp = response[0];
                const recipient_id = temp["recipient_id"];
                const recipient_msg = temp["text"];        


                const response_temp = {sender: "bot",recipient_id : recipient_id,msg: recipient_msg};
                setbotTyping(false);
                
                setChat(chat => [...chat, response_temp]);
               // scrollBottom();

            }
        }) 
    }

    console.log(chat);

    const stylecard = {
      maxWidth : '35rem',
      border: '1px solid black',
      paddingLeft: '0px',
      paddingRight: '0px',
      borderRadius: '30px',
      boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)',
      marginTop : '20px',

  }
  const styleHeader = {
      height: '4.5rem',
      borderBottom : '1px solid black',
      borderRadius: '30px 30px 0px 0px',
      backgroundColor: '#5d0205',//#8012c4
      paddingTop : '10px',

  }
  const styleFooter = {
     // Change to desired width (e.g., '100%', '40rem', etc.)
    padding: '10px',
    borderTop: '1px solid black',
    borderRadius: '0px 0px 30px 30px',
    backgroundColor: '#5d0205',
};
  const styleBody = {
      paddingTop : '10px',
      height: '20rem',
      overflowY: 'a',
      overflowX: 'hidden',
      
  }

  return (
    <div className='botter' id='chat'>
        <div >
        {/* <button onClick={()=>rasaAPI("shreyas","hi")}>Try this</button> */}
        
        
        
        <div className="container">
        <div className="row justify-content-center">
            
                <div className="card" style={stylecard}>
                    <div className="cardHeader text-white" style={styleHeader}>
                        <h2 style={{marginTop:'0px'}}  >Chat</h2>
                        {botTyping ? <h6 >Bot Typing....</h6> : null}    
                    </div>
                    <div className="cardBody" id="messageArea" style={styleBody}>
                        
                        <div className="row msgarea">
                            {chat.map((user,key) => (
                                <div key={key}>
                                    {user.sender==='bot' ?
                                        (
                                            
                                            <div className= 'msgalignstart'>
                                                <BiBot className="botIcon"  /><h6 className="botmsg">{user.msg}</h6>
                                            </div>
                                        
                                        )

                                        :(
                                            <div className= 'msgalignend'>
                                                <h6 className="usermsg">{user.msg}</h6><BiUser className="userIcon" />
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                            
                        </div>
                
                    </div>
                    <div className="cardFooter text-white" style={styleFooter}>
                        <div className="row">
                            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                                <div className="col-40 cola" style={{paddingRight:'20px',flex:'7'}}>
                                   <input onChange={e => setInputMessage(e.target.value)} value={inputMessage} type="text" className="msginp" style={{paddingLeft:'20px',fontSize: '20px'}}></input>
                                </div>
                                <div className="col-2 cola"  style={{flex:'1'}}>
                                    <button type="submit" className="circleBtn" ><IoMdSend className="sendBtn" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
        </div>
       

      </div>
    </div>
  )
}
