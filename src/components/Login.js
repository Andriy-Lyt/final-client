import React, {useState} from 'react';
import './../styles/App.css';
import './../styles/Login.css';

function Login({setUsername, setUserEmail, setRoom, joinRoom}) {
  const[selectedRoom, setSelectedRoom] = useState(1);
  const[nameError, setNameError] = useState('');
  const[emailError, setEmailError] = useState('');
  const[formInputName, setFormInputName] = useState('');
  const[formInputEmail, setFormInputEmail] = useState('');

  const handleFormInputName = (e) => {
    setFormInputName(e.target.value);
  };
  const handleFormInputEmail = (e) => {
    setFormInputEmail(e.target.value);
  };

  const clearNameError = (e) => setNameError('');
  const clearEmailError = (e) => setEmailError('');

  const submitForm = (e) => {
    e.preventDefault();
    if (!formInputName) {
      setNameError("Please enter your Name");
    } 
    if (!formInputEmail) {
      setEmailError("Please enter your Email");
    } 
    if(formInputName && formInputEmail) {
      localStorage.setItem('username', formInputName);
      setUsername(formInputName);

      localStorage.setItem('useremail', formInputEmail);
      setUserEmail(formInputEmail);
      
      localStorage.setItem('room', selectedRoom);
      setRoom(selectedRoom);

      joinRoom(formInputName, selectedRoom);
    }
  }

/*   const onRoomBtnClick = (event, roomNumber) => {
    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber);
    setSelectedRoom(roomNumber);
  } 
 */
/*   const btn1Color = selectedRoom === 1 ? 'btn-blue' : '';
  const btn2Color = selectedRoom === 2 ? 'btn-blue' : '';
 */  
  return (
    <div className="login-container">
        <form className="login-form" onSubmit={submitForm}>

            <div className="error error-div">{nameError}</div>

            <input type="text" className="input" placeholder="Your Name.." 
              onChange={handleFormInputName} onFocus={clearNameError}
              />

            <div className="error error-div">{emailError}</div>
            <input type="email" className="input" placeholder="Your Email.." 
              onChange={handleFormInputEmail} onFocus={clearEmailError}
              />

  {/*       <div className="buttons-div">
              <input type="button" value="Level 1 Support" className={"level-btn " + btn1Color} style={{cursor: "pointer"}}
              onClick={(e) => onRoomBtnClick(e, 1)} />

              <input type="button" value="Level 2 Support" className={"level-btn " + btn2Color} style={{cursor: "pointer"}}
              onClick={(e) => onRoomBtnClick(e, 2)} />         
            </div>
   */}  
          <button type="submit" id="join-btn" className="btn-green">Start Chat</button>
        </form>
    </div>
  )
}

export default Login;
