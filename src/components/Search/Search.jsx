// eslint-disable-line
import React, { Component } from 'react';
import strings from '../../LocalizedStrings';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (query) => {
    this.props.onChange(query.target.value);
  };

  render() {
    return (
      <div className="search">
        <input onChange={this.onChange} type="text" name="search" placeholder={strings.searchPlaceholder}/>
      </div>
    );
  }
}

export default Search;