import React, { useState } from 'react';

import { campaignTypes } from '../../../constant/app/campaign/campaign';
import Awareness from '../../../assets/customSVG/Awarness';
import Engagement from '../../../assets/customSVG/Engagement';
import Leads from '../../../assets/customSVG/Leads';
import Sales from '../../../assets/customSVG/Sales';
import Traffic from '../../../assets/customSVG/Traffic';
import OfflineStatus from '../../../assets/customSVG/OfflineStatus';

import RadioButton from '../../../components/form/radio/RadioButton';

function SelectCampaignType({ selectedCampaignType, onSelectCampaignType, campaignTypeError }) {
  const handleCampaignTypeClick = (item) => {
    if (selectedCampaignType && selectedCampaignType === item?.name) {
      onSelectCampaignType('c_type', null);
    } else {
      onSelectCampaignType('c_type', item?.name);
    }
  };

  return (
    <>
      <div className='createCampaignLabel'>Select Campaign Type</div>
      <div className='flex-column'>
        <div className='flex-row space-between w-100'>
          {campaignTypes?.map((item) => {
            return (
              <div
                className='campaignTypes flex-row align-center'
                key={item?.id}
                onClick={() => handleCampaignTypeClick(item)}>
                {item?.name === 'Awareness' && (
                  <Awareness
                    fill={selectedCampaignType === item?.name ? 'var(--primary)' : 'var(--BG-600)'}
                    bg={
                      selectedCampaignType === item?.name
                        ? 'var(--primaryBackground)'
                        : 'var(--BG-50)'
                    }
                  />
                )}
                {item?.name === 'Engagement' && (
                  <Engagement
                    fill={selectedCampaignType === item?.name ? 'var(--primary)' : 'var(--BG-600)'}
                    bg={
                      selectedCampaignType === item?.name ? 'var(--primaryBackground)' : '#F0F1F2'
                    }
                  />
                )}
                {item?.name === 'Leads' && (
                  <Leads
                    fill={selectedCampaignType === item?.name ? 'var(--primary)' : 'var(--BG-600)'}
                    bg={
                      selectedCampaignType === item?.name ? 'var(--primaryBackground)' : '#F0F1F2'
                    }
                  />
                )}
                {item?.name === 'Sales' && (
                  <Sales
                    fill={selectedCampaignType === item?.name ? 'var(--primary)' : 'var(--BG-600)'}
                    bg={
                      selectedCampaignType === item?.name ? 'var(--primaryBackground)' : '#F0F1F2'
                    }
                  />
                )}
                {item?.name === 'Traffic' && (
                  <Traffic
                    fill={selectedCampaignType === item?.name ? 'var(--primary)' : 'var(--BG-600)'}
                    bg={
                      selectedCampaignType === item?.name ? 'var(--primaryBackground)' : '#F0F1F2'
                    }
                  />
                )}
                {item?.name === 'Offline' && (
                  <OfflineStatus
                    fill={selectedCampaignType === item?.name ? 'var(--primary)' : 'var(--BG-600)'}
                    bg={
                      selectedCampaignType === item?.name ? 'var(--primaryBackground)' : '#F0F1F2'
                    }
                  />
                )}
                <div className='typesText'>{item?.name} </div>
                {selectedCampaignType === item?.name && (
                  <div className='radioButton'>
                    <RadioButton selected={true} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className='explain-error'>{campaignTypeError}</div>
      </div>
    </>
  );
}

export default SelectCampaignType;
