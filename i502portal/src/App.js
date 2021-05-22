import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/navbar.component';

import ProductPage from './pages/Products/products.component';
import HomePage from './pages/Home/home.component';
import AboutPage from './pages/About/about.component';
import CreateAccountPage from './pages/CreateAccount/createAccount.component';
import LoginPage from './pages/Login/login.component';
import ResetPasswordPage from './pages/ResetPassword/resetPassword.component';
import CartPage from './pages/Cart/cart.component';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/products' component={ProductPage} />
        <Route exact path='/create-account' component={CreateAccountPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/reset-password' component={ResetPasswordPage} />
        <Route exact path='/cart' component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <Switch>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/about' component={AboutPage} />
//           <Route path='/products' component={ProductPage} />
//           <Route exact path='/create-account' component={CreateAccountPage} />
//           <Route exact path='/login' component={LoginPage} />
//           <Route exact path='/reset-password' component={ResetPasswordPage} />
//           <Route exact path='/edit-products' component={EditProductsPage} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
