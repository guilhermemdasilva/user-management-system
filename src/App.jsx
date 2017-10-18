// eslint-disable-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Divider from './components/Divider/Divider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import strings from './LocalizedStrings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    strings.setLanguage('en');
  }

  render() {
    return (
      <div className="app">
        <Link to="/" style={{ textDecoration: 'none' }}><Header/></Link>
        <Divider/>
        <Main/>
      </div>
    );
  }
}

export default App;
