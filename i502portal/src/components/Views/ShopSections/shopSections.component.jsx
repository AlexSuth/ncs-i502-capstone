import React from 'react';

import Avatar from '@material-ui/core/Avatar';

import useStyles from './shopSections.styles';
import logo from '../../../assets/e-commerce.png';

const ShopSections = () => {
  const classes = useStyles();


  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <img
          src={logo}
          alt='i502 Portal'
          height='25px'
        />
      </Avatar>
    </div>
  );
};

export default ShopSections;