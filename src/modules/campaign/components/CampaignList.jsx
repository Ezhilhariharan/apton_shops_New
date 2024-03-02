import React, { useEffect } from 'react';
import '../styles/Campaign.css';

import { useNavigate } from 'react-router-dom';

import Table from '../../../components/commonComponents/tables/Table';
import ListViewHeader from '../../../components/commonComponents/ListViewHeader/ListViewHeader';
import SelectedCampaignCount from './SelectedCampaignCount';

import { useAspDispatch, useAspSelector } from '../../../test/jest-redux-hooks';
import { updateTabList, updateActiveTab } from '../../../reduxToolkit/CampaignSlice';

function CampaignList({ handleClick }) {
  const navigate = useNavigate();

  const dispatch = useAspDispatch();
  const { selectedCampaignCount, activeTab, tabList } = useAspSelector((state) => state.Campaign);

  const tableRowClicked = (data) => {
    dispatch(
      updateTabList([
        { id: 1, tabName: 'campaignList' },
        { id: data?.id, tabName: 'campaignName', name: data?.name, allData: data },
        // { id: 3, tabName: 'okr' },
      ]),
    );
    navigate(`/user/campaign/overview/${data?.id}`);
    dispatch(updateActiveTab('campaignName'));
  };

  useEffect(() => {
    dispatch(updateActiveTab('campaignList'));
    tabList?.length === 1 && dispatch(updateTabList([{ id: 1, tabName: 'campaignList' }]));
  }, []);

  return (
    <>
      {selectedCampaignCount > 0 ? <SelectedCampaignCount /> : <ListViewHeader />}
      <div className='campaign-list'>
        <Table tableRowClicked={tableRowClicked} />
      </div>
    </>
  );
}

export default CampaignList;
