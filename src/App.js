import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import ConditionalHomePage from './components/ConditionalHomePage';


function App() {

  return (
    <div>

      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customer</Link>
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
