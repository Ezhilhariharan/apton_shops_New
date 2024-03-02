import React from 'react';
import '../styles/okr.css';
import { OKRList } from '../../../constant/app/okr/okr';
import ListViewSearch from '../../../components/commonComponents/ListViewHeader/ListViewSearch';
import LeftList from '../../../components/commonComponents/leftListLayout/Index';
import GoalList from '../../OKR/components/GoalList';

function index() {
  return (
    <div className='flex-row OKR-Wrapper'>
      <LeftList list={OKRList} />
      <div className='Search-container'>
        <div className='OKR-search'>
          <ListViewSearch />
        </div>
        <div>
          <GoalList />
        </div>
      </div>
    </div>
  );
}

export default index;
