import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
} from '@material-ui/core';

import { Home } from '@material-ui/icons'

import { ShoppingCart } from '@material-ui/icons';

import { Link, useLocation } from 'react-router-dom';

import useStyles from './navbar.styles';

import logo from '../../assets/e-commerce.png';

const navLinks = [
  { title: 'Home', path: '/home' },
  { title: 'About', path: '/about' },
  { title: 'Products', path: 'products' },
  { title: 'Login', path: '/login' },
  // { title: 'Create Account', path: '/create-account' },
  // { title: 'Edit Products', path: '/edit-products' },
  // { title: 'Reset Password', path: '/reset' },
]

// const useStyle = makeStyles({
//   navDisplayFlex: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: 'lightblue'
//   },
//   linkText: {
//     textDecoration: 'none',
//     textTransform: 'uppercase',
//     color: 'black'
//   }
// });

const NavBar = ({ totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  // const styles = useStyle();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>

          <Typography varient='h6' className={classes.title} color='inherit'>

          <Container className={classes.navbarDisplayFlex}>
          
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>

        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        
    {navLinks.map(({ title, path }) => (
      <a href={path} key={title} className={classes.linkText}>
        <ListItem button>
          <ListItemText primary={title} />
        </ListItem>
      </a>
    ))}
    <IconButton aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
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
  </List>
  
  </Container>
            
          </Typography>
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
