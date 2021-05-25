import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './resetPassword.styles';
import logo from '../../assets/e-commerce.png';

const ResetPasswordPage = () => {
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
        Forgot password?
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
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Reset Password
        </Button>
      </form>
    </div>
  </Container>
  );
}

export default ResetPasswordPage;