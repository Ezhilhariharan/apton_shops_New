import React, { useEffect, useState, useRef } from 'react';
import '../styles/campaignModal.css';

import {
  HeaderSwitchingButton,
  calendarHeader,
} from '../../../constant/app/campaign/campaignExtended';
import Calendar from '../../../assets/customSVG/customCalendar';
import Board from '../../../assets/customSVG/Board';
import { ICONS } from '../../../assets/icons';
import { calendarOption } from '../../../constant/app/campaign/campaignExtended';

import { Button } from '../../../components/form/Button/Button';
import ListView from '../../../components/commonComponents/ListViewHeader/FilterActions';
import Search from '../../../components/commonComponents/ListViewHeader/ListViewSearch';
import DropDown from '../../../components/commonComponents/DropDown/DropDown';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateComponentsSwitching } from '../../../reduxToolkit/CampaignSlice';

const HeaderSwitchingButtons = ({
  sticky,
  handlePrevMonth,
  handleNextMonth,
  selectedDate,
  shortMonthName,
}) => {
  const dispatch = useAspDispatch();
  const { switchingComponents } = useAspSelector((state) => state.Campaign);

  // const handlePrevMonth = () => {
  //   getPrevMonth();
  // };
  // const handleNextMonth = () => {
  //   getNextMonth();
  // };

  const switchingHeader = (data) => {
    dispatch(updateComponentsSwitching(data?.name));
  };

  return (
    <div
      id='stickyBar'
      // className={`${sticky ? 'sticky' : ''}`}
      className={'sticky'}>
      {/* <div className='w-100 flex-row align-center switchingButtons'>
        {HeaderSwitchingButton?.map((item, id) => (
          <React.Fragment key={item?.id}>
            {id !== 0 && <span className='header-switching-line'></span>}
            <div
              className={`pointer   ${
                switchingComponents === item?.name
                  ? 'header-switching-button-wrapper-active'
                  : 'header-switching-button-wrapper'
              }
              `}
              onClick={() => switchingHeader(item)}>
              {item?.name === 'Board' && (
                <Board
                  color={switchingComponents === item?.name ? 'var(--primary)' : 'var(--textBlack)'}
                />
              )}
              {item?.name === 'Calender' && (
                <Calendar
                  width={'16'}
                  height={'16'}
                  color={
                    switchingComponents === item?.name || switchingComponents === 'Month'
                      ? 'var(--primary)'
                      : 'var(--textBlack)'
                  }
                />
              )}
              <span
                className='header-switching-button-name'
                style={{
                  color: `${
                    switchingComponents === item?.name ||
                    (switchingComponents === 'Month' && item?.name === 'Calender')
                      ? 'var(--TextPrimary)'
                      : 'var(--textBlack)'
                  }`,
                }}>
                {item?.name}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div> */}

      <div className='header-switching-button-container'>
        <div className='flex-row w-40 pl-10 ml-10'>
          <Search />
        </div>

        <div className=' w-20'>
          {switchingComponents !== 'Board' &&
            selectedDate &&
            shortMonthName &&
            calendarHeader?.map((item) => (
              <div
                key={item?.id}
                className='calender-container flex-row align-center'>
                {item?.image && (
                  <img
                    src={item?.image}
                    alt='calendar'
                    className='ml-5 mr-5 pointer'
                    onClick={() => handlePrevMonth()}
                  />
                )}
                <Calendar
                  width={'18'}
                  height={'18'}
                  color={'var(--textBlack)'}
                />
                <div className='monthWithYear'>
                  {`${shortMonthName[selectedDate?.getMonth()]?.slice(
                    0,
                    4,
                  )} - ${selectedDate?.getFullYear()}`}
                </div>
                {item?.icon1 && (
                  <img
                    src={item?.icon1}
                    alt='calendar'
                    className='ml-5 mr-5 pointer'
                    onClick={() => handleNextMonth()}
                  />
                )}
              </div>
            ))}
        </div>

        <div className=' w-40 flex-row flex-end'>
          <div className='dropDownHover p-relative'>
            {/* {switchingComponents !== 'Board' && (
              <Button
                size={'small'}
                label={
                  switchingComponents === 'Week'
                    ? 'Week'
                    : (switchingComponents === 'Calender' || switchingComponents === 'Month') &&
                      'Month'
                }
                iconSuffix={ICONS?.CaretDown}
                useRightImage1Class={true}
                // onClick={handleClick}
              />
            )} */}
            <div className='dropdownWrapper pointer p-absolute'>
              {calendarOption?.map((item) => (
                <div
                  key={item?.id}
                  onClick={() => dispatch(updateComponentsSwitching(item?.name))}
                  className='dropdown-1'>
                  <DropDown title={item?.name} />
                </div>
              ))}
            </div>
          </div>
          <ListView />
        </div>
      </div>
    </div>
  );
};

export default HeaderSwitchingButtons;
