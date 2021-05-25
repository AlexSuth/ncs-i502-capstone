import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

import useStyles from './ageConsentDialog.styles';
import logo from '../../assets/e-commerce.png';

const AgeConsentDialog = () => {
  const classes = useStyles();

  const DialogContent = withStyles(theme => ({
    root: {
      padding: '8px 80px 8px 80px',
      textAlign:'center'
    }
  }))(MuiDialogContent);
  
  const DialogTitle = withStyles(theme => ({
    root: {
      textTransform: "uppercase",
      textAlign:'center'
    }
  }))(MuiDialogTitle);

  const [open, setOpen] = React.useState(true);
  const handleYes = () => {
    setOpen(false);
  };

  return (
    <Dialog className={classes.dialogue}
      open={open}
      fullWidth
      disableBackdropClick
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Grid container justify="center">
        <Grid item>
          <Avatar className={classes.avatar}>
            <img
              src={logo}
              alt='i502 Portal'
              height='25px'
            />
          </Avatar>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      <DialogTitle id="alert-dialog-title" >
        {"Are you 21? Do you have a valid business license?"}
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description"  maxWidth={"xs"} style={{textAlign:'center'}} disableTypography>
          <Typography type="paragraph">
          i502Co is intended for business-to-business use only. All authorized users must maintain applicable licenses and permits to purchase any products or services through this site.<br/><br/> Are you 21 years of age or older?
          </Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Grid container justify="center">
          <Grid item>
            <Button onClick={handleYes} 
              color="primary" autoFocus>
              Yes
            </Button>
            </Grid>
            <Grid item>
            <Button 
              onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
              }} 
              color="primary">
                No
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default AgeConsentDialog;