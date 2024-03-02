import React, { useEffect, useState } from 'react';
import './ListViewHeader.css';

import { listViewHeader } from '../../../constant/app/campaign/campaign';
import { FilterList } from '../../../constant/app/Filter/Filter';
import { ICONS } from '../../../assets/icons';

import { Checkbox, Popover } from 'antd';

import Assignee from '../assignee/AssigneePopover';
import CampaignFilter from '../../../modules/campaign/components/CampaignFilter';
import RadioButton from '../../form/radio/RadioButton';

const ListView = () => {
  const [rightHeaderList, setRightHeaderList] = useState(listViewHeader);
  // const [hover, setHover] = useState('');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  // const [showFilter, setShowFilter] = useState(false);
  // const [openFilter, setOpenFilter] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState([]);

  const handleItemClick = (itemId) => {
    setSelectedItemId((prevId) => {
      if (prevId.includes(itemId)) {
        return prevId.filter((id) => id !== itemId);
      } else {
        return [...prevId, itemId];
      }
    });
  };

  useEffect(() => {
    if (!isDrawerVisible)
      setRightHeaderList((prev) => {
        const newState = prev?.map((prevItem) => {
          if (prevItem?.name === 'Assignees') {
            return { ...prevItem, selected: false };
          } else {
            return { ...prevItem, selected: false };
          }
        });
        return newState;
      });
  }, [isDrawerVisible]);

  // const handleClose = () => {
  //   setIsDrawerVisible(false);
  // };

  // const toggleDrawer = (item) => {
  //   setRightHeaderList((prev) => {
  //     const newState = prev?.map((prevItem) => {
  //       if (prevItem?.id === item?.id) {
  //         item?.name === 'Assignees' && !item?.selected && setIsDrawerVisible(true);
  //         return prevItem?.selected
  //           ? { ...prevItem, selected: false }
  //           : { ...prevItem, selected: true };
  //       } else {
  //         return { ...prevItem, selected: false };
  //       }
  //     });
  //     return newState;
  //   });
  // };

  // const cancelOption = () => {
  //   setRightHeaderList((prev) => {
  //     const newState = prev?.map((prevItem) => {
  //       return { ...prevItem, selected: false };
  //     });
  //     return newState;
  //   });
  // };
  const SetActionFilter = ({ SetActionList }) => {
    const [selectedValue, setValue] = useState('');

    return (
      <div className='list-right-wrap flex-column'>
        <div className='filter-wrapper-main align-center justify-center'>
          {SetActionList?.map((data) => (
            <div key={data?.id}>
              <h4>{data?.name}</h4>
              {data?.subFilter?.map((item) => (
                <div
                  className='flex-row align-center space-between cursor-pointer'
                  key={item?.id}
                  style={{
                    borderBottom: item?.id !== 10 ? '1px solid var(--font-50)' : 'none',
                  }}
                  onClick={() => handleItemClick(item?.id)}>
                  <div className='flex-row align-center'>
                    <img
                      src={item?.icon}
                      alt='icon'
                    />
                    <p>{item?.Filter_name}</p>
                  </div>
                  <div className='mr-5'>
                    {selectedItemId?.includes(item.id) && (
                      <RadioButton
                        selected={true}
                        // style={{
                        //   margin: '5px 40px',
                        // }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className='list-right-wrap flex-column'>
      <div className='flex-column'>
        <Popover
          content={<SetActionFilter SetActionList={FilterList} />}
          trigger='click'>
          <div className='filter-container flex-row align-center'>
            <img
              src={ICONS.filterIcon}
              alt='list'
            />
            <span>Filter</span>
          </div>
        </Popover>
      </div>

      {/* <Popover
        content={
          <CampaignFilter
            setOpenFilter={setOpenFilter}
            setShowFilter={setShowFilter}
          />
        }
        trigger='click'>
        {showFilter ? (
          <div
            className='firstList-wrap-active flex-row ml-10'
            onClick={() => setOpenFilter(!openFilter)}>
            <img
              src={ICONS.filterYellow}
              alt='list'
            />
            <span>2</span>
          </div>
        ) : (
          <div
            className='firstList-wrap'
            onClick={() => setOpenFilter(!openFilter)}>
            <img
              src={ICONS.filterIcon}
              alt='list'
            />
            <span>Filter</span>
          </div>
        )}
      </Popover> */}

      {/* {rightHeaderList?.map((item) => (
        <div
          key={item?.id}
          className={
            hover === item?.name || item?.selected ? ' list-wrap list-wrap-active' : 'list-wrap'
          }
          onMouseOver={() => setHover(item?.name)}
          onMouseOut={() => setHover('')}
          onClick={() => toggleDrawer(item)}>
          {hover === item?.name || item?.selected ? (
            <img
              src={item?.hoverIcon}
              alt='list'
              onClick={cancelOption}
            />
          ) : (
            <img
              src={item?.image}
              alt='list'
            />
          )}
          <span>{item?.name}</span>
          {item?.selected || hover === item?.name ? (
            <img
              src={ICONS?.HoverExit}
              alt='exit'
              className='exitIcon'
            />
          ) : (
            ''
          )}
        </div>
      ))}  */}
      {/* {openFilter && (
        <CampaignFilter
          setOpenFilter={setOpenFilter}
          setShowFilter={setShowFilter}
        />
      )} */}

      {isDrawerVisible && (
        <div className='campaign-drawer'>
          <Assignee handleClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default ListView;
