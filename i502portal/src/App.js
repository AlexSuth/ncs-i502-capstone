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
import Cart from './components/Cart/cart.component';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route
          path='/products'
          component={() => (
            <ProductPage products={products} onAddToCart={handleAddToCart} />
          )}
        />
        <Route
          exact
          path='/cart'
          component={() => (
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          )}
        />
        <Route exact path='/create-account' component={CreateAccountPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/reset-password' component={ResetPasswordPage} />
      </Switch>
    </div>
  );
};

export default App;
