import React from 'react';
import '../styles/Date.css';

import dayjs from 'dayjs';

const DateInfo = (props) => {
  const { id, date, selectedDate, day, today } = props;
  const activeDate = selectedDate && dayjs(selectedDate).format('YYYY-MM-DD');
  const currentDate = today?.format('YYYY-MM-DD');

  const dates = date?.split('-');
  const active = activeDate === date ? true : false;

  return (
    <div
      key={id}
      className={`date ${
        activeDate !== currentDate && currentDate === date ? 'today--active' : ''
      } ${active ? 'date--active' : ''}`}>
      <span className='day'>{day}</span>
      <span className='today'>{dates[2]}</span>
    </div>
  );
};

export default DateInfo;
