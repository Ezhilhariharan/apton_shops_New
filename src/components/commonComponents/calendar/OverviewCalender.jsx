import React, { useState } from 'react';
import './overviewCalender.css';

import useCalendar from '../../../hooks/useCalender';
import CalendarPost from '../../../modules/Task/components/CalendarPost';
import { useEffect } from 'react';
import { ICONS } from '../../../assets/icons';

import Create from '../create/Index';

import { campaignTaskList } from '../../../modules/campaign/api/Api';

import { convertingDateAndTime } from '../../../helper/convertingDate';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { updateActiveTab, updateTabList } from '../../../reduxToolkit/CampaignSlice';

import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';

function OverviewCalender({ calendarDataProp }) {
  const { daysArr } = useCalendar();
  const [calendarData, setCalendarData] = useState();
  const [localTabList, setLocalTabList] = useState([]);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [taskList, setTaskList] = useState([]);

  let Today = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;

  const dispatch = useAspDispatch();
  const { tabList } = useAspSelector((state) => state.Campaign);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    dispatch(updateGlobalLoader(true));
    campaignTaskList(id)
      .then((res) => {
        if (res?.status === 200) {
          setTaskList(res?.data?.response);
          dispatch(updateGlobalLoader(false));
        }
      })
      .finally(() => {
        dispatch(updateGlobalLoader(false));
      });
  }, []);

  useEffect(() => {
    setLocalTabList(() => {
      const newState = tabList?.map((list) => {
        if (list?.tabName === 'campaignList') {
          return { ...list, icon: ICONS?.tabViewHome, activeIcon: ICONS?.TabActiveHome };
        } else if (list?.tabName === 'campaignName') {
          return {
            ...list,
            icon: ICONS?.CampaignSpeaker,
            activeIcon: ICONS?.greenSpeakerCampaign,
          };
        } else if (list?.tabName === 'okr') {
          return {
            ...list,
            icon: ICONS?.tabViewHome,
            activeIcon: ICONS?.tabViewHome,
          };
        } else {
          return { ...list };
        }
      });
      return newState;
    });
  }, [tabList]);

  useEffect(() => {
    setCalendarData((prev) => {
      const State =
        calendarDataProp &&
        Object.values(calendarDataProp)?.map((item) => {
          const newState = item?.map((data) => {
            const { restrictedDate, list } = handleCalendarCard(data?.date);
            if (list?.length > 0 && restrictedDate) {
              return { ...data, showCard: true, cardList: list, showPlusIcon: true };
            } else {
              return { ...data, showCard: false, showPlusIcon: false };
            }
          });
          return newState;
        });
      return State;
    });
  }, [calendarDataProp, taskList]);

  const handleCalendarCard = (date) => {
    const listTab = tabList?.filter((data) => data?.tabName === 'campaignName');
    let startDate, endDate;
    if (listTab?.length > 0) {
      startDate = listTab[0]?.allData?.start_date?.split('T')[0];
      endDate = listTab[0]?.allData?.end_date?.split('T')[0];
    }

    let start = new Date(
      startDate?.split('-')[0],
      startDate?.split('-')[1] - 1,
      startDate?.split('-')[2],
    );
    let end = new Date(endDate?.split('-')[0], endDate?.split('-')[1] - 1, endDate?.split('-')[2]);
    let propDate =
      date && new Date(date?.split('-')[2], date?.split('-')[1] - 1, date?.split('-')[0]);

    let restrictedDate =
      (propDate > start && propDate < end) ||
      propDate?.getTime() == start?.getTime() ||
      propDate?.getTime() == end?.getTime();

    const list = taskList?.filter((item) => {
      const listDate = item?.start_date?.split('T')[0];
      return (
        `${listDate?.split('-')[2]}-${listDate?.split('-')[1]}-${listDate?.split('-')[0]}` === date
      );
    });
    return { restrictedDate, list };
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    setCalendarData((prev) => {
      const State = Object.values(prev)?.map((item) => {
        const newState = item?.map((data) => {
          if (data?.date == event.target.id) {
            return { ...data, showCard: true };
          } else {
            return { ...data, showCard: false };
          }
        });
        return newState;
      });
      return State;
    });
  };

  const handleClick = (data) => {
    dispatch(updateActiveTab('broadCast'));
    dispatch(
      updateTabList([
        ...tabList,
        {
          id: 3,
          tabName: 'broadCast',
          name: data?.title,
          allData: data,
          campaignId: id,
          broadCastId: data?.id,
        },
      ]),
    );
    navigate(`/user/campaign/overview/whatsapp/${id}/${data?.id}`);
  };

  // const dragStartAndEnd = (event) => {
  //   console.log(event.target.id);
  // };

  const handleMouseOver = (date) => {
    setHoveredDate(date);
  };

  const handleMouseOut = () => {
    setHoveredDate(null);
  };

  const stopPreviousDate = (date) => {
    const currentDate = new Date();
    let receivedDate = date?.split('-');
    const clickedDate =
      receivedDate && new Date(receivedDate[2], receivedDate[1] - 1, receivedDate[0]);

    var isSameDay =
      currentDate.getFullYear() === clickedDate.getFullYear() &&
      currentDate.getMonth() === clickedDate.getMonth() &&
      currentDate.getDate() === clickedDate.getDate();

    return clickedDate > currentDate || isSameDay;
  };

  return (
    <div className='overViewWrapper'>
      <div className=' daysWrapper flex-row'>
        {daysArr?.map((weekDays) => (
          <div
            key={weekDays}
            className='weekDays flex-row align-center  '>
            {weekDays}
          </div>
        ))}
      </div>
      {calendarData?.map((cols) => {
        return (
          <div
            className='dateRow flex-row '
            key={cols[0]?.date}>
            {cols?.map((col) => (
              <div
                onDrop={drop}
                onDragOver={allowDrop}
                key={col?.value}
                id={col?.date}
                className={`${col?.classes} individualDate flex-column p-relative ${
                  stopPreviousDate(col?.date) ? 'pointer' : ' noDrop'
                }`}
                onMouseOver={() => handleMouseOver(col?.date)}
                onMouseOut={handleMouseOut}>
                {col?.showCard &&
                  col?.cardList?.map((post) => (
                    <CalendarPost
                      name={post?.title}
                      postTime={post?.start_date}
                      id={col?.date}
                      post={post}
                      handleClick={handleClick}
                    />
                  ))}
                <div className='p-absolute positioningCalendarDate'>
                  <div className='plus-hover pointer'>
                    {hoveredDate === col?.date && col?.showPlusIcon && (
                      <Create showPlusIcon={true} />
                    )}
                  </div>
                  {col.value}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default OverviewCalender;
