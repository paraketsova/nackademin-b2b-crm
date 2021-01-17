import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerEditPage from './pages/CustomerEditPage';
import ConditionalHomePage from './components/ConditionalHomePage';


function App() {

  return (
    <div>
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
          component={CustomerEditPage} 
          />

        <Route
          exact
          path="/customers/:id" 
          component={CustomerDetailPage} 
        />
      </Switch>

    </div>
  );
}

export default App;
