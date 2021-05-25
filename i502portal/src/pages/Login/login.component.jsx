import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './login.styles';
import logo from '../../assets/brandlogo.png';

import { signInWithGoogle } from '../../firebase/firebase.utils';


const LoginPage = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <img
          src={logo}
          alt='i502 Portal'
          height='25px'
        />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login to i502 Portal
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
        <Button
          onClick={signInWithGoogle}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Or Sign-In With Google
        </Button>
        
        <Grid container>
          <Grid item xs>
            <Link href="/reset-password" variant="body2">
              Forgot Your Password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/create-account" variant="body2">
              Register for i502 Portal
            </Link>
          </Grid>
        </Grid>
      </form>
      
    </div>
  </Container>
  );
}

export default LoginPage;