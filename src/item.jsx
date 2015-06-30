'use strict';

import React from 'react';

class Item extends React.Component {

  render() {
    return (
      <li className='react-filter-item'>
        {this.props.children}
      </li>
    );
  }
}

export default Item;
