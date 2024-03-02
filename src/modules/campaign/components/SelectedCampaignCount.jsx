import React, { useState } from 'react';

import { Modal } from 'antd';

import { Button } from '../../../components/form/Button/Button';
import AlertModal from '../../../components/commonComponents/modal/alert/AlertModal';

const maskStyle = { background: 'rgba(45, 48, 54, 0.25)' };

function SelectedCampaignCount() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => setIsModalVisible(false);

  const handleYes = () => setIsModalVisible(false);

  const handleNo = () => setIsModalVisible(false);

  return (
    <div className='campaignCountWrapper w-100 flex-row align-center space-between'>
      <div className='count'>10 Campaigns selected</div>
      <Button
        label={'Delete'}
        size={'small'}
        onClick={() => setIsModalVisible(true)}
      />
      <Modal
        open={isModalVisible}
        footer={null}
        className={'asp-modal-popup-small'}
        closable={false}
        maskStyle={maskStyle}
        centered={true}
        onCancel={handleCancel}>
        <AlertModal
          handleCancel={handleCancel}
          handleYes={handleYes}
          handleNo={handleNo}
          content='Are you sure delete this selected campaigns ?'
          yesName='Yes, delete'
          noName='No, Keep it'
        />
      </Modal>
    </div>
  );
}

export default SelectedCampaignCount;
