import React, { useState, useEffect } from 'react';
import '../../styles/WorkSpace/whatsapp.css';

import { ICONS } from '../../../../assets/icons/index';
import { images } from '../../../../assets/images/index';
import { Popover } from 'antd';
import Calendar from '../../../../components/commonComponents/calendar/Calendar';
import SelectTemplate from './SelectTemplate';

const MarketTemplate = ({ setAction, handleHeaderClick, setResponse, response }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [timePopoverVisible, setTimePopoverVisible] = useState(false);
  const [minute, setMinutes] = useState();
  const [second, setSeconds] = useState();
  const [selectedMinute, setSelectedMinutes] = useState(0);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedDate, setSelectedDate] = useState();

  let minutes = [];
  let seconds = [];

  useEffect(() => {
    for (let i = 0; i <= 59; i++) {
      let minutesObject = {
        id: i,
        value: i?.toString().length == 2 ? i : `0${i}`,
      };
      minutes.push(minutesObject);
    }
    for (let i = 0; i <= 24; i++) {
      let minutesObject = {
        id: i,
        value: i?.toString().length == 2 ? i : `0${i}`,
      };
      seconds.push(minutesObject);
    }
    setMinutes(minutes);
    setSeconds(seconds);
  }, []);

  useEffect(() => {
    let date = selectedDate;

    let perfectDate =
      date &&
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), selectedHours, selectedMinute);

    perfectDate &&
      setResponse({
        ...response,
        startDate: perfectDate,
      });
  }, [selectedMinute, selectedHours]);

  const handleIconClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  const handleTimeClick = () => {
    setTimePopoverVisible(!timePopoverVisible);
  };

  const handleDate = (date) => {
    setSelectedDate(date);
    handleIconClick();
  };

  const content = (
    <Calendar
      variant='popOverVariant'
      singleSelect={true}
      clickedDateFunc={handleDate}
    />
  );

  const timeContent = () => {
    return (
      <div className='customTimePicker flex-row'>
        <div className='hours pointer'>
          {second?.map((item) => (
            <div
              onClick={() => setSelectedHours(item?.value)}
              key={item?.id}
              className='hours'
              style={{
                width: '100%',
                height: '25px',
                textAlign: 'center',
              }}>
              {item?.value}
            </div>
          ))}
        </div>
        <div className='minutes pointer'>
          {minute?.map((item) => (
            <div
              onClick={() => setSelectedMinutes(item?.value)}
              key={item?.id}
              className='minutes'
              style={{
                width: '100%',
                height: '25px',
                textAlign: 'center',
              }}>
              {item?.value}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className='select-container  flex-row align-center space-between'
      onClick={() => handleHeaderClick('footer')}>
      <div
        className='select-container-wrapper flex-row align-center'
        style={{ position: 'relative' }}
        onClick={() => setAction()}>
        <img
          src={images?.MessageIcon}
          alt='message icon'
        />
        <span>Select template</span>
        <img
          src={ICONS?.ToggleIcon}
          alt='dropdown'
        />
      </div>
      <Popover
        content={content}
        trigger='click'
        arrow={false}
        open={popoverVisible}>
        <div
          className='select-calendar flex align-center pointer'
          onClick={handleIconClick}>
          <img
            src={ICONS?.CalendarIcon}
            alt='dueDate'
          />
          <p>
            {selectedDate
              ? `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
              : 'Select date'}
          </p>
        </div>
      </Popover>
      <Popover
        content={timeContent}
        trigger='click'
        arrow={false}>
        <div
          className='select-time flex-row align-center space-evenly pointer'
          onClick={selectedDate && handleTimeClick}>
          <img
            src={ICONS?.ClockIcon}
            alt='time'
            // className='w-10'
          />
          <span className='w-70 flex-row align-center justify-center'>
            {selectedHours} : {selectedMinute}
          </span>
        </div>
      </Popover>
    </div>
  );
};
export default MarketTemplate;
