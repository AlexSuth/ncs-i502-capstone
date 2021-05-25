import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import useStyles from './ageConsentDialog.styles';
import logo from '../../assets/e-commerce.png';

const AgeConsentDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleYes = () => {
    setOpen(false);
  };

  return (

    // <div component="main"  maxWidth="xs">
    <div className={classes.paper}>
    <Container component="dialog">
      
      <Dialog 
        open={open}
        disableBackdropClick
        maxWidth='md'
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <div className='image-container' text-align='center'> */}
          <Avatar className={classes.avatar}>
            <img
              src={logo}
              alt='i502 Portal'
              height='25px'
            />
          </Avatar>
        <Divider variant="middle" />
        <DialogTitle id="alert-dialog-title" style={{textAlign:'center'}}>
          {"Are you 21? Do you have a valid business license?"}
        </DialogTitle>


        <DialogContent>
          <DialogContentText id="alert-dialog-description"   style={{textAlign:'center'}} disableTypography>
            <Typography type="paragraph">
            i502Co is intended for business-to-business use only. All authorized users must maintain applicable licenses and permits to purchase any products or services through this site.<br/><br/> Confirm that you are 21 years of age or older to continue.
            </Typography>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYes} 
            color="primary" autoFocus>
            Yes
          </Button>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              window.location.href='http://google.com';
            }} 
            color="primary">
              No
          </Button>
        </DialogActions>
      </Dialog>
      
    </Container>
    </div>
  );
};

export default AgeConsentDialog;