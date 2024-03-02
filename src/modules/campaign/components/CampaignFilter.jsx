import React from 'react';
import '../styles/Campaign.css';

import { useState } from 'react';

import { ICONS } from '../../../assets/icons/index';

import CampaignForm from './CampaignForm';
import { Form } from 'antd';
import { Button } from '../../../components/form/Button/Button';

function CampaignFilter({ setOpenFilter, setShowFilter }) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const [form] = Form.useForm();

  const clickLog = () => {
    setIsDrawerVisible(false);
  };

  const handleClearAllFilters = () => {
    form.resetFields();
  };

  const apply = () => {
    setOpenFilter(false);
    setShowFilter(true);
  };

  return (
    <>
      {isDrawerVisible && (
        <div className='filter-wrapper '>
          <span className='filter-wrap flex-row align-center space-between'>
            <span>Filters</span>
            {/* <img
              src={ICONS?.popupX}
              alt='chevronCampaignExit'
              onClick={clickLog}
            /> */}
          </span>
          <Form
            autoComplete='off'
            form={form}>
            <CampaignForm />
            <div className='campaign-filter-footer flex-row align-center flex-end pointer'>
              <span onClick={handleClearAllFilters}>Clear Filter</span>

              <Button
                size={'small'}
                label={'Apply'}
                onClick={() => apply()}
              />
            </div>
          </Form>
        </div>
      )}
    </>
  );
}

export default CampaignFilter;
