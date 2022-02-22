import React, {useEffect, useRef} from 'react';
import './../styles/Chat.css';

function Chat({socket, username, setUsername, sendMessage, onEnterPress, userEmail, setUserEmail, room, setRoom, setShowChat, isOpen, setIsOpen, currentMessage, setCurrentMessage, messageList, setMessageList,
  formError, setFormError}) {

/*   useEffect(() => {
    localStorage.setItem("messageList", JSON.stringify(messageList));
    console.log("messageList: ", JSON.stringify(messageList));
  }, [messageList]);
 */
 useEffect(() => { 
   socket.on("receive_message", (data) => {
      console.log("data received back from backend: ", data);
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  const lastMesRef = useRef(null);

  useEffect(() => {
   return lastMesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

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
          onKeyPress={onEnterPress}>
          </textarea>
          <button type="submit" className="btn-green mes-send-btn"> &#9658; </button>
        </form>

    </div>
  </section>
)
}

export default Chat;
