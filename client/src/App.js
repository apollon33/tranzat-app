import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './UIPages/HomePage';
import MainNavigation from './Components/Navigation/MainNavigation';
import Login from './Components/Auth/Login'
import Signup from './Components/Auth/Signup'


function App() {
  return (
    <div className="App">
      <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
              <HomePage />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </main>
      </Router>
      
    </div>
  );
}

export default App;
