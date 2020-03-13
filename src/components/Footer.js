import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root:{
   
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    backgroundColor:"white"
  }

}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>©Copyright 2020 by Srijan Chapagain</p>
    </div>
  );
};

export default Header;
