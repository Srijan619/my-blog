import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import BlogAll from './BlogsAll'
import History from './history'
import './App.css'


function App() {
  return (
    <div >
      <Router history={History}>
        <Switch>
          <Route path="/my-blog" exact component={Home}/>
          <Route path="/Blogs" component={BlogAll}/>
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
