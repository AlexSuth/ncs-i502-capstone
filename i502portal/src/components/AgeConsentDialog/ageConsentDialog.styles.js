import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
  },
  dialogue: {
    width: '100%',
    marginTop: theme.spacing(1),
    alignItems: 'center',
  },
}));