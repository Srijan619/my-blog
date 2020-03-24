import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import BlogAll from './BlogsAll'
import History from './history'
import './App.css'


function App() {
  return (
    <div >
          <Route path="/" exact  component={Home}/>
          <Route path="/Blogs" component={BlogAll}/>
    </div>
  );
}

export default App;
