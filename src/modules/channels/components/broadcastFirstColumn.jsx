import React from 'react';

import { ICONS } from '../../../assets/icons/index';
import { images } from '../../../assets/images';

import { channelNameAction } from '../../../constant/app/channel';

import moment from 'moment';

import { convertingDateAndTime } from '../../../helper/convertingDate';

function BroadCastFirstColumn({ item, handleTableRow }) {
  return (
    <>
      <div
        className='rowBar'
        style={{ backgroundColor: item?.campaignColor }}
      />
      <div className='flex-row'>
        <div className='flex-row mr-4 flex-center p-relative'>
          {/* <div
            className="imageCover"
            style={{
              width: "3vw",
              height: "3vw",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${images?.Roast})`,
            }}
          > */}
          {/* <div className="h-full flex-column flex-end align-right">
              <img
                className="whatsappCircle"
                src={ICONS.Whatsapp}
                alt="whatsapp"
              />
            </div> */}
          {/* </div> */}
        </div>
        <div className='flex-row firstColumnWrapper'>
          <div className='campaignNameBox flex-column justify-center'>
            <div className='flex-row align-center'>{item?.title}</div>
            <div className='flex-row campaignDetails align-center'>
              Published @
              <img
                src={ICONS?.campaignCalendar}
                alt={'campaignDate'}
                className='campaignBoxImage'
              />
              {moment(convertingDateAndTime(item?.meta_modified_at)).format('MMMDD, h:mma')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(BroadCastFirstColumn);
