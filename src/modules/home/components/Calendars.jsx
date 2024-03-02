import React, { useEffect, useState } from 'react';
import '../styles/Date.css';
import DateInfo from './DateInfo';
import dayjs from 'dayjs';
import { ICONS } from '../../../assets/icons/index';

export const allMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'Novomber',
  'December',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendars = (props) => {
  const {
    setTodayMatches,
    getDates,
    selectedDate,
    setSelectedDate,
    isStartDateSelected,
    setIsStartDateSelected,
    currentDate,
    ...prop
  } = props;
  const [selectedDates, setSelectedDates] = useState(currentDate);
  const [currentWeek, setCurrentWeek] = useState(currentDate);

  const updateWeek = (date) => {
    const startOfWeek = dayjs(date)?.startOf('week');
    setCurrentWeek(startOfWeek);
  };
  const handleClick = (date) => {
    getDates(date);
    setSelectedDates(dayjs(date));

    // if (
    //   dayjs(date)?.month() === 0 &&
    //   date.isAfter(currentWeek) &&
    //   date.year() !== currentWeek.year()
    // ) {
    //   setSelectedDates((prevDate) => prevDate.add(1, 'year'));
    // }
  };
  const currentMonth = allMonths[currentWeek?.month()];

  return (
    <>
      <div className='flex-column space-between'>
        <div className='flex-row space-between'>
          <span className='schedule'>Schedule</span>
          <div className='flex-row'>
            <img
              src={ICONS?.WorkSpaceRight}
              alt='WorkSpaceRight'
              className={'rotating-image1 pointer'}
              onClick={() => {
                const nextWeek = dayjs(currentWeek)?.subtract(1, 'week')?.format('YYYY-MM-DD');
                const isCurrentWeek = currentWeek?.isSame(currentDate.startOf('week'), 'week');

                if (!isCurrentWeek) {
                  updateWeek(nextWeek);
                  getDates(nextWeek);
                }
              }}
            />
            <img
              src={ICONS?.WorkSpaceRight}
              alt='WorkSpaceRight'
              className={'rotating-image2 pointer'}
              onClick={() => {
                const nextWeek = currentWeek?.add(1, 'week');
                updateWeek(nextWeek);
                getDates(nextWeek?.format('YYYY-MM-DD'));
                handleClick(nextWeek);
              }}
            />
          </div>
        </div>
        <span className='schedule-year'>
          {allMonths[dayjs(selectedDate)?.month()]} {dayjs(selectedDate)?.format('D, YYYY')}
        </span>
      </div>
      <div className='flex justify-between pt-10'>
        {days?.map((day, i) => {
          const date = currentWeek?.clone()?.startOf('week')?.add(i, 'days');

          return (
            <div
              key={i}
              onClick={() => {
                getDates(date);
                setSelectedDates(dayjs(date));
              }}
              className='cursor-pointer'>
              <DateInfo
                key={day?.id}
                date={date?.format('YYYY-MM-DD')}
                day={days[date?.day()]}
                month={currentMonth}
                today={currentDate}
                selectedDate={selectedDate}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calendars;
