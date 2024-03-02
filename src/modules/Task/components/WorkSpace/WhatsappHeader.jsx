import React, { useState } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { ICONS } from '../../../../assets/icons/index';
import { images } from '../../../../assets/images/index';

import Verified from '../../../../assets/customSVG/Verified';
import RadioButton from '../../../../components/form/radio/RadioButton';
import { SendPeopleList } from '../../../../constant/app/campaign/campaignExtended';
import { Popover } from 'antd';

const WhatsappHeader = ({ setResponse, response }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState([]);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const WHATSAPP_CSV_URL = 'https://assets.aptonworks.com/assets/templates/sample_customers.xlsx';

  const handleVisibleChange = (visible) => {
    setPopoverVisible(visible);
  };

  const handleItemClick = (dataId) => {
    setSelectedItemId((prevId) => {
      if (prevId.includes(dataId)) {
        return prevId.filter((id) => id !== dataId);
      } else {
        return [...prevId, dataId];
      }
    });
  };

  const SendPeople = ({ SetSendPeopleList }) => {
    return (
      <div className='popover-container flex-row'>
        <div>
          {SetSendPeopleList?.map((data) => (
            <div
              className=' flex-column pointer'
              key={data?.id}
              onClick={() => {
                setSelectedRole(data), setPopoverVisible(false);
              }}>
              <div className=' flex-row space-between'>
                <div className=' flex-row '>
                  <p className='pr-10'>{data?.name} </p>
                  <Verified color='var(--primary)' />
                </div>
                <div
                  className=' '
                  onClick={() => handleItemClick(data?.id)}
                  style={{ padding: '0px 10px', translate: '0px 7px' }}>
                  {selectedItemId?.includes(data?.id) && <RadioButton selected={true} />}
                </div>
              </div>
              <span>{data?.phone_num}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  // fileName;
  return (
    <div className='main-container '>
      <div className=' flex-row align-center  space-between'>
        <div className='heading flex-row align-center '>
          <img
            src={ICONS?.WappContactIcon}
            alt='whatsappContact'
          />
          <p>Add Prospects</p>

          {response?.file_path ? (
            <img
              src={ICONS?.campaignFileDelete}
              alt='downloadIcon'
              className='pointer'
              onClick={() => setResponse({})}
            />
          ) : (
            <a href={WHATSAPP_CSV_URL}>
              <img
                src={ICONS?.TaskDownload}
                alt='downloadIcon'
                className='pointer'
              />
            </a>
          )}
        </div>

        <div className=' flex-row  align-center space-between'>
          <Popover
            content={<SendPeople SetSendPeopleList={SendPeopleList} />}
            trigger='click'
            placement='bottom'
            arrow={false}
            open={popoverVisible}
            onVisibleChange={handleVisibleChange}>
            <div
              className='message-container flex-row align-center space-between 
          '>
              <div className='flex-row align-center justify-center pointer'>
                <img
                  src={images?.whatsappIconImage}
                  alt='whatsappLogo'
                />
                <p>{selectedRole ? `${selectedRole.name}` : 'send Form'}</p>
              </div>
              <img
                src={ICONS?.ToggleIcon}
                alt='dropdown'
              />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default WhatsappHeader;
