import React, { useState } from 'react';
import '../../styles/WorkSpace/Post.css';

import { facebookMediaPost } from '../../../../constant/app/workSpace/WorkSpace';
import { ICONS } from '../../../../assets/icons';

const Post = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleIconClick = (direction) => {
    const increment = direction === 'next' ? 1 : -1;
    const newStartIndex =
      (startIndex + increment + facebookMediaPost.length) % facebookMediaPost.length;
    setStartIndex(newStartIndex);
  };
  return (
    <div className='posted-image'>
      {facebookMediaPost?.map((item, index) => (
        <React.Fragment key={item?.id}>
          {index === startIndex && (
            <div className='posted-image'>
              {item?.icon && (
                <img
                  src={item?.icon}
                  alt='facebookMediaPost'
                />
              )}
              {item?.video && (
                <iframe
                  src={item?.video}
                  title='YouTube video'
                  frameborder='0'
                  allow='accelerometer; autoplay;'
                  allowFullScreen
                />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
      <div className='prev-next-icon flex-row space-between'>
        <img
          src={ICONS?.carouselLeft}
          alt='WorkSpaceRight'
          className={'prev'}
          onClick={() => handleIconClick('prev')}
        />

        <img
          src={ICONS?.carouselRight}
          alt='WorkSpaceRight'
          className={'next'}
          onClick={() => handleIconClick('next')}
        />
      </div>
    </div>
  );
};

export default Post;
