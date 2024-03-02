import React, { useState } from 'react';
import '../styles/Brand.css';

import { BrandMemberRoleList } from '../../../constant/app/Brand/brand';

import { Modal, Popover } from 'antd';

import { ICONS } from '../../../assets/icons/index';
import AlertModal from '../../../components/commonComponents/modal/alert/AlertModal';

const maskStyle = { background: 'rgba(45, 48, 54, 0.25)' };

const BrandMember = ({ MemberRole, open }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => setIsModalVisible(false);

  const handleYes = () => setIsModalVisible(false);

  const handleNo = () => setIsModalVisible(false);

  const [selectedRole, setSelectedRole] = useState([]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const BrandMemberRole = ({ SetBrandMemberList }) => {
    return (
      <div
        className='BrandMember-popoverContainer pointer'
        onClick={() => setIsModalVisible(true)}>
        {SetBrandMemberList?.map((data) => (
          <div
            key={data.value}
            style={{
              borderBottom: MemberRole !== 'Member' ? '1px solid var(--font-50)' : 'none',
            }}>
            <p>{data?.value}</p>
            <p>{data?.subtitle}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Popover
        content={
          <BrandMemberRole
            selectedRole={selectedRole}
            onSelectRole={handleRoleSelect}
            SetBrandMemberList={BrandMemberRoleList}
          />
        }
        trigger='click'>
        <div className='Member-container flex-row align-center justify-center space-evenly pointer'>
          <p className='flex-row flex-start '>{MemberRole}</p>

          {MemberRole === 'Owner' ? null : (
            <>
              <img
                src={ICONS?.ChervronDownIcon}
                alt='dropdown'
              />
            </>
          )}
        </div>
      </Popover>

      {open && (
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
            content='Are you sure promote to this member “yourmail@email.com” campaign manager to brand manager?'
            yesName='cancel'
            noName='Yes, promote'
          />
        </Modal>
      )}
    </>
  );
};

export default BrandMember;
