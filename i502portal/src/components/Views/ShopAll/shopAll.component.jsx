import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './shopAll.styles';

const ShopAll = () => {
  const classes = useStyles();

  return (      
    <div className={classes.root} style={{ backgroundImage: `url(/envelope-leaf.png)` }}>
      <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Modernize your Merchandising
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Cannabis retailers, brands, and distributors all use i502 to connect for a superior commerce experience.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/products/"
        >
          Shop All
        </Button>      
      </Container>
    </div>
  );
}

export default ShopAll;