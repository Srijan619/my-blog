import React from 'react';
import Header from '../Header';
import Stock from '../Projects';
import Intro from '../Intro';
import './Home.css'
import Portfolio from'../portfolio';
import Footer from '../Footer';

function Index() {

 

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
