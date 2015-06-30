'use strict';

import React from 'react';

class List extends React.Component {

  render() {
    return (
      <ul className='react-filter-menu'>
        {this.props.children}
      </ul>
    );
  }
}

export default List;
