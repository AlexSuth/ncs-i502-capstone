import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';

import useStyles from './help.styles';


const Help = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Questions? Want to learn more?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We'd love to hear from you!
      </Typography>
      <HelpOutlineTwoToneIcon />
    </Container>
  );

}

export default Help;