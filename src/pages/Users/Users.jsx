// eslint-disable-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GridItem from '../../components/Grid/GridItem/GridItem';
import strings from '../../LocalizedStrings';
import getUsers from '../../api/getUsers';
import man from '../../assets/avatars/svg/man.svg';
import woman from '../../assets/avatars/svg/woman.svg';
import addUser from '../../assets/users/svg/050-add-user.svg';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      query: '',
    };
    this.searchQuery = this.searchQuery.bind(this);
  }

  componentWillMount() {
    getUsers().then(usersStream => {
      this.setState({ users: usersStream.users });
    });
  }

  searchQuery = (query) => {
    this.setState({ query: query.target.value });
  };

  render() {
    let { users, query } = this.state;
    let filteredUsers = users.filter(user => {
      return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    return (
      <div>
        <input
          className="search"
          type="text"
          value={this.state.query}
          onChange={this.searchQuery}
          name="search"
          placeholder={strings.searchPlaceholder}
        />
        <div className='grid'>
          <Link
            key={'0'}
            to={'/user/0'}
          >
            <GridItem
              key={'0'}
              icon={addUser}
              name={strings.newUser}
            />
          </Link>
          { filteredUsers.map(user => {
            return (
              <Link
                key={user.id.toString()}
                to={`/user/${user.id}`}
              >
                <GridItem
                  icon={user.icon === 'man' ? man : woman}
                  name={user.name}
                />
              </Link>
            );
          }) }
        </div>
      </div>
    );
  }
}

export default Users;