'use strict';

import React from 'react';
import Input from './input';
import List from './list';
import Item from './item';

class Filter extends React.Component {

  render() {
    return (
      <div>Hello</div>
    );
  }
}

const ReactFilter = Filter;
const ReactFilterInput = Input;
const ReactFilterList = List;
const ReactFilterItem = Item;

export {
  Filter,
  Input,
  List,
  Item,
  ReactFilter,
  ReactFilterInput,
  ReactFilterList,
  ReactFilterItem
};
