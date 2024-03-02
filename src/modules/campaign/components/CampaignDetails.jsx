import React, { useState } from 'react';
import '../styles/CampaignOverView.css';

import OverViewStatus from '../../../assets/customSVG/OverViewStatus';
import OverViewDuration from '../../../assets/customSVG/OverViewDuration';
import OverViewCreated from '../../../assets/customSVG/OverViewCreated';
import OverViewAssignee from '../../../assets/customSVG/OverViewAssignee';
import OverViewChannel from '../../../assets/customSVG/OverViewChannel';
import OverViewTag from '../../../assets/customSVG/OverViewTag';
import OverViewTotal from '../../../assets/customSVG/OverViewTotal';
import OverViewBalance from '../../../assets/customSVG/OverViewBalance';
import OverViewSpent from '../../../assets/customSVG/OverViewSpent';
import OverViewAllTags from '../../../assets/customSVG/OverViewAllTags';
import OverViewPending from '../../../assets/customSVG/OverViewPending';
import OverViewCompleted from '../../../assets/customSVG/OverViewCompleted';

import { Popover } from 'antd';

import { campaignDetails } from '../../../constant/app/campaign/campaignExtended';
import { Input } from '../../../components/form/Input/Input';
import { ICONS } from '../../../assets/icons';
import { Button } from '../../../components/form/Button/Button';
import Index from '../../../components/commonComponents/assignee/Index';
import ChannelList from '../../../components/commonComponents/channels/ChannelList';
import Tags from '../../../components/commonComponents/tags/Index';

const popoverProp = {
  // width: '20px',
  height: '35px',
};

const CampaignDetails = () => {
  const itemsPerCard = 3;

  // const [selectedCampaignTypes, setSelectedCampaignTypes] = useState([]);
  const [popOver, setPopOver] = useState(false);

  const handleClick = () => {
    setPopOver(!popOver);
  };

  return (
    <div className='campaignDetails-wrapper flex-row'>
      <div className='campaignDetails-wrap flex-row align-center space-between'>
        {campaignDetails?.map(
          (item, id) =>
            id % itemsPerCard === 0 && (
              <div
                key={item?.id}
                className='campaignDetails-wrap-card1 flex-column space-between'>
                {campaignDetails?.slice(id, id + itemsPerCard)?.map((subItem) => (
                  <div
                    key={subItem?.id}
                    className='campaignDetails-wrap-card1-details flex-row align-center space-between'>
                    <div className='campaignDetails-wrap-details flex-row align-center'>
                      {subItem?.icon === 'OverViewStatus' && (
                        <OverViewStatus
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewDuration' && (
                        <OverViewDuration
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewCreated' && (
                        <OverViewCreated
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewAssignee' && (
                        <OverViewAssignee
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewChannel' && (
                        <OverViewChannel
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewTag' && (
                        <OverViewTag
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewTotal' && (
                        <OverViewTotal
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewBalance' && (
                        <OverViewBalance
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewSpent' && (
                        <OverViewSpent
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewAllTags' && (
                        <OverViewAllTags
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewPending' && (
                        <OverViewPending
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      {subItem?.icon === 'OverViewCompleted' && (
                        <OverViewCompleted
                          fill='var(--fontRed)'
                          color='var(--lightRed)'
                        />
                      )}
                      <span>{subItem?.title}</span>
                    </div>
                    <div className='campaignDetails-wrap-details-2 pointer flex-row align-center space-between'>
                      <span
                        className={`specialPerformance specialPerformance-${subItem?.id} ${
                          subItem?.className ? subItem?.className.join(' ') : ''
                        }`}>
                        {subItem?.content}
                        {subItem?.id === 4 && (
                          <Index
                            width='25px'
                            height='25px'
                            className='anotherClassName'
                          />
                        )}
                        {subItem?.id === 5 && (
                          <ChannelList
                            width='25px'
                            height='25px'
                            className='anotherClassName'
                          />
                        )}
                        {subItem?.id === 6 && (
                          <Tags
                            width='25px'
                            height='25px'
                            // className='anotherClassName'
                          />
                        )}
                      </span>
                      <span>
                        {subItem?.icon1 && (
                          <img
                            src={subItem?.icon1}
                            alt='budget'
                            onClick={handleClick}
                            className='subitem-image2'
                          />
                        )}
                      </span>
                      {subItem?.icon1 && (
                        <Popover
                          content={
                            <div className='popover-input'>
                              <Input
                                iconPrefix={ICONS.Budget}
                                rightDropDown
                                onClick={handleClick}
                                style={popoverProp}
                              />
                              <div className='popover-button flex-row flex-end'>
                                <Button
                                  label={'update'}
                                  size={'xm'}
                                />
                              </div>
                            </div>
                          }
                          title='Budget'
                          placement='bottom'
                          open={popOver}
                          overlayClassName='campaign-popover'></Popover>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default CampaignDetails;
