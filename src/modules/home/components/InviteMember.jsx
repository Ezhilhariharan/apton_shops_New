import React, { useState } from 'react';
import '../styles/Brand.css';

import { BrandInviteList, BrandStatus } from '../../../constant/app/Brand/brand';

import BrandMember from './BrandMember';

import { ICONS } from '../../../assets/icons';

import Avatar from '../../../components/commonComponents/avatar/Avatar';

const BrandStyle = {
  width: `calc(100% / 4)`,
};
const InviteMember = () => {
  const [clickedBorders, setClickedBorders] = useState([]);

  const handleClick = (id) => {
    setClickedBorders((prev) => {
      const newClickedBorders = [...prev];
      newClickedBorders[id] = !newClickedBorders[id];
      return newClickedBorders;
    });
  };

  return (
    <div className='Invite-container'>
      <div className='flex-row'>
        <p>Invited members</p>
      </div>
      <div className=' Billing-history-wrapper flex-column '>
        <div className=' billing-title flex-row '>
          <div
            className='Brand-Name '
            style={{ width: '40%' }}>
            <span>Name</span>
          </div>
          <div
            className='flex-row '
            style={{
              width: '60% ',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            <p style={BrandStyle}>Created</p>
            <p style={BrandStyle}>Role</p>
            <p style={BrandStyle}>Last Active</p>
            <p style={BrandStyle}>Status</p>
          </div>
        </div>
        <div className='Brand-Invite'>
          {BrandInviteList?.map((item, id) => (
            <div
              className={`Billing-Invite flex-row align-center h-100 ${
                item?.Role === 'Owner' ? 'member' : ''
              }`}>
              <div
                className='Brand-Detail flex-row align-center '
                style={{ width: '40%' }}>
                {item?.role ? (
                  <Avatar
                    key={item?.id}
                    name={item?.role}
                    style={{
                      backgroundColor: item?.color,
                      color: 'white',
                    }}
                  />
                ) : (
                  <Avatar
                    img
                    src={item?.img}
                  />
                )}

                <div
                  className='flex-column'
                  style={{ paddingLeft: '10px' }}>
                  <div className='flex-row align-center'>
                    <p>{item?.name}</p>
                    <div
                      className=''
                      style={{ paddingLeft: '10px' }}>
                      {/* {item?.status === 'Inactive' && (
                        <img
                          src={ICONS?.campaignDelete}
                          alt='delete'
                        />
                      )} */}
                    </div>
                    {(item?.name === 'Vishal Kale' || item?.name === 'Devika Kaur') && (
                      <>
                        <img
                          src={ICONS?.campaignDelete}
                          alt='delete'
                        />
                        <img
                          src={ICONS?.BrandInviteShareIcon}
                          alt='share'
                        />
                        <img
                          src={ICONS?.cancelX}
                          alt=''
                        />
                      </>
                    )}
                    {(item?.status == 'Active' || item?.status === 'Inactive') && (
                      <>
                        <img
                          src={ICONS?.campaignDelete}
                          alt='delete'
                        />
                      </>
                    )}
                  </div>
                  <div className='Email flex-row'>
                    <p style={{ paddingRight: '15px' }}>{item?.Email}</p>
                    <p
                      className='Brand-status flex-row justify-content align-center'
                      style={{
                        backgroundColor: BrandStatus[item.status],
                        color: item?.statusColor,
                      }}>
                      {item?.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className='Brand-RightDetail flex-row align-center h-100 '>
                <p style={BrandStyle}>{item?.Created}</p>

                <p style={BrandStyle}>
                  <BrandMember
                    MemberRole={item?.Role}
                    open
                  />
                </p>

                <p style={BrandStyle}>{item?.Time}</p>

                <div
                  className='Switch pointer'
                  onClick={() =>
                    item?.status !== 'Pending' && item?.status !== 'Active' && handleClick(id)
                  }
                  style={{
                    backgroundColor: clickedBorders[id] ? '#25C277' : '#D1D3D8',
                  }}>
                  <div
                    style={{
                      position: 'absolute',
                      width: '15px',
                      height: '15px',
                      border: '1px solid var(--white)',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      left: clickedBorders[id] ? '12px' : '1px',
                      top: '2px',
                    }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InviteMember;
