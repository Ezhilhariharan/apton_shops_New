import React, { useState } from 'react';
import './overviewCalender.css';
import './weekCalendar.css';

import useCalendar from '../../../hooks/useCalender';
import { useEffect } from 'react';
import BoardCard from '../../../modules/Task/components/BoardCard';

function WeekCalendar() {
  const { calendarRows, daysArr } = useCalendar();
  const [SelectedWeek, setSelectedWeek] = useState([]);
  let Today = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  useEffect(() => {
    Object.values(calendarRows)?.forEach((cols) => {
      cols.forEach((col) => {
        if (col?.date === Today) {
          // setSelectedWeek(cols);
          setSelectedWeek(() => {
            const newState = cols?.map((data) => {
              if (data?.date === Today) {
                return { ...data, showCard: true };
              } else {
                return { ...data, showCard: false };
              }
            });
            return newState;
          });
        }
      });
    });
  }, []);

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    setSelectedWeek((prev) => {
      const newState = prev?.map((data) => {
        if (data?.date == event.target.id) {
          return { ...data, showCard: true };
        } else {
          return { ...data, showCard: false };
        }
      });
      return newState;
    });
  };
  return (
    <div className='weekCalendarWrapper flex-row w-100'>
      {SelectedWeek?.map((item, index) => (
        <div
          key={item?.date}
          className='weekDayWrapper '>
          <div
            className='weekDays flex-row align-center '
            style={{ color: Today === item?.date ? 'var(--TextPrimary)' : 'var(--textBlack)' }}>
            <div className='days'> {daysArr[index]}</div>
            <div className='date pl-5'> {item.value}</div>
          </div>
          <div
            className='daysTaskCard p-5'
            onDrop={drop}
            onDragOver={allowDrop}
            id={item?.date}>
            {item?.showCard && <BoardCard id={item?.date} />}
            {/* <BoardCard /> */}
            {/* <BoardCard />
            <BoardCard />
            <BoardCard /> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeekCalendar;
