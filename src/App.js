import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Button from './components/Button/button_component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <ul className="NavBar-ul">
            <li className="NavBar-li"><a class="active" href="/">Home</a></li>
            <li className="NavBar-li"><a href="/news">News</a></li>
            <li className="NavBar-li"><a href="/contact">Contact</a></li>
            <li className="NavBar-li"><a href="/about">About</a></li>
          </ul>
        </div>
        <header>
          <h1>Home</h1>
        </header>
      </div>
    );
  }
}

export default App