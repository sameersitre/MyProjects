import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HorImg from './assets/dish-horizontal.jpg';
import NavigationBar from './components/NavigationBar.js';
import HorizontalContainer from './components/HorizontalContainer'
//import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div><img src={HorImg} width="" height="inherit" alt="dish horizontal" />
        </div>
        <HorizontalContainer/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Reactvfueh</h1>
      </header>
    );
  }
}


export default App;
