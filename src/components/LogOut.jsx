import React from 'react';
import { useHistory } from 'react-router-dom';


export default function LogOut() {
  const history = useHistory();

  function userLogOut() {
    localStorage.removeItem("WEBB20"); 
    localStorage.removeItem("email"); 
    localStorage.removeItem("firstName"); 
    localStorage.removeItem("lastName"); 
  history.push('/'); 
  }
  

  return (
    <div>
      <button onClick={userLogOut}>Log Out</button>
    </div>
  )
}
