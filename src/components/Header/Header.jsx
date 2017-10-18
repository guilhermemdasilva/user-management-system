// eslint-disable-line
import React, { Component } from 'react';
import strings from '../../LocalizedStrings';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">{strings.headerTitle}</h1>
      </header>
    );
  }
}

export default Header;
