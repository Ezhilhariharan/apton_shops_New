import React, { useState } from 'react';

import { campaignFooter } from '../../../constant/app/campaign/campaign';
import useAddTags from '../../../hooks/useAddTags';

import { ColorPicker } from 'antd';

import Assignee from '../../../components/commonComponents/assignee/Index';
import Channels from '../../../components/commonComponents/channels/ChannelList';
import Tags from '../../../components/commonComponents/tags/Index';

function FooterSection({ onColorChange, campaignColorError, color_code }) {
  const [color, setColor] = useState('');
  const [addingTags, addTags] = useAddTags();
  const [selectedColor, setSelectedColor] = useAddTags(null);

  return (
    <div className='flex-column space-between mt-10'>
      <div className='flex-column space-between mt-10'>
        {campaignFooter?.map((item) => (
          <div
            key={item?.id}
            className='w-20'>
            <div className='createCampaignLabel'>{item?.label}</div>
            <div className='footerBox flex-row align-center mt-5 '>
              {item?.name === 'Choose color' ? (
                <ColorPicker
                  value={color}
                  // defaultFormat={'hex'}
                  format={'RGB'}
                  showText={true}
                  onChange={(newColor) => {
                    setColor(newColor);
                    onColorChange(newColor);
                    setSelectedColor(newColor);
                  }}>
                  {color ? (
                    <span
                      style={{ background: color_code, width: 30, height: 30, borderRadius: '50%' }}
                    />
                  ) : (
                    <img
                      src={item?.icons}
                      alt={item?.name}
                      className={'footerImgBig'}
                    />
                  )}
                </ColorPicker>
              ) : (
                <>
                  {item?.label === 'Assignee' && <Assignee />}
                  {item?.label === 'Channels' && (
                    <Channels
                      width='35px'
                      height='35px'
                    />
                  )}
                  {item?.label === 'Tags' && <Tags addTags={addTags} />}
                </>
              )}
              <div className='footerText'> {item?.label === 'Tags' ? '' : item?.name} </div>
            </div>
          </div>
        ))}
        <div className='explain-error'>{campaignColorError}</div>
      </div>
    </div>
  );
}

export default FooterSection;
