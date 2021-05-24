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

import EditProductsPage from './pages/EditProducts/editProducts.component';
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

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  console.log(cart);
  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      <Cart cart={cart} />
      <ProductPage products={products} onAddToCart={handleAddToCart} />

   <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={() => <Cart cart={cart} />} />
        <Route
          path='/products'
          component={() => (
            <ProductPage products={products} onAddToCart={handleAddToCart} />
          )}
        />
        <Route exact path='/create-account' component={CreateAccountPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/reset-password' component={ResetPasswordPage} />
        <Route exact path='/cart' component={CartPage} />
    </Switch>

    </div>
  );
};

export default App;
