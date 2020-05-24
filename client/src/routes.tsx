import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Join from './pages/Join'
import Chat from './pages/Chat'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default Routes;