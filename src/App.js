import React, { useState } from 'react';
import { ThemeConsumer } from 'styled-components';

function App() {

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [formData, setFormData] = useState({
    email: "Mariia.Paraketsova@yh.nackademin.se",
    password: "javascriptoramverk"
  });

  function handleOnChange(e) {
   const inputName = e.target.name;
   const inputValue = e.target.value;
   const newObj = {...formData, [inputName]: inputValue}; //add new attribute to obj -> newObj
   setFormData(newObj);
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = {
      email: formData.email,
      password: formData.password
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleOnChange} />
        <label>Password</label>
        <input name="password" value={formData.password} onChange={handleOnChange} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
