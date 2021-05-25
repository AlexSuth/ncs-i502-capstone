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
  Hidden,
  Fab,
} from '@material-ui/core';

import { Home, ShoppingCart, KeyboardArrowUp } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './navbar.styles';

import SideDrawer from './sidedrawer.component';
import HideOnScroll from './hideonscroll.component';
import BackToTop from './backtotop.component';

const navLinks = [
  { title: 'Home', path: '/home' },
  { title: 'About', path: '/about' },
  { title: 'Products', path: 'products' },
  { title: 'Login', path: '/login' },
  // { title: 'Create Account', path: '/create-account' },
  // { title: 'Reset Password', path: '/reset' },
]

const NavBar = ({ totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <>
    <HideOnScroll>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>

          <Typography varient='h6' className={classes.title} color='inherit'>

          <Container className={classes.navbarDisplayFlex}>
          <Hidden smDown>
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
    </Hidden>
    
    <Hidden mdUp> 
      <SideDrawer navLinks={navLinks} />
    </Hidden>
  
  </Container>
            
          </Typography>
          
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default NavBar;
