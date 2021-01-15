import React from 'react'

export default function UserDataDetail() {
  const userFirstName = localStorage.getItem("firstName");
  const userLastName = localStorage.getItem("lastName");
  const userEmail = localStorage.getItem("email");

  return (
    <div>
      {userFirstName} {userLastName} 👤 {userEmail}
    </div>
  )
}
