import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';


function App() {

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

  return (
    <div>

      <ul>
        <li>
          <Link to="/home"> Customers</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customers</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>

        <Route 
          path="/customers/:id/edit"
          component={CustomerUpdatePage} 
          />

        <Route 
          path="/customers/:id" 
          component={CustomerDetailPage} 
        />

        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
      
      <hr />
      
    </div>
  );
}

export default App;
