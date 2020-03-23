import React, { Component } from 'react';
import Header from '../Header';
import Stock from '../Projects';
import Intro from '../Intro';
import './Home.css'
import Portfolio from'../portfolio';
import Footer from '../Footer';
import Blog from '../Blog';

export default class Index extends Component {
  render() {
    return (
      <div className="background">
      <Header />
      <Intro/>
      <Blog/>
      <Portfolio/>
      <Stock/>
      <Footer/>
    </div>
    );
  }
}
