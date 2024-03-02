import React, { useMemo, useState } from 'react';
import '../styles/Brand.css';

import { ICONS } from '../../../assets/icons/index';

import { Form } from 'antd';
import { Button } from '../../../components/form/Button/Button';
import BrandMember from './BrandMember';

import { updateToggleToast } from '../../../reduxToolkit/appSlice';
import { useAspDispatch, useAspSelector } from '../../../test/jest-redux-hooks';

const BrandInvite = () => {
  const [invitedEmail, setInviteEmail] = useState([
    {
      id: 1,
      inputvalue: '',
    },
  ]);
  const [newEmail, setNewEmail] = useState('');
  const dispatch = useAspDispatch();
  const { toggleToast } = useAspSelector((state) => state.app);

  const handleClick = () => {
    dispatch(
      updateToggleToast([
        ...toggleToast,
        {
          id: toggleToast?.length + 1,
          content: invitedEmail ? 'Created Successfully' : 'false',
          status: 'Success',
          duration: '',
        },
      ]),
    );
  };

  const handleAddClick = () => {
    const newInvitedEmail = [
      ...invitedEmail,
      { id: invitedEmail.length + 1, inputvalue: newEmail },
    ];
    setInviteEmail(newInvitedEmail);
    setNewEmail('');
  };

  const handleChanger = (value, item) => {
    setInviteEmail((prev) => {
      const newState = prev?.map((data) => {
        if (data?.id === item?.id) {
          return { ...data, inputvalue: value };
        } else {
          return { ...data };
        }
      });
      return newState;
    });
  };

  const handleDeleteClick = (id) => {
    if (id === 1) {
      return;
    }
    const updatedInvitedEmail = invitedEmail.filter((item) => item.id !== id);
    setInviteEmail(updatedInvitedEmail);
  };

  return (
    <div className='BrandInvite-container '>
      <div className='flex-row'>
        <p>Invite people to Gochew Grill</p>
      </div>

      <div className='BrandInvite-wrapper flex-column space-between'>
        <Form>
          <Form.Item>
            <>
              <div className=' flex-row w-[100%] space-between'>
                <div className='flex-row space-between w-100'>
                  <div className='brand flex-column '>
                    {invitedEmail?.map((item) => (
                      <>
                        <div className=' flex-row'>
                          <div
                            className=' input w-100 flex-row space-around'
                            key={item?.id}
                            style={{
                              border: '1px solid var(--authDivider)',
                              padding: '0px 10px',
                              backgroundColor: '#ffffff',
                              borderRadius: '10px',
                              height: '5vh',
                            }}>
                            <div
                              className=''
                              style={{ padding: '12px 8px' }}>
                              <img src={ICONS?.EmailIcon} />
                            </div>
                            <input
                              className='Brand-input'
                              type='text'
                              value={item?.inputvalue}
                              placeholder={`ex:- yourmail@email.com `}
                              iconPrefix={ICONS?.EmailIcon}
                              onChange={(e) => handleChanger(e.target.value, item)}
                            />
                            <div
                              className=''
                              style={{ margin: 'auto' }}>
                              <BrandMember MemberRole={'Account Manager'} />
                            </div>
                          </div>
                          <div className='Brand-Delete flex-row'>
                            {invitedEmail?.length > 1 && (
                              <img
                                src={ICONS?.campaignDelete}
                                onClick={() => handleDeleteClick(item.id)}
                              />
                            )}
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </>
          </Form.Item>
        </Form>

        <div
          className='brand-button space-between '
          style={{ padding: '10px 10px' }}>
          <button className='flex-row space-between pointer'>
            {invitedEmail?.length < 5 ? (
              <div
                className='flex-row'
                onClick={handleAddClick}>
                <img
                  src={ICONS?.BrandPlusIcon}
                  alt='plus icon'
                />
                Invite new
              </div>
            ) : (
              <div
                div
                className='flex-row'
                style={{ color: 'var(--authDivider)', opacity: '0.6' }}>
                <img
                  src={ICONS?.BrandInviteAddWhiteIcon}
                  alt='plus icon'
                />
                Invite new
              </div>
            )}
            <Button
              label={'Send Invite'}
              size={'medium'}
              onClick={handleClick}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandInvite;
