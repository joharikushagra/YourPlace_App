import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App  = () => {
  //styling has been done in main tag to keep space with navbar
  return (
    <Router>
    <MainNavigation/>
    <main> 
    <Switch>
      <Route exact path='/'>
        <Users/>
      </Route>
      <Route exact path='/:userId/places'>
        <UserPlaces/>
      </Route>
      <Route path='/places/new' exact>
       <NewPlace/>
      </Route>
      <Redirect to='/'/>
      </Switch>
    </main>
    </Router>
  );
}

export default App;
