import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HorImg from './assets/dish-horizontal.jpg';
import NavigationBar from './components/NavigationBar.js';
import HorizontalContainer from './components/HorizontalContainer'
//import Header from './components/Header'

class App extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div><img src={HorImg} width="1000px" height="inherit" alt="dish horizontal" />
        </div>
        <HorizontalContainer/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
