import React, { useState } from 'react';
import './Index.css';
import '../../../modules/campaign/styles/campaignModal.css';

import { ICONS } from '../../../assets/icons/index';
import { campaignCreate } from '../../../constant/app/campaign/campaign';

import { Modal, Popover } from 'antd';

import { Button } from '../../../components/form/Button/Button';
import CreateCampaign from '../../../modules/campaign/components/CreateCampaign';
import CreateTask from '../../../modules/Task/components/CreateTask';

import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import {
  updateTaskTitle,
  updateActiveTab,
  updateTabList,
} from '../../../reduxToolkit/CampaignSlice';

const maskStyle = { background: 'rgba(45, 48, 54, 0.25)' };

function Index({ showPlusIcon }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [elementToggle, setElementToggle] = useState(false);
  const [selectedModal, setSelectedModal] = useState('');
  const [popoverVisible, setPopoverVisible] = useState(false);

  const { tabList } = useAspSelector((state) => state.Campaign);

  const navigate = useNavigate();
  let { id } = useParams();
  const { pathname } = useLocation();

  const dispatch = useAspDispatch();

  const showModal = (item) => {
    if (item?.name === 'Campaign') {
      setIsModalVisible(true);
      setSelectedModal(item?.name);
    } else if (item?.name === 'Broadcast') {
      dispatch(updateActiveTab('broadCast'));
      dispatch(
        updateTabList([
          ...tabList,
          {
            id: 3,
            tabName: 'broadCast',
            name: `Task ${Math.ceil(Math.random())}`,
            campaignId: id,
          },
        ]),
      );
      dispatch(updateTaskTitle(`Task ${Math.ceil(Math.random())}`));
      navigate(`/user/campaign/overview/whatsapp/${id}/""`);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onlyCreate = () => {
    setSelectedModal('Campaign');
    setIsModalVisible(true);
  };

  const CreatePopup = () => {
    const maxItemsToShow = showPlusIcon ? 2 : 3;
    return (
      <>
        {
          <div className='create-wrapper'>
            {campaignCreate?.slice(0, maxItemsToShow).map((item, id) => (
              <span
                key={id}
                className='create-list flex-row align-center'
                onClick={() => showModal(item)}>
                <img
                  src={item?.icon}
                  alt='create'
                />
                <span>{item?.name}</span>
              </span>
            ))}
          </div>
        }
      </>
    );
  };

  return (
    <>
      {pathname === '/user/campaign' && (
        <Button
          label={'Create'}
          size={'medium'}
          iconPrefix={ICONS.addSquareIcon}
          onClick={() => onlyCreate()}
        />
      )}
      {pathname?.includes('/user/campaign/overview/') &&
        !pathname?.includes('/user/campaign/overview/whatsapp/') && (
          <Popover
            // open={popoverVisible}
            content={<CreatePopup />}
            trigger='click'
            arrow={false}
            className='create-popup'
            placement='topLeft'>
            <div className='w-auto'>
              {showPlusIcon ? (
                <img
                  src={ICONS?.plusOverview}
                  alt='plusOverview'
                />
              ) : (
                <Button
                  label={'Create'}
                  size={'medium'}
                  iconPrefix={ICONS.addSquareIcon}
                />
              )}
            </div>
          </Popover>
        )}

      <Modal
        open={isModalVisible}
        footer={null}
        className={selectedModal === 'Task' ? 'asp-modal-popup-medium ' : 'asp-modal-popup-large'}
        closable={false}
        maskStyle={maskStyle}
        centered={true}
        onCancel={handleCancel}>
        {selectedModal === 'Campaign' && <CreateCampaign handleCancel={handleCancel} />}
        {/* {selectedModal === 'Task' && <CreateTask handleCancel={handleCancel} />}x */}
      </Modal>
    </>
  );
}

export default Index;
