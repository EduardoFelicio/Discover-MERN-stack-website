import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Travels from './travels';
import Contacts from './contacts';
import Register from './auth/register';
import Login from './auth/login';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/experiences" component={Travels} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Main;
