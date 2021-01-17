import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerCreatePage from './pages/CustomerCreatePage';
import CustomerEditPage from './pages/CustomerEditPage';
import ConditionalHomePage from './components/ConditionalHomePage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ConditionalHomePage} />
      <Route exact path="/customers/create" component={CustomerCreatePage} />
      <Route exact path="/customers/:id" component={CustomerDetailPage} />
      <Route exact path="/customers/:id/edit" component={CustomerEditPage} />
    </Switch>
  );
}

export default App;
