// eslint-disable-line
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Users from '../../pages/Users/Users';
import Groups from '../../pages/Groups/Groups';
import User from '../../pages/User/User';
import Group from '../../pages/Group/Group';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/groups' component={Groups} />
          <Route path='/user/:number' component={User} />
          <Route path='/group/:number' component={Group} />
        </Switch>
      </main>
    );
  }
}

export default Main;