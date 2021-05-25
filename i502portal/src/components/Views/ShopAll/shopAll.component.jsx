import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './shopAll.styles';
import backgroundImage from './shopAll.styles';
import ShopAllLayout from './shopAllLayout.js';

const ShopAll = (props) => {
  const styles = useStyles();


  return (
    <ShopAllLayout backgroundClassName={styles.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Modernize your Merchandising
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={styles.h5}>
        Cannabis retailers, brands, and distributors all use i502 to connect for a superior commerce experience.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={styles.button}
        component="a"
        href="/products/"
      >
        Shop All
      </Button>
    </ShopAllLayout>
  );
}

ShopAll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ShopAll);