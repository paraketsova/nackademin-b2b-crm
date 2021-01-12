import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';

function App() {
  const [customerList, setCustomerList] = useState([]);
  
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
    .then(data => setCustomerList(data.results))
  }

  return (
    <div>
      <Switch>
        <Route path="/login">
          
        </Route>
      </Switch>
      
      <hr />
      <button onClick={getMe}>Get Me</button>
      <button onClick={getCustomerList}>Get Customer List</button>

      {customerList.map((item, index) => {
        return <p key={index}>{item.name}</p>
      })}

    </div>
  );
}

export default App;
