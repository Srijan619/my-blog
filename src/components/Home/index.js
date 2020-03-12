import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Stock from '../Projects';
import Intro from '../Intro';
import './Home.css'
import Portfolio from'../portfolio';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
   
}));

function Index() {
  const classes = useStyles();
 

  return (
    <div className="background">
      <Header />
      <Intro/>
      <Portfolio/>
      <Stock/>
      <Footer/>
    </div>
  );
}

export default Index;
