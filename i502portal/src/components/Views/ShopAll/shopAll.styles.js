import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../../assets/envelope-leaf.png';

export default makeStyles((theme) => ({
  background: {
    backgroundImage: {backgroundImage},
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));