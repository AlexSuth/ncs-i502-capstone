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

import { Link, useLocation } from 'react-router-dom';

import useStyles from './navbar.styles';

import logo from '../../assets/e-commerce.png';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            varient='h6'
            className={classes.title}
            color='inherit'
          >
            <img
              src={logo}
              alt='i502 Portal'
              height='25px'
              className={classes.image}
            />
            i502 Portal
          </Typography>
          <div className={classes.grow} />
          {location.pathname !== '/cart' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show Cart Items'
                color='inherit'
              >
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
