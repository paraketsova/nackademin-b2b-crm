import React, { useState } from 'react';

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
    .then(data => {
      console.log(data)
      console.log(data.token) //get data token by click at Log In button
      localStorage.setItem("WEBB20", data.token)
    })
  }

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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
      <hr />
      <button onClick={getMe}>Get Me</button>
      <button onClick={getCustomerList}>Get Customer List</button>

    </div>
  );
}

export default App;
