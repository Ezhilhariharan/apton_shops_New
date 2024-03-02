import React, { useRef, useState } from 'react';
import '../styles/Campaign.css';

import { useParams, useLocation } from 'react-router-dom';

import BreadCrumbs from '../../../components/commonComponents/breadCrumbs/BreadCrumbs';
import OverViewPerformance from '../components/OverViewPerformance';
import CampaignDetails from '../components/CampaignDetails';
import CampaignHeader from '../components/CampaignHeader';
import HeaderSwitchingButtons from '../components/HeaderSwitchingButtons';
import Calendar from '../../../components/commonComponents/calendar/OverviewCalender';
import WeekCalendar from '../../../components/commonComponents/calendar/WeekCalendar';
import Board from '../../Task/components/Board';
// import TaskCampaign from './TaskCampaign';
import useCalendar from '../../../hooks/useCalender';

import { useAspSelector } from '../../../test/jest-redux-hooks';
import { campaignBreadCrumbs } from '../../../constant/app/campaign/campaignExtended';

function CampaignOverview() {
  const [sticky, setSticky] = useState(false);
  const { calendarRows, selectedDate, getNextMonth, getPrevMonth, shortMonthName } = useCalendar();

  const { switchingComponents } = useAspSelector((state) => state.Campaign);

  const navbarRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop } = navbarRef?.current;

    if (scrollTop >= 370) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handlePrevMonth = () => getPrevMonth();
  const handleNextMonth = () => getNextMonth();

  return (
    <div className='campaignOverviewWrapper'>
      {/* <BreadCrumbs data={campaignBreadCrumbs} /> */}
      <CampaignHeader />
      <div
        className='overviewBody '
        onScroll={handleScroll}
        ref={navbarRef}>
        {/* <CampaignDetails />
        <OverViewPerformance /> */}
        <HeaderSwitchingButtons
          sticky={sticky}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          shortMonthName={shortMonthName}
          selectedDate={selectedDate}
        />
        {(switchingComponents === 'Calender' || switchingComponents === 'Month') && (
          <Calendar calendarDataProp={calendarRows} />
        )}
        {switchingComponents === 'Week' && <WeekCalendar />}
        {switchingComponents === 'Board' && <Board />}
      </div>
    </div>
  );
}

export default CampaignOverview;
