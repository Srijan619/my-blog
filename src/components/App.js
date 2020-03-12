import React from 'react';
import Home from './Home';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
   <Router>
   <Route exact path="/" component={Home} />
   </Router>
    </div>
  );
}

export default App;
