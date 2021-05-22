import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../../components/Product/product.component';
import useStyles from './products.styles';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$55',
    image:
      'https://www.rei.com/dam/content_team_010818_52427_htc_running_shoes_hero2_lg.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple Macbook',
    price: '$800',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg',
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} s={6} m={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
