// eslint-disable-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GridItem from '../../components/Grid/GridItem/GridItem';
import getUsers from '../../api/getUsers';
import getGroups from '../../api/getGroups';
import getGroupImages from '../../importGroupImages';
import man from '../../assets/avatars/svg/man.svg';
import woman from '../../assets/avatars/svg/woman.svg';
import plus from '../../assets/signs/svg/plus.svg';
import minus from '../../assets/signs/svg/minus.svg';
import Divider from '../../components/Divider/Divider';
import strings from '../../LocalizedStrings';
import './Group.css';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: '',
      created: new Date(),
      icon: '',
      description: '',
      images: {},
    };
  }

  componentWillMount() {
    const id = parseInt(this.props.match.params.number, 10);
    if (id === 0) return;
    let group = {};
    let filteredUsers = [];
    getGroups().then(groupsStream => {
      group = groupsStream.groups.filter(g => g.id === id)[0];
      this.setState({
        name: group.name,
        created: group.created,
        icon: group.icon,
        description: group.description,
      });
    });
    getUsers().then(usersStream => {
      const isUser = user => { return group.users.includes(user.id)};
      filteredUsers = usersStream.users.filter(user => { return isUser(user) });
      this.setState({
        users: filteredUsers
      });
    });

    this.setState({
      images: getGroupImages()
    });
  }

  componentDidUpdate() {
    document.getElementById('plus').style.backgroundImage = `url(${plus})`;
    let minusButtons = document.getElementsByClassName('user__minus');
    Array.from(minusButtons).map((button) => {
      return button.style.backgroundImage = `url(${minus})`;
    });
  }

  handleDeleteButton = () => {
    alert(strings.groupSaved);
  };

  handleSaveButton = () => {
    alert(strings.groupSaved);
  };

  handleOnClick = e => {
    let users = this.state.users.filter(user => {
      return user.id.toString() !== e.target.id.toString();
    });
    this.setState({ users });
  };

  handleOnClickPlus = () => {
    alert(strings.addUserThisGroup);
  };

  render() {
    const { users, name, icon, description, created, images } = this.state;
    return (
      <div>
        <h1>{name.toUpperCase()}</h1>
        <div className="group__info">
          <div className="group__info--left">
            <img src={images[icon]} className="group__icon" alt={icon} />
            <button onClick={this.handleDeleteButton}>{strings.deleteButton}</button>
            <button onClick={this.handleSaveButton}>{strings.saveButton}</button>
          </div>
          <div className="group__info--right">
            <input
              type="date"
              value={typeof created === 'object' ? created.toLocaleDateString('en-CA') : created}
              disabled
            />
            <input
              type="text"
              placeholder={strings.descriptionPlaceholder}
              value={description}
              onChange={(e) => this.setState({ description: e.target.value})}
            />
          </div>
        </div>

        <Divider/>
        <div className="users">
          <div className="users__title">
            <h1>{strings.users}</h1>
            <button id="plus" onClick={this.handleOnClickPlus} />
          </div>
          <div className='grid'>
            { users.map(user => {
              return (
                <div
                  className="group__users"
                  key={user.id.toString()}
                >
                  <button
                    id={user.id.toString()}
                    className="user__minus"
                    onClick={this.handleOnClick}
                  />
                  <Link
                    key={user.id.toString()}
                    to={`/user/${user.id}`}
                  >
                    <GridItem
                      icon={user.icon === 'man' ? man : woman}
                      name={user.name}
                    />
                  </Link>
                </div>
              );
            }) }
          </div>
        </div>
      </div>
    );
  }
}

export default Group;