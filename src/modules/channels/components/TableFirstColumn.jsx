import React from 'react';

import moment from 'moment';

import { ICONS } from '../../../assets/icons/index';

import { channelNameAction } from '../../../constant/app/channel';

import { convertingDateAndTime } from '../../../helper/convertingDate';

function TableFirstColumn({ item, handleTableRow }) {
  return (
    <>
      <div className='flex-row firstColumnWrapper'>
        <div className='campaignNameBox flex-column justify-center'>
          <div className='flex-row align-center'>
            {item?.name}
            <div className={`flex-row ${item?.selected ? 'iconWrapperActive' : 'iconWrapper'}`}>
              {channelNameAction?.map((img) => (
                <img
                  src={img?.icon}
                  alt={img?.name}
                  style={{ color: 'black' }}
                  className='campaignNameIcon'
                  onClick={() => handleTableRow(img?.name, item)}
                />
              ))}
            </div>
          </div>
          <div className='flex-row campaignDetails align-center'>
            last updated @
            <img
              src={ICONS?.campaignCalendar}
              alt={'campaignDate'}
              className='campaignBoxImage'
              onClick={() => handleTableRow('templateEdit', item)}
            />
            {moment(convertingDateAndTime(item?.meta_modified_at)).format('MMMDD, h:mma')}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(TableFirstColumn);
