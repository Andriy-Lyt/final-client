import React, {useEffect, useRef} from 'react';
import './../styles/Chat.css';

function Chat({socket, username, setUsername, sendMessage, onEnterPress, userEmail, setUserEmail, room, setRoom, setShowChat, isOpen, setIsOpen, currentMessage, setCurrentMessage, messageList, setMessageList,
  formError, setFormError}) {

/*   useEffect(() => {
    localStorage.setItem("messageList", JSON.stringify(messageList));
    console.log("messageList: ", JSON.stringify(messageList));
  }, [messageList]);
 */

  const lastMesRef = useRef(null);

  useEffect(() => {
   return lastMesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <section className="chat-container">
      {/* Display Chat messages */}
      <div className="chat-body">

        {messageList.map((mes, i) => {
          const isYourMessage = socket.id === mes.userId;
          
          return (
             <div ref={lastMesRef} key={i} className="message-div" data-id={isYourMessage ? "client" : "support" } >
               <p className="message-time">{mes.time} {isYourMessage ? "You:" : ""}</p>
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
