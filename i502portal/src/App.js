import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home/home.component';
import AboutPage from './pages/About/about.component';
import CreateAccountPage from './pages/CreateAccount/createAccount.component';
import LoginPage from './pages/Login/login.component';
import ResetPasswordPage from './pages/ResetPassword/resetPassword.component';
import EditProductsPage from './pages/EditProducts/editProducts.component';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/about' component={ AboutPage } />
          <Route exact path='/create-account' component={ CreateAccountPage } />
          <Route exact path='/login' component={ LoginPage }/>
          <Route exact path='/reset-password' component={ ResetPasswordPage }/>
          <Route exact path='/edit-products' component={ EditProductsPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;