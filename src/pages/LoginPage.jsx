import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import LoginFormStyled from '../components/LoginFormStyled';
import Logo from '../components/Logo';

export default function LoginPage() {

  const [formData, setFormData] = useState({
    email: "Mariia.Paraketsova@yh.nackademin.se",
    password: "javascriptoramverk"
  });
  const history = useHistory();
 
  function handleOnSubmit(e) {
    e.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password
    };

    getToken(payload)
      .then(() => getUserData()
        .then(() => history.push('/'))
      );
  }

  function getToken(payload) {
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("WEBB20", data.token);
      });
  }

  function getUserData() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    const token = localStorage.getItem("WEBB20");
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("email", data.email);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
      });
  }

  function handleOnChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newObj = {...formData, [inputName]: inputValue}; //add new attribute to obj -> newObj
    setFormData(newObj);
  }

  return (
    <div>
      <LoginFormStyled>
        <header>
          <Logo>B2B<span>customer</span>service</Logo>
        </header>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input name="email" value={formData.email} onChange={handleOnChange} />
          </div>
          <div>
            <input name="password" value={formData.password} onChange={handleOnChange} />
          </div>
          <button type="submit">LOG IN</button>
        </form>
      </LoginFormStyled>
    </div>
  
  )
}
