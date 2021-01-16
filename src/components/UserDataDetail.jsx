import React from 'react';
import UserDataDetailStyled from './UserDataDetailStyled';
import LogOut from './LogOut';


export default function UserDataDetail() {
  const userFirstName = localStorage.getItem("firstName");
  const userLastName = localStorage.getItem("lastName");
  const userEmail = localStorage.getItem("email");

  return (
    <UserDataDetailStyled>
      <div>
     👤  {userFirstName} {userLastName} 
      <p> {userEmail} </p>
      <LogOut />
    </div>
    </UserDataDetailStyled>
   
  )
}
