import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export function App() {
  return (
    <Router>
      <StylesProvider>
        <Switch>
          <Route path='/pricing' component={Pricing} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}
