// eslint-disable-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import strings from '../../LocalizedStrings';
import users from '../../assets/users/svg/002-user-23.svg';
import groups from '../../assets/users/svg/001-group-1.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/users'><img src={users} alt={strings.users} />{ strings.users }</Link></li>
          <li><Link to='/groups'><img src={groups} alt={strings.groups} />{ strings.groups }</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Home;
