import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../../components/Product/product.component';
import useStyles from './products.styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} s={6} m={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
