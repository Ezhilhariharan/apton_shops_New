import '../styles/CampaignOverView.css';

import { useState, useRef, useEffect } from 'react';

import { ICONS } from '../../../assets/icons';

import { Popover } from 'antd';

import { useParams } from 'react-router-dom';

import { campaignHeader } from '../../../constant/app/campaign/campaignExtended';
import { OverViewActionButton } from '../../../constant/app/campaign/campaignExtended';
import PencilIcon from '../../../assets/customSVG/Pencil';
import { convertingDateAndTime } from '../../../helper/convertingDate';
import { Button } from '../../../components/form/Button/Button';
import DropDown from '../../../components/commonComponents/DropDown/DropDown';

import { useAspDispatch, useAspSelector } from '../../../test/jest-redux-hooks';

import moment from 'moment';

const CampaignHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [campaignValue, setCampaignValue] = useState('Diwali Campaign Sale');
  const [action, setAction] = useState(false);
  const [campaignStatus, setCampaignStatus] = useState('Pause');
  const [campaignDetails, setCampaignDetails] = useState({});

  const inputRef = useRef(null);

  const { activeTab, tabList } = useAspSelector((state) => state.Campaign);

  useEffect(() => {
    const list = tabList?.filter((item) => item?.tabName === 'campaignName');
    if (list?.length > 0) {
      setCampaignValue(list[0]?.allData?.name);
      setCampaignDetails(list[0]?.allData);
    }
  }, [tabList]);

  let { id } = useParams();

  const handleClick = () => {
    setIsEditing(!isEditing);
    setAction(!action);
  };

  const handleInputChange = (e) => {
    setCampaignValue(e.target.value);
    inputRef.current.style.width = `${e.target.scrollWidth}px`;
  };

  const Action = () => {
    return (
      <div className='OverViewActionButton-dropdown pointer p-absolute mt-10'>
        {OverViewActionButton?.map((item) => (
          <div
            key={item?.id}
            className='dropdown-1'>
            {campaignStatus === 'Pause' && item?.title === 'Pause' ? (
              <DropDown
                iconPrefix={item?.iconPrefix}
                title={item?.title}
                onClick={() => setCampaignStatus('Resume')}
              />
            ) : campaignStatus === 'Resume' && item?.title === 'Resume' ? (
              <DropDown
                iconPrefix={item?.iconPrefix}
                title={item?.title}
                onClick={() => setCampaignStatus('Pause')}
              />
            ) : (
              item?.title === 'Complete' && (
                <DropDown
                  iconPrefix={item?.iconPrefix}
                  title={item?.title}
                />
              )
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='campaignHeader-container flex-row align-center space-between'>
      <div className='campaignHeader-left flex-row'>
        <span
          className='campaignBorderLeft'
          style={{ background: campaignDetails?.color_code }}
        />
        <div className='campaignHeader-wrapper flex-row align-center space-between pl-10'>
          {isEditing ? (
            <span className='campaignHeader-campaign flex-row align-center'>
              <input
                type='text'
                ref={inputRef}
                value={campaignValue}
                maxLength='40'
                className='campaignHeader-input'
                onChange={handleInputChange}
              />
            </span>
          ) : (
            <span className='campaignHeader-campaign'>{campaignValue}</span>
          )}

          <div
            className='pointer'
            onClick={() => handleClick()}>
            {isEditing ? (
              <img
                src={ICONS?.greenTickVerticalSteps}
                alt='confirm'
              />
            ) : (
              <PencilIcon
                color='#25C277'
                width='22'
                height='22'
              />
            )}
          </div>

          {/* <img
            src={ICONS?.pencilCampaign}
            alt='pencil'
            onClick={handleClick}
            className='pointer mr-10'
          /> */}

          <div className='campaignHeader-wrapper flex-row align-center   '>
            <span className='campaignHeader-name '>{campaignDetails?.c_type}</span>
            <span className='campaignHeader-day pl-5'>Last Updated</span>
            <span className='campaignHeader-dateTime pl-5'>
              {moment(convertingDateAndTime(campaignDetails?.updated_at)).format('MMMDD, h:mma')}
            </span>
          </div>
        </div>
      </div>
      <div className='campaignHeader-right p-relative flex-row align-center'>
        <Popover
          content={<Action />}
          trigger='click'
          placement='topRight'>
          <div>
            <Button
              size={'small'}
              label={'Action'}
              iconSuffix={ICONS?.CaretDown}
              useRightImage1Class={true}
              onClick={handleClick}
            />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default CampaignHeader;
