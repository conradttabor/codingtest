import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import UserCard from './userCard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{backgroundColor: 'white', width: '40rem', top: '5rem', margin: 'auto', position: 'relative', paddingTop: '2rem', display: 'flex', flexDirection: 'column'}}>
          {data.map(data => {
            return (
              <UserCard data={data}/>
            )
          })}
          </div>
        </div>
    );
  }
}

export default App;
