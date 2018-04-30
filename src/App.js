import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom/Route'


import Routes from './components/Routes'
import Navbar from './components/Navbar'

import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    
  }
  
  render() {
    return (
      <div className="App">
       <Navbar />
       <div>
       <Routes />
       </div>
      </div>
     
    );
  }
}

export default App;
