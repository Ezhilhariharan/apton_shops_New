import React, { useState } from 'react';
import '../styles/inbox.css';

import { templatePopover } from '../../../constant/app/inbox/Inbox';
import { inboxVariables } from '../../../constant/app/inbox/Inbox';
import { ICONS } from '../../../assets/icons';

import ModalHeader from '../../../components/commonComponents/modal/header';
import ListViewSearch from '../../../components/commonComponents/ListViewHeader/ListViewSearch';
import { Button } from '../../../components/form/Button/Button';
import TemplatePreview from './TemplatePreview';
import Variables from './Variables';

const TemplatePopover = ({ handleCancel }) => {
  const [openVariables, setOpenVariables] = useState(false);
  const [activeTab, setActiveTab] = useState('marketing');
  const [selectedTemplate, setSelectedTemplate] = useState({});

  const handleClick = () => {
    setOpenVariables((prevOpenVariables) => !prevOpenVariables);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (item) => {
    setSelectedTemplate(item);
  };

  const cancelMODAL = () => {
    handleCancel();
    setSelectedTemplate({});
  };

  return (
    <div className='TemplatePopover-main-container flex-column space-between'>
      <ModalHeader
        handleCancel={cancelMODAL}
        title='Choose Template'
      />
      <div className='TemplatePopover-container flex-row space-between'>
        {openVariables ? (
          <div>
            <div className='variables-container flex-row align-center pointer'>
              <img
                src={ICONS?.arrowRightVariables}
                alt='RightArrow'
                onClick={handleClick}
              />
              <span>exclusive_dinner_deal</span>
            </div>
            <Variables inboxVariables={inboxVariables} />
          </div>
        ) : (
          <div className='TemplatePopover-left'>
            <div className='marketing-utility flex-row space-between pointer'>
              <span
                className={activeTab === 'marketing' ? 'marketing-active' : ''}
                onClick={() => handleTabClick('marketing')}>
                Marketing
              </span>
              <span className='marketing-utility-line'></span>
              <span
                className={activeTab === 'utility' ? 'marketing-active' : ''}
                onClick={() => handleTabClick('utility')}>
                Utility
              </span>
            </div>
            <div className='list-view-search'>
              <ListViewSearch />
            </div>

            <div className='template-card-main-container'>
              {templatePopover
                // ?.filter((item) => item?.name?.toLowerCase()?.includes(inputValue?.toLowerCase()))
                ?.map((item) => (
                  <div
                    key={item?.id}
                    className='template-card-container flex-row  align-center space-between mt-10'
                    onClick={() => handleCardClick(item)}>
                    <div className='flex-column'>
                      <div className='flex-row align-center'>
                        <span className='template-name'>{item?.name}</span>
                        <span className='template-language pl-5'>{item?.language}</span>
                      </div>
                      <span className='template-active'>{item?.active}</span>
                    </div>
                    <Button
                      label={'Use'}
                      size={'small'}
                      onClick={handleClick}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className='TemplatePopover-right flex-column'>
          {selectedTemplate && <TemplatePreview selectedTemplate={selectedTemplate} />}
        </div>
      </div>
      {openVariables && (
        <div className='template-footer flex-row align-center flex-end mt-10'>
          {/* <span>Cancel</span> */}
          <Button
            label={'Send'}
            size={'medium'}
          />
        </div>
      )}
    </div>
  );
};

export default TemplatePopover;
