import React from 'react';
import '../styles/overview.css';

import { overviewLeftList } from '../../../constant/app/home/home';
import { useNavigate } from 'react-router-dom';

function Overview() {
  const navigate = useNavigate();
  const handleTabClick = (data) => {
    if (data?.id === 1) {
      // navigate('/user/campaign/overview/whatsapp');
      navigate(`/user/campaign/overview/whatsapp/""/""`);
    } else if (data?.id === 2) {
      // navigate('/user/campaign/overview/whatsapp');
      navigate(`/user/campaign/overview/whatsapp/""/""`);
    } else if (data?.id === 3) {
      navigate('/user/calender');
    } else if (data?.id === 4) {
      navigate('/user/channels/facebookpage');
    }
  };
  return (
    <div className='overview-container flex-row space-between '>
      <div className='overview-container-wrapper flex-column '>
        <p>Welcome Back, Abinesh! </p>
        <div className='overview-card flex-column space-between '>
          {overviewLeftList?.map((data) => (
            <div
              key={data?.id}
              onClick={() => handleTabClick(data)}
              className='pointer'>
              <img
                src={data?.icon}
                alt='MessageIcon'
                // width={25}
                // height={25}
                // className={data?.id === 2 && 'shf'}
              />
              <div>
                <span>{data?.name}</span>
                <p>{data?.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
