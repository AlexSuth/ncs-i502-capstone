import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './createAccount.styles';
import logo from '../../assets/e-commerce.png';


const CreateAccountPage = () => {
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
          Register as a Retailer
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Typography component="h1" variant="h6">
          User Information
          </Typography>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Typography component="h1" variant="h6">
          Company Information
        </Typography>
        <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="company-name"
                label="Company Name"
                id="company-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="company-street-address"
                label="Street Address"
                id="company-street-address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                type="city"
                id="company-city"
              />            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="state"
                label="State/Province"
                id="company-state"
              />            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="zip"
                label="Zip Code/Postal Code"
                id="company-zip"
              />            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="Phone"
                id="company-phone"
              />            
            </Grid>
            <Typography component="h1" variant="h6">
              License Information
            </Typography>
        <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="license-number"
                label="License Number"
                id="license-number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="expiration-date"
                label="Expiration Date"
                id="expiration-date"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default CreateAccountPage;