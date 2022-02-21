import React, {} from 'react';
import './../styles/Chat.css';

function Landing({joinRoom}) {
  const chatStyle = {
    height:"650px",
    width:"350px",
    opacity:"1",
    boxShadow:"0 0 0px 1px var(--mblue), 0 0 0px 3px rgba(240, 241, 243, 0.8)"
  }

  const submitForm = (e) => {
    e.preventDefault();
    joinRoom("You", "1");
  }

  return (
    <div className="landing" style={chatStyle}>

      <div className="landing-intro">
        <h4 className="landing-header">Hello!</h4> 
        <p>Welcome to our support system.</p>
        <p>Please feel free to ask a question or to search our knowledge base.</p>
      </div>

      <div className='landing-convo'>
        Start a Conversation   
          
        <form className="landing-form" onSubmit={submitForm} >
          <textarea maxLength="500" placeholder="Type your message.."  />
          <button type="submit" className="textarea-btn">Send us a message</button>
        </form>
      </div>

      <div className="KB-div">
        <h4 className="h4">Knowledge Base <div className="fa fa-search"></div></h4>
        <form className="search-form">
          <div className="search-input-div">
            <input type="text" placeholder="Search.." />
            <button type="submit" className="kb-btn"><i className="fa fa-search"></i></button>
          </div>
        </form>
        <div className="search-results-container">
          <h4 className="h4">Search Results</h4>
          <div className="search-results-div">
            <p><a href="https://support.avaya.com/public/index?page=content&id=PRCS100796&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">PRCS100796</a> IT Help Contact Information for Customers</p> 
            <p><a href="https://support.avaya.com/public/index?page=content&id=TRNG100385&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">TRNG100385</a> Tips for Searching effectively on support site</p> 
            <p><a href="https://support.avaya.com/public/index?page=content&id=SOLN265671&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">SOLN265671</a> Avaya one-X Agent: Error "your login attempt unsuccessful</p> 
            <p><a href="https://support.avaya.com/public/index?page=content&id=SOLN139197&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">SOLN139197</a> Daylight Saving Time Change Information</p> 
            <p><a href="https://support.avaya.com/public/index?page=content&id=PRCS100833&actp=LIST_POPULAR&rp=home" target="_blank" rel="noreferrer">PRCS100833</a> Avaya Support Website Tips and Troubleshooting: Parts Menu Choice Options</p>  
          </div>
        </div>
      </div>

    

  </div>
  )
}

export default Landing;
