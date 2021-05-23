import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import useStyles from './navbar.styles';

import logo from '../../assets/e-commerce.png';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography varient='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='i502 Portal'
              height='25px'
              className={classes.image}
            />
            i502 Portal
            {/* <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/products'>Shop</Link>
              </li>
              <li>
                <Link to='/create-account'>Create Account</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/edit-products'>Edit Productscd</Link>
              </li>
            </ul> */}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
