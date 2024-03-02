import React, { useState, useEffect } from 'react';
import './Table.css';
import '../../form/radio/radioSecond.css';

import { ICONS } from '../../../assets/icons/index';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateTabColumn, updateCampaignCount } from '../../../reduxToolkit/CampaignSlice';
import { updateToggleToast, updateGlobalLoader } from '../../../reduxToolkit/appSlice';

import { campaignListApi, campaignDelete } from '../../../modules/campaign/api/Api';

import Status from '../../../modules/campaign/components/Status';
import Calendar from '../calendar/Calendar';
import TableFirstColumn from '../../../modules/campaign/components/TableFirstColumn';

import { Popover } from 'antd';

const allMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function Table({ tableRowClicked, selectedStatus, onStatusClick }) {
  const [openList, setOpenList] = useState(false);
  const [tableList, setTableList] = useState([]);
  const [selectAllToggle, setSelectAllToggle] = useState(false);
  const [page, setPage] = useState(1);
  const [duration, setDuration] = useState(false);
  const [isLabelClicked, setIsLabelClicked] = useState(false);

  const dispatch = useAspDispatch();

  const { tableColumn, selectedCampaignFilter } = useAspSelector((state) => state.Campaign);
  const { currentBrand, toggleToast } = useAspSelector((state) => state.app);

  const columnLength = tableColumn?.filter((item) => item?.selected)?.length;
  // const tdStyle = {
  //   width: `calc(100% / ${columnLength})`,
  // };
  const tdStyle = {
    width: `calc(100% / 3)`,
  };

  useEffect(() => {
    setTableList((prev) => {
      const newState = prev?.map((prevItem) => {
        if (selectAllToggle) {
          return { ...prevItem, selected: true };
        } else {
          return { ...prevItem, selected: false };
        }
      });
      updatingCountList(newState);
      return newState;
    });
  }, [selectAllToggle]);

  useEffect(() => {
    initialCall();
  }, []);

  const initialCall = () => {
    getCampaignList(currentBrand?.id, { name: null, page: page, limit: 10 });
  };

  const handleDurationClickForRow = (rowId) => {
    setDuration((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const loadNextPage = () => {
    const nextPage = page + 1;
    getCampaignList(currentBrand?.id, { name: null, page: nextPage, limit: 10 });
    setPage(nextPage);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      loadNextPage();
    }
  };

  const getCampaignList = (brandId, payload) => {
    if (brandId) {
      dispatch(updateGlobalLoader(true));
      campaignListApi(brandId, payload)
        .then((res) => {
          if (res) {
            setTableList([...tableList, ...res?.campaigns]);
          }
        })
        .finally(() => {
          dispatch(updateGlobalLoader(false));
        });
    } else {
      setTableList([]);
    }
  };

  const setListRow = (e) => {
    setTableList((prev) => {
      const newState = prev?.map((prevItem) => {
        if (prevItem?.id == e.target.value) {
          return prevItem?.selected
            ? { ...prevItem, selected: false }
            : { ...prevItem, selected: true };
        } else {
          return { ...prevItem };
        }
      });
      updatingCountList(newState);
      return newState;
    });
  };

  const updatingCountList = (data) => {
    const selectedCount = data?.filter((item) => item?.selected === true);
    selectedCount?.length > 0
      ? dispatch(updateCampaignCount(selectedCount?.length))
      : dispatch(updateCampaignCount(0));
  };

  const selectingAllList = () => setSelectAllToggle(!selectAllToggle);

  const handleTableRow = (event, item) => {
    event.preventDefault();
    tableRowClicked(item);
  };

  const setSelectedList = (item) => {
    const newState = tableColumn?.map((prevItem) => {
      if (prevItem?.id === item?.id) {
        return prevItem?.selected
          ? { ...prevItem, selected: false }
          : { ...prevItem, selected: true };
      } else {
        return { ...prevItem };
      }
    });
    dispatch(updateTabColumn(newState));
    setOpenList(false);
  };

  const handleDelete = (e, data, item) => {
    e.stopPropagation();
    dispatch(updateGlobalLoader(true));
    if (data?.name === 'delete') {
      campaignDelete(item?.id).then((res) => {
        if (res.status === 200) {
          dispatch(updateGlobalLoader(false));
          getCampaignList(currentBrand?.id, { name: null, page: 1, limit: 10 });
          dispatch(
            updateToggleToast([
              ...toggleToast,
              {
                id: toggleToast?.length + 1,
                content: 'Campaign deleted successfully',
                status: 'Success',
                duration: '',
              },
            ]),
          );
        }
      });
    }
  };

  const onLabelClick = () => setIsLabelClicked(!isLabelClicked);

  return (
    <div
      className='tableWrapper'
      onScroll={handleScroll}>
      <table
        style={{
          width: columnLength > 4 ? `${400 + columnLength * 200}px` : '100%',
        }}>
        <tr className='tableHeaderRow'>
          <th>
            {/* <div className='campaignCheckbox'> */}
            {isLabelClicked && (
              <label
                style={{ marginTop: '3.1px' }}
                className='checkBoxContainer '>
                <input
                  type='checkbox'
                  name='checkbox'
                  onChange={(e) => selectingAllList(e)}
                />
              </label>
            )}
            {/* </div> */}
            <div className='pl-10 campaignName'>Campaign name</div>
          </th>

          {tableColumn?.map((column) => (
            <>{column?.selected && <th>{column?.name}</th>}</>
          ))}
          {/* <img
            className='addIcon'
            src={ICONS?.tableAdd}
            alt='add'
            onClick={() => setOpenList(!openList)}
          /> */}
        </tr>

        {/* {openList && (
          <TableHeaderList
            list={tableColumn}
            setSelectedList={setSelectedList}
          />
        )} */}
        {tableList?.map((item) => {
          const start = new Date(item?.start_date);
          const end = new Date(item?.end_date);

          const startDateString = `${allMonths[start?.getMonth()]} ${start?.getDate()}`;
          const endDateString = `${allMonths[end?.getMonth()]} ${end?.getDate()}`;
          return (
            <tr
              className='listRow'
              key={item?.id}>
              <td>
                <TableFirstColumn
                  item={item}
                  setListRow={setListRow}
                  handleTableRow={handleTableRow}
                  onLabelClick={onLabelClick}
                  handleDelete={handleDelete}
                />
              </td>

              {tableColumn[0]?.selected && (
                <td
                  style={tdStyle}
                  // onClick={() => handleTableRow()}
                >
                  <div className='duration flex-row align-center justify-center'>
                    <Popover content={<Calendar />}>
                      <img
                        src={ICONS?.navCalendar}
                        alt='img'
                        className='durationCalender'
                        onClick={() => handleDurationClickForRow(item?.id)}
                      />
                    </Popover>
                    {/* {item?.duration} */}
                    {startDateString || '---'} - {endDateString}
                  </div>
                  <div className='duration-open-calendar'>
                    {/* {duration[item?.id] && }{' '} */}
                  </div>
                </td>
              )}

              {tableColumn[1]?.selected && (
                <td
                  style={tdStyle}
                  onClick={(event) => handleTableRow(event, item)}>
                  {/* onClick={() => handleDurationClickForRow(item?.id)} */}
                  <div>
                    {item?.spending_amount} <span>INR</span>
                  </div>
                </td>
              )}
              {tableColumn[2]?.selected && (
                <td
                  style={tdStyle}
                  onClick={(event) => handleTableRow(event, item)}>
                  <div className='flex-row justify-center '>
                    {/* <Progress
                      width={'60%'}
                      backgroundColor={item?.campaignBg}
                      color={item?.campaignColor}
                      status={'completed'}
                    /> */}
                    <span className='status-complete'>
                      <Status status={item?.status} />
                    </span>
                  </div>
                </td>
              )}
              {/* {tableColumn[3]?.selected && (
                <td
                  style={tdStyle}
                  onClick={() => handleTableRow()}>
                  <div className='flex-row avatarRow justify-center'>
                    {multipleAccounts?.map((avatar) => (
                      <span
                        className='multipleAvatar'
                        key={avatar?.id}>
                        <img
                          src={avatar?.img}
                          alt='icons'
                        />
                      </span>
                    ))}
                  </div>
                </td>
              )}
              {tableColumn[4]?.selected && (
                <td
                  style={tdStyle}
                  onClick={() => handleTableRow()}>
                  <div className='flex-row avatarRow justify-center'>
                    {multipleChannels?.map((avatar) => (
                      <span
                        className='multipleAvatar'
                        key={avatar?.id}>
                        <Avatar
                          name={avatar?.name}
                          style={{
                            backgroundColor: avatar?.color,
                            ...drawer,
                          }}
                        />
                      </span>
                    ))}
                  </div>
                </td>
              )}
              {tableColumn[5]?.selected && (
                <td
                  style={tdStyle}
                  onClick={() => handleTableRow()}>
                  <div className='flex-row justify-center'>
                    {item?.tags?.map((tag) => (
                      <div
                        key={tag?.id}
                        className='tag'
                        style={{ background: tag?.bg, color: tag?.color }}>
                        {tag?.tag}
                      </div>
                    ))}
                  </div>
                </td>
              )} */}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
