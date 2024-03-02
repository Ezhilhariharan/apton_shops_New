import React, { useState } from 'react';
import '../styles/Campaign.css';

import { Outlet, useNavigate } from 'react-router-dom';

import { campaignLeftList } from '../../../constant/app/campaign/campaign';

import TabView from '../../../components/commonComponents/TabView/TabView';
import LeftList from '../../../components/commonComponents/leftListLayout/Index';

import { useAspDispatch, useAspSelector } from '../../../test/jest-redux-hooks';
import { updateSelectedCampaignFilter } from '../../../reduxToolkit/CampaignSlice';

function Campaign({ children }) {
  const [pageNavigate, setPageNavigate] = useState('Ongoing');

  const navigate = useNavigate();

  const dispatch = useAspDispatch();

  const campaignFilter = (item) => {
    setPageNavigate(item?.name);
    navigate('/user/campaign');
    dispatch(updateSelectedCampaignFilter(item?.name));
  };

  return (
    <div className='flex-row campaignWrapper'>
      <LeftList
        list={campaignLeftList}
        activeNav={pageNavigate}
        onSelect={(item) => campaignFilter(item)}
      />
      <div className='campaign-rightLayout'>
        <TabView />
        <Outlet />
        {children}
      </div>
    </div>
  );
}

export default Campaign;
