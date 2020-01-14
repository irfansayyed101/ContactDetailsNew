import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import ContactDetails from './container/contactDetails';
import LoginForm from './components/login/loginPage';
import Header from './common/headers';
import history from './common/history';
import LandingPage from './common/landingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <LandingPage/>
      <Router history={history}>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/ContactDetails" component={ContactDetails} />
       </Router>
      </div>
    );
  }
}

export default App;
