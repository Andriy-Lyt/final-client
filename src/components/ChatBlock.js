import React, {useState, useEffect} from 'react';
import Chat from './Chat';
// import Login from './Login';
import './../styles/Chat.css';
import Buble from './Bubble';
import Landing from './Landing';

function ChatBlock({username, setUsername, setRoom, joinRoom, socket, userEmail, setUserEmail, room, showChat, setShowChat}) {

  console.log("ChatBlock.js rendered");

  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  // const [messageList, setMessageList] = useState(localStorage.getItem("messageList") ? JSON.parse(localStorage.getItem("messageList")) : []);
  const [messageList, setMessageList] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    console.log("messageList ChatBlock.js line 17: ", messageList);
  }, [messageList]);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleShowChat = () => setShowChat(!showChat);

  const chatStyle = {
    height: isOpen ? "650px" : "0",
    width: isOpen ? "350px" : "0",
    opacity: isOpen ? "1" : "0.7",
    boxShadow: isOpen ? "0 0 0px 1px var(--mblue), 0 0 0px 3px rgba(240, 241, 243, 0.8)" : "none"
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== '') {     
      const hours =  new Date(Date.now()).getHours();
      const printHours = hours < 10 ? `0${hours}` : hours;
      const minutes = new Date(Date.now()).getMinutes();
      const printMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const messageData = {
        room: room, //comes from props
        // user: username || '',
        userId: socket.id,
        message: currentMessage,
        time: `${printHours}:${printMinutes}`
      };
      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
    } else {
      setFormError("Please enter the Message");
    }
    e.target.value = '';
    setCurrentMessage('');
}

useEffect(() => { 
  socket.on("receive_message", (data) => {
     console.log("data received back from backend: ", data);
     setMessageList((prev) => [...prev, data]);
   });
 }, [socket]);


 function onEnterPress(e) {
   if ( e.key === "Enter" && !e.shiftKey) {
    sendMessage(e);
   }
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
      sendMessage={sendMessage}
      currentMessage={currentMessage}
      setCurrentMessage={setCurrentMessage}
      messageList={messageList}
      setMessageList={setMessageList}
      socket={socket} 
      username={"You"} 
      // userEmail={userEmail}
      // setUsername={setUsername}
      // setUserEmail={setUserEmail}
      room={room} 
      setRoom={setRoom}
      setShowChat={setShowChat}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      joinRoom={joinRoom}
      /> }

      {(showChat && isOpen) &&
      <Chat
        sendMessage={sendMessage}
        onEnterPress={onEnterPress}
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        messageList={messageList}
        setMessageList={setMessageList}
        formError={formError}
        setFormError={setFormError}
        socket={socket} 
        username={"You"} 
        // userEmail={userEmail}
        // setUsername={setUsername}
        // setUserEmail={setUserEmail}
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
