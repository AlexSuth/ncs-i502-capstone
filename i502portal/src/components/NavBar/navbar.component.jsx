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

import { Link } from 'react-router-dom';

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

const useStyle = makeStyles({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue'
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black'
  }
});

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const styles = useStyle();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography varient='h6' className={classes.title} color='inherit'>

          <Container className={styles.navbarDisplayFlex}>
          
        <List component="nav" aria-labelledby="main navigation" className={styles.navDisplayFlex}>

        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        
    {navLinks.map(({ title, path }) => (
      <a href={path} key={title} className={styles.linkText}>
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
  </List>
  
  </Container>

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
            
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
