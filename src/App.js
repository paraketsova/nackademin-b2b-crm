import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerEditPage from './pages/CustomerEditPage';
import ConditionalHomePage from './components/ConditionalHomePage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ConditionalHomePage />
      </Route>

      <Route path="/customers/create">
        <CustomerCreatePage />
      </Route>

      <Route exact path="/customers/:id" component={CustomerDetailPage} />

      <Route path="/customers/:id/edit" component={CustomerEditPage} />
    </Switch>
  );
}

export default App;
