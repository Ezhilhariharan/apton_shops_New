import React, { useState } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { ICONS } from '../../../../assets/icons/index';
import { images } from '../../../../assets/images/index';

import { Popover } from 'antd';

import moment from 'moment';

import {
  StatusList,
  StatusInputList,
  InputList,
} from '../../../../constant/app/campaign/campaignExtended';

import { Button } from '../../../../components/form/Button/Button';
import Tooltip from '../../../../components/commonComponents/tooltip/Tooltip';
import Calendar from '../../../../components/commonComponents/calendar/Calendar';

import { convertingDateAndTime } from '../../../../helper/convertingDate';

const TemplateStatus = ({
  SetDeleteClick,
  handleStatusClick,
  Status,
  selectedTemplate,
  handleHeaderClick,
  sendMessageAction,
  response,
}) => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const content = <Calendar variant='popOverVariant' />;

  const handleIconClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  const SelectList = ({ setSelectList }) => {
    return (
      <div className='input-dropdown flex justify-flex-end cursor-pointer '>
        {StatusInputList?.map((item, id) => (
          <div key={item.id}>
            {inputActions[id] && (
              <>
                {setSelectList
                  ?.filter((data) => data.id !== selectedItems[id]?.id)
                  .map((data) => (
                    <span
                      className='input-data flex-column'
                      key={data?.id}
                      onClick={() => handleDropdownItemClick(data, id)}>
                      <span
                        style={
                          {
                            // color: selectedItems[id] ? 'red' : 'grey',
                          }
                        }>
                        {data?.name}
                      </span>
                    </span>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  const [inputActions, setInputActions] = useState(StatusInputList.map(() => false));
  const [selectedItems, setSelectedItems] = useState(StatusInputList.map(() => null));

  const handleInputClick = (id) => {
    const updatedInputActions = [...inputActions];
    updatedInputActions[id] = !updatedInputActions[id];
    setInputActions(updatedInputActions);
  };

  const handleDropdownItemClick = (data, id) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[id] = data;
    setSelectedItems(updatedSelectedItems);
    const updatedInputActions = [...inputActions];
    updatedInputActions[id] = false;
    setInputActions(updatedInputActions);
  };
  const handleClick = () => {};

  return (
    <div
      className='status-container'
      onClick={() => handleHeaderClick('footer')}>
      <div className='status-container-wrapper flex-row align-center space-between cursor-pointer '>
        <div
          className='flex-row align-center space-evenly w-40'
          onClick={() => handleStatusClick()}>
          <img
            src={images?.MessageIcon}
            alt='message icon'
          />
          <span>{selectedTemplate?.name}</span>
          <img
            src={ICONS?.ToggleIcon}
            alt='dropdown'
          />
          <p></p>
        </div>

        <div
          className='select-calendar flex align-center '
          onClick={handleIconClick}>
          {/* <Popover
            content={content}
            trigger='click'
            open={popoverVisible}> */}
          <img
            src={ICONS?.CalendarIcon}
            alt='dueDate'

            // className='dueDate-img'
          />
          {/* </Popover> */}
          {/* <p>Oct 25, 2023</p> */}
          <p>{moment(response?.startDate).format('MMMDD')}</p>
        </div>

        <div className='status-time flex-row align-center space-evenly'>
          <img
            src={ICONS?.ClockIcon}
            alt='time'
          />
          {/* <span>12 : 30 </span> */}
          <span>
            {response?.startDate?.getHours()} : {response?.startDate?.getMinutes()}
          </span>
        </div>
      </div>
      <div className='flex-row align-center '>
        <span
          className='status-color flex align-center justify-center '
          style={{
            color: selectedTemplate?.category === 'MARKETING' ? '#ED4F9D' : '#f6a723',
            background: selectedTemplate?.category === 'MARKETING' ? '#fdf2f8' : '#FFFBEB',
          }}>
          {selectedTemplate?.category}
        </span>
        <img
          src={ICONS?.campaignDelete}
          alt='DeleteIcon'
          onClick={() => SetDeleteClick()}
        />
      </div>

      {/* {Status && (
        <div className='status-main-container  flex-column '>
          <div className=' input-heading flex-row  space-between'>
            <div className='align-center flex-row '>
              <p className='p-10'>Variable</p>
              <span className=' select-icon pr-5'>0/5</span>
              <Tooltip 
                title={'Kindly Select'}
                style={{ padding: '20px !important', width:'40vh' }}>
              <div>
                <img
                  src={ICONS?.TrianglewarningIcon}
                  alt='warning'
                  onClick={() => handleClick()}
                />
              </div>
              </Tooltip>
            </div>
            <p>MatchFields</p>
          </div>
          <div className='status-line flex-row space-between'>
            <div className='status-input flex-column space-between'>
              {StatusList?.map((data) => (
                <div
                  className=' flex-row align-center'
                  key={data?.id}>
                  <p>{data?.value}</p>
                </div>
              ))}
            </div>

            <div className='statusLeftSide-input flex-column align-center cursor-pointer'>
              {StatusInputList?.map((item, id) => (
                <div
                  key={item.id}
                  className='input-filed flex-row space-between align-center'
                  onClick={() => handleInputClick(id)}
                  style={{
                    border: item.id === 3 || item.id === 4 ? '1px solid red' : '1px solid darkgrey',
                  }}>
                  <p
                    style={{
                      color:
                        selectedItems[id] &&
                        (selectedItems[id].id === 3 || selectedItems[id].id === 4)
                          ? 'black'
                          : item.id === 3 || item.id === 4
                          ? 'red'
                          : selectedItems[id]?.name
                          ? 'black'
                          : 'grey',
                    }}>
                    {selectedItems[id] ? selectedItems[id]?.name : item.name}
                  </p>
                  <Popover
                    content={<SelectList setSelectList={InputList} />}
                    trigger='click'>
                    <img
                      src={
                        item.id === 3 || item.id === 4
                          ? ICONS?.RedDropdownIcon
                          : ICONS?.dropDownIcon
                      }
                      alt='dropdown'
                    />
                  </Popover>
                </div>
              ))}
            </div>
          </div>
          <div className=' sendMessage-button flex-row flex-end space-between'>
            <Button
              size={'medium'}
              onClick={() => sendMessageAction()}
              iconPrefix={ICONS.Whatsapp}
              label={'Send test message'}
            />
          </div>
        </div>
      )} */}
      <div className=' sendMessage-button flex-row flex-end space-between'>
        <Button
          size={'medium'}
          onClick={() => sendMessageAction()}
          iconPrefix={ICONS.Whatsapp}
          label={'Send test message'}
        />
      </div>
    </div>
  );
};
export default TemplateStatus;
