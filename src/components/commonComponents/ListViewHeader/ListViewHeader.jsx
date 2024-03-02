import React from 'react';
import './ListViewHeader.css';

import ListViewSearch from './ListViewSearch';
import FilterActions from './FilterActions';

const ListViewHeader = () => {
  return (
    <div className='list-view-wrapper'>
      <ListViewSearch />
      {/* <FilterActions /> */}
    </div>
  );
};

export default ListViewHeader;
