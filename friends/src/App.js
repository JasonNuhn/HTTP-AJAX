import React, { Component } from 'react';
import './App.css';

import FriendsForm from './components/FriendsForm';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsForm />
        <Friends />
      </div>
    );
  }
}

export default App;
