import React, { useState } from 'react';

function App() {

  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  function handleOnChange(e) {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "email") {
      setEmailInput(e.target.value)
    }
    if (e.target.name === "password") {
      setPasswordInput(e.target.value)
    }
  }

  return (
    <div>
      <form>
        <label>Email</label>
        <input name="email" onChange={handleOnChange} />
        <label>Password</label>
        <input name="password" onChange={handleOnChange} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
