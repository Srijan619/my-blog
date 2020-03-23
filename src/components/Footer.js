import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root:{
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    background:'transparent',
    color:'white',
    fontWeight:'bold',
    fontSize:'25'
  }

}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span>©Copyright 2020 by Srijan Chapagain</span>
    </div>
  );
};

export default Footer;
