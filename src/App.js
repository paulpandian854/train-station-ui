import './App.css';
import React from 'react';
import LoginComponent from "./Components/LoginComponent";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginComponent />
      </div>
    );
  }
}
