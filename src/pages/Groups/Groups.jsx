// eslint-disable-line
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GridItem from '../../components/Grid/GridItem/GridItem';
import strings from '../../LocalizedStrings';
import getGroups from '../../api/getGroups';
import getGroupImages from '../../importGroupImages';
import addGroup from '../../assets/users/svg/001-group-1.svg';
import './Groups.css';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      images: {},
      query: '',
    };
  }

  componentWillMount() {
    getGroups().then(groupsStream => {
      this.setState({ groups: groupsStream.groups });
    });

    this.setState({
      images: getGroupImages()
    });
  }

  searchQuery = (query) => {
    this.setState({ query:query.target.value });
  };

  render() {
    let { groups, query } = this.state;
    let filteredGroups = groups.filter(group => {
      return group.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
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
            to={'/group/0'}
          >
            <GridItem
              key={'0'}
              icon={addGroup}
              name={strings.newGroup}
            />
          </Link>
          { filteredGroups.map(group => {
            return (
              <Link
                key={group.id.toString()}
                to={`/group/${group.id}`}
              >
                <GridItem
                  icon={this.state.images[group.icon]}
                  name={group.name}
                />
              </Link>
            );
          }) }
        </div>
      </div>

    );
  }
}

export default Groups;