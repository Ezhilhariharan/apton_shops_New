import React from 'react';

import { LeftList as calenderLeftList } from '../../../constant/app/calender/calender';

import LeftList from '../../../components/commonComponents/leftListLayout/Index';
import TabView from '../../../components/commonComponents/TabView/TabView';
import HeaderSwitchingButtons from '../../campaign/components/HeaderSwitchingButtons';
import Calendar from '../../../components/commonComponents/calendar/OverviewCalender';
import useCalendar from '../../../hooks/useCalender';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';

function calender() {
  const { calendarRows, selectedDate, getNextMonth, getPrevMonth, shortMonthName } = useCalendar();

  const handlePrevMonth = () => getPrevMonth();
  const handleNextMonth = () => getNextMonth();

  return (
    <div className='flex-row w-100 h-100'>
      <LeftList
        list={calenderLeftList}
        onSelect={(item) => {}}
      />
      <div className='app-rightLayout '>
        <TabView />
        <HeaderSwitchingButtons
          sticky={true}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          shortMonthName={shortMonthName}
          selectedDate={selectedDate}
        />
        <Calendar calendarDataProp={calendarRows} />
      </div>
    </div>
  );
}

export default calender;
