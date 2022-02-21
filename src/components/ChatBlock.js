import React, {useState} from 'react';
import Chat from './Chat';
import Login from './Login';
import './../styles/Chat.css';
import Buble from './Bubble';
import Landing from './Landing';

function ChatBlock({username, setUsername, setRoom, joinRoom, socket, userEmail, setUserEmail, room, showChat, setShowChat}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleShowChat = () => setShowChat(!showChat);

  const chatStyle = {
    height: isOpen ? "650px" : "0",
    width: isOpen ? "350px" : "0",
    opacity: isOpen ? "1" : "0.7",
    boxShadow: isOpen ? "0 0 0px 1px var(--mblue), 0 0 0px 3px rgba(240, 241, 243, 0.8)" : "none"
  }

  return (
    <>
    {/* Agent Icon */}
    {!isOpen && 
      <i aria-label="open support chat icon" className="neo-icon-agents" onClick={toggleOpen}></i>
    }  

    {/* Chat content */}
    <div className="chat-window-container" style={chatStyle}> 
         
       {/* Fold down chat button */}
      <div className="close-chat-icon" onClick={toggleOpen}>&#x2014;</div>   
      {(showChat && isOpen) && <div className="back-icon fa fa-arrow-left" onClick={toggleShowChat}></div> }
      
      {(!showChat && isOpen) &&
      <Landing
      socket={socket} 
      username={"You"} 
      userEmail={userEmail}
      setUsername={setUsername}
      setUserEmail={setUserEmail}
      room={room} 
      setRoom={setRoom}
      setShowChat={setShowChat}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      joinRoom={joinRoom}
      /> }

      {(showChat && isOpen) &&
      <Chat
        socket={socket} 
        username={"You"} 
        userEmail={userEmail}
        setUsername={setUsername}
        setUserEmail={setUserEmail}
        room={room} 
        setRoom={setRoom}
        setShowChat={setShowChat}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        /> }
  </div>
  </>
  )
}

export default ChatBlock;
