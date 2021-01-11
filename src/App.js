import React, { useState } from 'react';

function App() {

  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  function handleEmailInput(e) {
    console.log(e.target.value)
  }

  function handlePasswordInput(e) {
    console.log(e.target.value)
  }


  return (
    <div>
      <form>
        <label>Email</label>
        <input onChange={handleEmailInput} />
        <label>Password</label>
        <input onChange={handlePasswordInput} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
