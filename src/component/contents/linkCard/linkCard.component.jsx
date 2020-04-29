import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './linkCard.style.scss';

const useStyles = makeStyles(theme =>({
  cardLink: {
    color: "#FFC355",
    fontWeight: "bold"
  },
  cardButton: {
    border: "1.5px solid #FFC355",
    borderRadius: 0,
  },
  cardText: {
    color: "#06F",
    [theme.breakpoints.up('xs')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 22,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
    },
  }
}))

export default function CardContainer() {
  const classes = useStyles();

  const handleListItemClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='linkCardContainer'>
        <Card className='linkCard' variant="outlined">
          <CardContent>
            <Typography className={classes.cardText}>About</Typography>
            <CardActions>
              <Button className={classes.cardButton} onClick={() => handleListItemClick()}>
                <Link to='/about' className
                ={classes.cardLink}>
                  Show it
                </Link>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card className='linkCard' variant="outlined">
          <CardContent>
          <Typography className={classes.cardText}>Skills</Typography>
            <CardActions>
              <Button className={classes.cardButton} onClick={() => handleListItemClick()}>
                <Link to='/skills' className
                ={classes.cardLink}>
                  Show it
                </Link>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card className='linkCard' variant="outlined">
          <CardContent>
          <Typography className={classes.cardText}>Products</Typography>
            <CardActions>
              <Button className={classes.cardButton} onClick={() => handleListItemClick()}>
                <Link to='/products' className
                ={classes.cardLink}>
                  Show it
                </Link>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
    </div>
  );
}