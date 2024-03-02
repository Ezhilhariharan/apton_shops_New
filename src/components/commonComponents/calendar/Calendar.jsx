import React, { useState } from 'react';
import './Calendar.css';

import { ICONS } from '../../../assets/icons/index';

import useCalendar from '../../../hooks/useCalender';
import Divider from '../../../components/commonComponents/divider/Divider';

function Calendar({ style, heading, fromTo, variant, singleSelect, clickedDateFunc }) {
  const { calendarRows, selectedDate, getNextMonth, getPrevMonth, daysShortArr, shortMonthName } =
    useCalendar();

  const [rangeStart, setRangeStart] = useState({});
  const [rangeCalender, setRangeCalender] = useState([]);

  const handlePrevMonth = () => {
    getPrevMonth();
  };
  const handleNextMonth = () => {
    getNextMonth();
  };
  const dateClickHandler = (item) => {
    const currentDate = new Date();
    let receivedDate = item?.date?.split('-');
    const clickedDate = new Date(receivedDate[2], receivedDate[1] - 1, receivedDate[0]);

    var isSameDay =
      currentDate.getFullYear() === clickedDate.getFullYear() &&
      currentDate.getMonth() === clickedDate.getMonth() &&
      currentDate.getDate() === clickedDate.getDate();

    if (clickedDate > currentDate || isSameDay) {
      if (singleSelect) {
        clickedDateFunc(clickedDate);
        setRangeStart(item);
      } else {
        if (rangeStart?.hasOwnProperty('value')) {
          let from, to;
          Object.values(calendarRows).forEach((cols) => {
            cols.forEach((col) => {
              let splitedDate = col.date.split('-');
              let startDate = rangeStart?.date?.split('-');
              let endDate = item?.date?.split('-');

              const convertedDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
              from = new Date(startDate[2], startDate[1] - 1, startDate[0]);
              to = new Date(endDate[2], endDate[1] - 1, endDate[0]);

              if (from <= convertedDate && to >= convertedDate) {
                col['selected_range'] = true;
                col['from'] = rangeStart?.date;
                col['to'] = item?.date;
              } else {
                col['selected_range'] = false;
              }
            });
          });
          fromTo(from, to);
          setRangeCalender(calendarRows);
          setRangeStart({});
        } else {
          setRangeCalender([]);
          let startDate = item?.date?.split('-');
          setRangeStart(item);
          fromTo(new Date(startDate[2], startDate[1] - 1, startDate[0]), '');
        }
      }
    }
  };
  const stopPreviousDate = (date) => {
    const currentDate = new Date();
    let receivedDate = date?.split('-');
    const clickedDate = new Date(receivedDate[2], receivedDate[1] - 1, receivedDate[0]);

    var isSameDay =
      currentDate.getFullYear() === clickedDate.getFullYear() &&
      currentDate.getMonth() === clickedDate.getMonth() &&
      currentDate.getDate() === clickedDate.getDate();

    return clickedDate > currentDate || isSameDay;
  };
  return (
    <div className={`asp-calendar${variant ? ` ${variant}-calendar` : ''}`}>
      <div className='flex-row space-between mt-10 mb-10 mr-10 ml-10'>
        <div className='heading'>{heading}</div>
        <div className='flex-row align-center'>
          <img
            src={ICONS?.chevronLeft}
            alt='left'
            className='arrow pointer'
            onClick={() => handlePrevMonth()}
          />
          <div className='monthWithYear'>
            {`${shortMonthName[selectedDate?.getMonth()]?.slice(
              0,
              4,
            )} - ${selectedDate?.getFullYear()}`}
          </div>

          <img
            src={ICONS?.chevronRight}
            alt='right'
            className='arrow pointer'
            onClick={() => handleNextMonth()}
          />
        </div>
      </div>
      <div className='flex-row justify-center'>
        <Divider
          color={'var(--border-50)'}
          width='90%'
        />
      </div>

      <div
        className='calendarWrapper'
        style={{ ...style }}>
        <div className=' daysWrapper flex-row'>
          {daysShortArr?.map((weekDays) => (
            <div
              key={weekDays}
              className='weekDays flex-row align-center justify-center'>
              {weekDays}
            </div>
          ))}
        </div>
        {rangeCalender?.hasOwnProperty(1)
          ? Object.values(rangeCalender)?.map((cols) => {
              return (
                <div
                  className='dateRow flex-row '
                  key={cols[0].date}>
                  {cols.map((col) => (
                    <div
                      key={col?.date}
                      className={`individualDate flex-row align-center justify-center  ${
                        stopPreviousDate(col?.date) ? 'pointer' : ' noDrop'
                      }`}
                      onClick={() => dateClickHandler(col)}>
                      {col?.to === col?.date && <div className='left-horizontalLine' />}
                      <div
                        className={`${col.classes} ${
                          col?.selected_range &&
                          (col?.from === col?.date || col?.to === col?.date) &&
                          'activeBox'
                        } ${
                          col?.selected_range &&
                          col?.from !== col?.date &&
                          col?.to !== col?.date &&
                          'horizontalLine'
                        }  flex-row align-center justify-center`}>
                        {col.value}
                      </div>
                      {col?.from === col?.date && <div className='right-horizontalLine' />}
                    </div>
                  ))}
                </div>
              );
            })
          : Object.values(calendarRows)?.map((cols) => {
              return (
                <div
                  className='dateRow flex-row  align-center'
                  key={cols[0].date}>
                  {cols.map((col) => (
                    <div
                      key={col?.date}
                      className={`individualDate flex-row align-center justify-center  ${
                        stopPreviousDate(col?.date) ? 'pointer' : ' noDrop'
                      }`}
                      onClick={() => dateClickHandler(col)}>
                      <div
                        className={`${col.classes} ${
                          rangeStart?.date === col.date &&
                          'activeBox flex-row align-center justify-center'
                        }`}>
                        {col.value}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Calendar;
