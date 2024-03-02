import React from 'react';

import { ICONS } from '../../../assets/icons/index';

import { campaignNameAction } from '../../../constant/app/campaign/campaign';

import Radio from '../../../components/form/radio/RadioButton';

function TableFirstColumn({ item, setListRow, handleTableRow, onLabelClick, handleDelete }) {
  return (
    <>
      <div
        className='rowBar'
        style={{ backgroundColor: item?.color_code }}
      />
      <div className='flex-row  firstColumnWrapper'>
        <div
          className={`campaign-radio flex-row ${
            item?.selected ? 'campaignBoxRadioActive' : 'campaignBoxRadioButton'
          }`}>
          {/* <Radio
            selected={item?.selected}
            data={item}
            onClick={setListRow}
          /> */}
          <label
            class='checkBoxContainer'
            onClick={onLabelClick}>
            <input
              type='checkbox'
              name='checkbox'
              checked={item?.selected}
              value={item?.id}
              onChange={(e) => setListRow(e)}
            />
          </label>
        </div>
        <div
          className='campaignNameBox flex-column justify-center'
          onClick={(event) => handleTableRow(event, item)}>
          <div className='flex-row align-center'>
            {item?.name}
            <div className={`flex-row ${item?.selected ? 'iconWrapperActive' : 'iconWrapper'}`}>
              {campaignNameAction?.map((img) => (
                <img
                  src={img?.icon}
                  alt={img?.name}
                  className='campaignNameIcon'
                  onClick={(e) => handleDelete(e, img, item)}
                />
              ))}
            </div>
          </div>
          <div className='flex-row campaignDetails align-center'>
            created @
            <img
              src={ICONS?.campaignCalendar}
              alt={'campaignDate'}
              className='campaignBoxImage'
            />
            {new Date(item?.created_at).toDateString()}
            <img
              src={ICONS?.campaignTask}
              alt={'campaignTask'}
              className='campaignBoxImage'
            />
            Task {item?.task_count}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(TableFirstColumn);
