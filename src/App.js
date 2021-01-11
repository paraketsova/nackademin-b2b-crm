import React, { useState } from 'react';

function App() {

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [formData, setFormData] = useState({
    email:"",
    password:""
  });

  function handleOnChange(e) {
    console.log(e.target.name, e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value}) //add new attribute to object formData
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
