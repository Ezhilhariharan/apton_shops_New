import React from 'react';

import { Latestnews } from '../../../constant/app/home/home';

const LatestNews = () => {
  const handleTabClick = () => {
    window?.open('https://www.aptonshops.com/', '_blank');
  };

  return (
    <div onClick={() => handleTabClick()}>
      <span className='latest-news-main-title'>Latest news and articles</span>
      <div className='latest-news-main-container flex-row'>
        {Latestnews?.map((item) => (
          <div className='latest-news-container'>
            <img
              src={item?.icon}
              alt='Latestnews'
            />
            <div className='latest-news-span flex-column'>
              <span className='latest-news-title'>{item?.title}</span>
              <span className='latest-news-content'>{item?.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
