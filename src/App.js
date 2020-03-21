import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Portal from './pages/Portal';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Portal}/>
        </Switch>
      </div>
    </Router>
  );
}
