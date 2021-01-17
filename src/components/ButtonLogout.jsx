import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

export default function LogOut() {
  const history = useHistory();

  function userLogout() {
    localStorage.removeItem("WEBB20"); 
    localStorage.removeItem("email"); 
    localStorage.removeItem("firstName"); 
    localStorage.removeItem("lastName"); 
    history.push('/'); 
  }
  
  return (
    <Button small onClick={userLogout}>Log Out</Button>
  )
}
