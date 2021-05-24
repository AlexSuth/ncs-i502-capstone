import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import NavBar from './components/NavBar/navbar.component'

ReactDOM.render(
  <BrowserRouter>
  <NavBar />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
