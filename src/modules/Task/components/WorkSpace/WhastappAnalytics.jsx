import React from 'react';
import '../../styles/WorkSpace/SocialMedia.css';

import Tooltip from '../../../../components/commonComponents/tooltip/Tooltip';

import {
  WhatsappAnalyticsList,
  workSpaceRight,
  workSpaceRightAnalytics,
  workSpaceRightInteraction,
} from '../../../../constant/app/workSpace/WorkSpace';
import { ICONS } from '../../../../assets/icons';

import { useParams, useNavigate } from 'react-router-dom';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';

const WhatsappAnalytics = () => {
  let { campaignId, taskId } = useParams();
  const navigate = useNavigate();

  const { savedTaskId } = useAspSelector((state) => state.Campaign);

  return (
    <div className='analytics-main-container'>
      <div className='analytic-main-header flex-row p-10'>
        <img
          src={ICONS?.Performance}
          alt='Performance'
        />
        <span className='analytic-header pl-5'>Analytics</span>
      </div>
      <div className='analytics-main-heading'>
        <div className='flex-row space-between w-100 mt-5'>
          <span className='analytics-heading '>Broadcast Insights</span>

          <span
            className={`analytics flex-row ${
              JSON.parse(taskId) || JSON.parse(savedTaskId) ? 'pointer' : 'noDrop'
            } `}
            onClick={() =>
              (JSON.parse(taskId) || JSON.parse(savedTaskId)) &&
              navigate(`/user/channels/whatsapp/broadcast/${taskId}`)
            }>
            <img
              src={ICONS?.AnalyticsBarChatIcon}
              alt='char'
              className='mr-5'
            />
            View Prospects
          </span>
        </div>
        {/* <div className='analytics-container flex-row align-center '></div> */}
        <div className='workSpaceRightAnalytics-container'>
          {WhatsappAnalyticsList?.map((item) => (
            <div
              key={item?.id}
              className='workSpaceRightAnalytics-wrapper flex-column align-center'>
              <img
                src={item?.icon}
                alt='analytics'
              />

              <div className='workSpaceRightAnalytics-middle flex-row align-center justify-center'>
                <span className='workSpaceRightAnalytics align-center flex-row'>{item?.value}</span>
              </div>
              <span>{item?.analyticName}</span>
            </div>
          ))}
        </div>
        <div className='interaction-main-container flex-column align-center'></div>
      </div>
    </div>
  );
};
export default WhatsappAnalytics;
