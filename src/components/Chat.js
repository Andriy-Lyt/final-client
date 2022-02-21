import React, {useState, useEffect, useRef} from 'react';
import './../styles/Chat.css';

function Chat({socket, username, setUsername, userEmail, setUserEmail, room, setRoom, setShowChat, isOpen, setIsOpen}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState(localStorage.getItem("messageList") ? JSON.parse(localStorage.getItem("messageList")) : []);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    localStorage.setItem("messageList", JSON.stringify(messageList));
  }, [messageList]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== '') {     
      const hours =  new Date(Date.now()).getHours();
      const printHours = hours < 10 ? `0${hours}` : hours;
      const minutes = new Date(Date.now()).getMinutes();
      const printMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const messageData = {
        room: room, //comes from props
        user: username,
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

 function onKeyPress(e) {
   if ( e.key === "Enter" && !e.shiftKey) {
    sendMessage(e);
   }
 }

 useEffect(() => { 
   socket.on("receive_message", (data) => {
      // console.log("data received back from backend: ", data);
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const lastMesRef = useRef(null);

  useEffect(() => {
    lastMesRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [currentMessage]);

  return (
    <section className="chat-container">
      {/* Display Chat messages */}
      <div className="chat-body">

        {messageList.map((mes, i) => {
           return (
             <div ref={lastMesRef} key={i} className="message-div" data-id={username === mes.user ? "client" : "support" } >
               <p className="message-time">{mes.time} {mes.user}</p>
               <p className="message-text">{mes.message}</p>
             </div>
           ) 
          }
        )}
      </div>

      {/* Send Chat Messages */}
      <div className="form-container">
       {formError && <div className="error"> {formError} </div>}
        <form className="chat-form" onSubmit={sendMessage}>        
          <textarea maxLength="500" placeholder="Type your message.." 
          onChange={(event) => {setCurrentMessage(event.target.value.trim()); setFormError(''); }}
          onKeyPress={onKeyPress}>
          </textarea>
          <button type="submit" className="btn-green mes-send-btn"> &#9658; </button>
        </form>
    </div>
  </section>
)
}

export default Chat;
