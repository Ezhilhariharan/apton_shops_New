import React, { useState } from 'react';
import '../../style/DashboardRight.css';

import { postPerformance } from '../../../../constant/app/dashboard/DashboardExtended';
import { ICONS } from '../../../../assets/icons/index';

import TitleAndDescription from '../../../../components/commonComponents/Title/TitleAndDescription';
import { Card } from '../../../../components/commonComponents/Cards/Card';
import ContentPerformance from './ContentPerformance';
import GoGrow from '../../../../components/commonComponents/GoGrowX/GoGrow';

// this const data will be changed while integrating

const hashtagBadges = [
  {
    id: 1,
    hashtagName: '#food ',
    postReach: '3.5M',
    selected: false,
  },
  {
    id: 2,
    hashtagName: '#foodtravel ',
    postReach: '3km',
    selected: true,
  },
  {
    id: 3,
    hashtagName: '#vlogsoffood ',
    postReach: '35k',
    selected: false,
  },
  {
    id: 4,
    hashtagName: '#living ',
    postReach: '8k',
    selected: false,
  },
  {
    id: 5,
    hashtagName: '#newera ',
    postReach: '1M',
    selected: false,
  },
  {
    id: 6,
    hashtagName: '#india ',
    postReach: '10M',
    selected: false,
  },
  {
    id: 7,
    hashtagName: '#travel',
    postReach: ' 3k',
    selected: false,
  },
  {
    id: 8,
    hashtagName: '#fooderatravel ',
    postReach: ' 3k',
    selected: false,
  },
  {
    id: 9,
    hashtagName: '#fooderatravel ',
    postReach: ' 5k',
    selected: false,
  },
  {
    id: 10,
    hashtagName: '#fooderatravel ',
    postReach: ' 3k',
    selected: false,
  },
];

function PostDetails() {
  const [selectedHashtag, setSelectedHashtag] = useState(hashtagBadges);

  const addingHashtag = (selectedItem) => {
    setSelectedHashtag((prev) => {
      const newState = prev?.map((item) => {
        if (item?.id === selectedItem?.id) {
          return item?.selected ? { ...item, selected: false } : { ...item, selected: true };
        } else {
          return { ...item };
        }
      });
      return newState;
    });
  };

  const addingAllHashtag = () => {
    setSelectedHashtag((prev) => {
      const newState = prev?.map((item) => {
        return { ...item, selected: true };
      });
      return newState;
    });
  };

  return (
    <div className='postDetailsWrapper flex-column space-between'>
      <div className='content-title'>
        <TitleAndDescription
          title='Content performance'
          size='medium'
          margin={'13px 0'}
        />
        <div className='contentPerformanceWrapper'>
          {postPerformance?.map((item) => (
            <Card
              backgroundColor={'#FFF'}
              borederRadius={'10px'}
              border={'none'}
              padding={'8px 10px'}
              title={item?.title}
              key={item?.id}
              style={{ boxShadow: '0px 4px 8px 0px rgba(45, 48, 54, 0.08)' }}>
              <ContentPerformance item={item} />
            </Card>
          ))}
        </div>
      </div>
      <div className='hastag-wrapper'>
        <div className=' flex-row space-between'>
          <TitleAndDescription
            title='Hashtags'
            size='medium'
            margin={'13px 0'}
          />
          <div className=' flex-row align-center'>
            <img
              src={ICONS?.CopyText}
              alt='copyText'
              className='Hashtags'
              onClick={addingAllHashtag}
            />
            <img
              src={ICONS?.regenerateIcon}
              alt='regenerate '
              className='Hashtags'
            />
          </div>
        </div>

        {selectedHashtag?.map((item) => (
          <span
            className={`hashtagBadges  ${item?.selected ? 'activeBadges' : 'inActiveBadges'}`}
            key={item?.id}
            onClick={() => addingHashtag(item)}>
            {item?.hashtagName}
            <span className={`postReach ${item?.selected ? 'activeBadges' : ''}`}>
              {item?.postReach}
            </span>
          </span>
        ))}
      </div>
      <div className='gg-right'>
        {/* <TitleAndDescription
          title='Chat with GG'
          size='medium'
          margin={'13px 0'}
        /> */}
        <GoGrow />
      </div>
    </div>
  );
}

export default PostDetails;
