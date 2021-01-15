import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import ConditionalHomePage from './components/ConditionalHomePage';


function App() {

  function getMe() { //get my name and email
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
          <Link to="/"> Home Page</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customers</Link>
        </li>
      </ul>

      <Switch>
        <Route 
          exact
          path="/"
          component={ConditionalHomePage} 
        />

        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>

        <Route 
          path="/customers/:id/edit"
          component={CustomerUpdatePage} 
          />

        <Route
          exact
          path="/customers/:id" 
          component={CustomerDetailPage} 
        />

      </Switch>
      
      <hr />
      
    </div>
  );
}

export default App;
