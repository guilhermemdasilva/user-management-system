// eslint-disable-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

class GridItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
  };
  static defaultProps = {
    icon: '',
    name: '',
  };
  render() {
    const { icon, name } = this.props;
    return (
      <div className='gridItem'>
        <img src={icon} className='gridItem__icon' alt={icon} />
        <div className='gridItem__name'>{ name }</div>
      </div>
    );
  }
}

export default GridItem;