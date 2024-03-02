import React from 'react';
import './navProfileBox.css';

import storage from 'redux-persist/lib/storage';

import { useNavigate } from 'react-router-dom';

import Avatar from '../avatar/Avatar';

import { profileBoxList } from '../../../constant/app/appLayout';

import { Logout } from '../../../api/Api';

function NavProfileBox() {
  const navigate = useNavigate();

  const loggingOut = (item) => {
    if (item?.name === 'Logout') {
      Logout(navigate).then((res) => {
        if (res?.status === 200) {
          navigate('/login');
          localStorage.removeItem('authToken');
          storage.removeItem('persist:root');
        } else {
          console.warn('error', res);
        }
      });
    }
  };

  return (
    <div className='profileBox'>
      <div className='flex-row '>
        <Avatar
          name='Ak'
          style={{ height: '38px', width: '38px' }}
        />
        <div>
          <div className='profileName'>Abinesh Krishnan</div>
          <div className='profileEmail'>Abinesh@gochewgrill.com</div>
        </div>
      </div>
      {profileBoxList?.map((item) => (
        <div
          className='flex-row list'
          onClick={() => loggingOut(item)}>
          <img
            src={item?.icon}
            alt={item?.name}
            className=''
          />
          <span>{item?.name}</span>
        </div>
      ))}
    </div>
  );
}

export default NavProfileBox;
