import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
  },
  dialogue: {
    width: '100%',
    marginTop: theme.spacing(1),
    alignItems: 'center',
    maxWidth:'md',
    display: 'flex',
    flexDirection: 'column',
  },
}));