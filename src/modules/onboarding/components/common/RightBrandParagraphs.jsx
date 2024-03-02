import React from 'react';
import '../../style/Dashboard.css';
import '../../style/DashboardRight.css';

import { dashboardData } from '../../../../constant/app/dashboard/Dashboard';


const RightBrandParagraphs = () => {
  return (
    <div className='RightBrandParagraphs flex-column space-between'>
      {dashboardData?.map((item) => (
        <React.Fragment key={item?.id}>
          <div className='first-para flex-row align-center'>
            <img
              src={item?.image}
              alt='brand'
            />
            <h2>{item?.title}</h2>
          </div>
          <div className='second-para'>
            <p className='right-content'>{item?.content}</p>
            <div className='link flex-row align-center'>
              <h4>{item?.navLink}</h4>
              <img
                src={item?.image1}
                alt='learn more'
              />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RightBrandParagraphs;
