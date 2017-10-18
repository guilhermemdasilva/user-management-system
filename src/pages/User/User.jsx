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
import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      name: '',
      birthday: new Date(),
      email: '',
      icon: '',
      login: '',
      password: '',
      images: {},
    };
  }

  componentWillMount() {
    const id = parseInt(this.props.match.params.number, 10);
    if (id === 0) return;
    let user = {};
    let filteredGroups = [];
    getUsers().then(usersStream => {
      user = usersStream.users.filter(u => u.id === id)[0];
      this.setState({
        name: user.name,
        birthday: user.birthday,
        email: user.email,
        icon: user.icon,
        login: user.login,
        password: user.password,
      });
    });
    getGroups().then(groupsStream => {
      const isGroup = group => { return user.groups.includes(group.id)};
      filteredGroups = groupsStream.groups.filter(group => { return isGroup(group) });
      this.setState({
        groups: filteredGroups
      });
    });

    this.setState({
      images: getGroupImages()
    });
  }

  componentDidUpdate() {
    document.getElementById('plus').style.backgroundImage = `url(${plus})`;
    let minusButtons = document.getElementsByClassName('group__minus');
      Array.from(minusButtons).map((button) => {
        return button.style.backgroundImage = `url(${minus})`;
    });
  }

  handleDeleteButton = () => {
    alert(strings.userDeleted);
  };

  handleSaveButton = () => {
    alert(strings.userSaved);
  };

  handleOnClick = e => {
    let groups = this.state.groups.filter(group => {
      return group.id.toString() !== e.target.id.toString();
    });
    this.setState({ groups });
  };

  handleOnClickPlus = () => {
    alert(strings.addUserAnotherGroup);
  };

  render() {
    const { groups, name, email, login, password, birthday } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <div className="user__info">
          <div className="user__info--left">
            <img src={this.state.icon === 'man' ? man : woman} className="user__icon" alt={this.state.icon} />
            <button onClick={this.handleDeleteButton}>{strings.deleteButton}</button>
            <button onClick={this.handleSaveButton}>{strings.saveButton}</button>
          </div>
          <div className="user__info--right">
            <input
              type="date"
              placeholder={strings.birthdayPlaceholder}
              value={typeof birthday === 'object' ? birthday.toLocaleDateString('en-CA') : birthday}
              onChange={(e) => this.setState({ birthday: e.target.value})}
            />
            <input
              type="email"
              placeholder={strings.emailPlaceholder}
              value={email}
              onChange={(e) => this.setState({ email: e.target.value})}
            />
            <input
              type="text"
              placeholder={strings.loginPlaceholder}
              value={login}
              onChange={(e) => this.setState({ login: e.target.value})}
            />
            <input
              type="password"
              placeholder={strings.passwordPlaceholder}
              value={password}
              onChange={(e) => this.setState({ password: e.target.value})}
            />
          </div>
        </div>

        <Divider/>
        <div className="groups">
          <div className="groups__title">
            <h1>{strings.groups}</h1>
            <button id="plus" onClick={this.handleOnClickPlus} />
          </div>
          <div className='grid'>
            { groups.map(group => {
              return (
                <div
                  className="user__groups"
                  key={group.id.toString()}
                >
                  <button
                    id={group.id.toString()}
                    className="group__minus"
                    onClick={this.handleOnClick}
                  />
                  <Link
                    key={group.id.toString()}
                    to={`/group/${group.id}`}
                  >
                    <GridItem
                      icon={this.state.images[group.icon]}
                      name={group.name}
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

export default User;