import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import FlowerImage from '../../../assets/flower.png';
import VialImage from '../../../assets/vial.png';
import CookieImage from '../../../assets/cookies.png';

import useStyles from './shopSections.styles';

const ShopSections = () => {
  const classes = useStyles();

  return (

    <Container className={classes.container} component="section" maxWidth="xl" alignItems= 'center'>
        <Grid container spacing={8}>
          <Grid item key='1'>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={FlowerImage}
                title="Flower Image"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Flowers
                </Typography>
              </CardContent>
              <CardActions>
              <Link href="/products/">
                <Button variant="contained" size="medium" color="primary">
                  Shop Collection
                </Button>
                </Link>
              </CardActions>
            </Card>
            </Grid>

            <Grid item key='2'>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={VialImage}
                title="Extracts Image"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Extracts
                </Typography>
              </CardContent>
              <CardActions>
              <Link href="/products/">
                <Button variant="contained" size="medium" color="primary">
                  Shop Collection
                </Button>
                </Link>
              </CardActions>
            </Card>
            </Grid>

            <Grid item key='3'>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={CookieImage}
                title="Edibles Image"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Edibles
                </Typography>
              </CardContent>
              <CardActions>
              <Link href="/products/">
                <Button variant="contained" size="medium" color="primary">
                  Shop Collection
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          </Grid>
        </Container> 
            );
  }

export default ShopSections;