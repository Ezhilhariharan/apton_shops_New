import React, { useState } from 'react';
import '../styles/Campaign.css';

import {
  filterCampaignName,
  filterCampaignNameEither,
} from '../../../constant/app/campaign/campaign';
import { ICONS } from '../../../assets/icons';

import { Form, Select } from 'antd';

import { Input } from '../../../components/form/Input/Input';

const customInputStyle = {
  borderRadius: '10px',
  padding: '7px 10px',
};

const campaignOptionsMapping = {
  'Campaign Name': ['is', 'contains'],
  'Key Results': ['is', 'contains'],
  Objectives: ['is', 'contains'],
  Milestone: ['is', 'contains'],
  'Start Date': ['is', 'is not'],
  'End Date': ['is', 'is not'],
  Budget: ['is', 'greater than', 'less than'],
  Tag: ['is', 'is not', 'contains', 'does not contain'],
};

const CampaignForm = () => {
  const [filters, setFilters] = useState([
    {
      id: 1,
      selectedCampaignName: null,
      selectedCategoryOption: null,
      inputValue: '',
      isCampaignNameOpen: false,
    },
  ]);

  const handleCampaignNameChange = (value, id) => {
    const updatedFilters = [...filters];
    updatedFilters[id].selectedCampaignName = value;
    updatedFilters[id].selectedCategoryOption = null;
    updatedFilters[id].isCampaignNameOpen = true;
    // updatedFilters[id].id = filters?.length + 1;
    setFilters(updatedFilters);
  };

  const handleCategoryOptionChange = (value, id) => {
    const updatedFilters = [...filters];
    updatedFilters[id].selectedCategoryOption = value;
    setFilters(updatedFilters);
  };

  const handleInputChange = (value, id) => {
    const updatedFilters = [...filters];
    updatedFilters[id].inputValue = value;
    setFilters(updatedFilters);
  };

  const handleAddClick = () => {
    const newFilter = {
      selectedCampaignName: null,
      selectedCategoryOption: null,
      inputValue: '',
      isCampaignNameOpen: true,
      id: filters?.length + 1,
    };
    setFilters([...filters, newFilter]);
  };

  const handleDeleteList = (id) => {
    const filteredList = filters?.filter((item) => item?.id !== id);
    setFilters(filteredList);
  };

  return (
    <div className='form-height-wrap'>
      {filters?.map((filter, id) => (
        <div
          key={id}
          className='filter-wrap flex-row align-center space-between mt-10'>
          <Form.Item
            name={`BrandName_${id}`}
            style={{ width: '25%' }}>
            <Select
              showSearch
              placeholder=''
              onChange={(value) => handleCampaignNameChange(value, id)}
              className='campaign-placeholder'
              filterOption={false}
              dropdownRender={(menu) => (
                <>
                  <div className='filter-drawer-wrap flex-row'>
                    <img
                      src={ICONS?.searchLightIcon}
                      alt='search'
                    />
                    <input
                      type='text'
                      placeholder='search'
                      value={filter?.inputValue}
                      onChange={(e) => handleInputChange(e.target.value, id)}
                    />
                  </div>
                  {menu}
                </>
              )}>
              {filterCampaignName
                ?.filter((item) =>
                  item?.name?.toLowerCase()?.includes(filter?.inputValue?.toLowerCase()),
                )
                ?.map((item) => (
                  <Select.Option
                    key={item?.id}
                    value={item?.name}
                    className={'filter-campaign-name mt-10'}>
                    {item?.name}
                    <hr style={{ marginTop: '10px', border: '.5px solid var(--font-50)' }} />
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          {filter?.isCampaignNameOpen && (
            <Form.Item
              name={`Category_${id}`}
              style={{ width: '24%' }}>
              <Select
                placeholder=''
                value={filter.selectedCategoryOption}
                onChange={(value) => handleCategoryOptionChange(value, id)}>
                {campaignOptionsMapping[filter?.selectedCampaignName]?.map((option) => (
                  <Select.Option
                    key={option}
                    value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
          {filter?.isCampaignNameOpen && (
            <Form.Item
              name={`Brand_${id}`}
              style={{ width: '35%' }}>
              <Input
                type='text'
                placeholder=''
                style={customInputStyle}
                iconSuffix={
                  filter.selectedCampaignName === 'Start Date' ||
                  filter.selectedCampaignName === 'End Date'
                    ? ICONS.CalendarIcon
                    : null
                }
              />
            </Form.Item>
          )}
          {filter?.isCampaignNameOpen && (
            <Form.Item
              name={`CategoryEither_${id}`}
              style={{ width: '10%' }}>
              <Select placeholder=''>
                {filterCampaignNameEither?.map((item) => (
                  <Select.Option
                    key={item?.id}
                    value={item?.name}>
                    <div className=''>
                      <span>{item?.name}</span>
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
          {filter?.isCampaignNameOpen && (
            <img
              src={ICONS?.trashCampaignIcon}
              alt='trashCampaignIcon'
              onClick={() => handleDeleteList(filter?.id)}
            />
          )}
        </div>
      ))}
      <span
        className='add-filter flex-row align-center justify-content pointer'
        onClick={handleAddClick}>
        <img
          src={ICONS?.addPlusIcon}
          alt='addPlusIcon'
        />
        Add Filter
      </span>
    </div>
  );
};

export default CampaignForm;
