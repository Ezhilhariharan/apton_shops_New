import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Popover } from 'antd';

import '../styles/templateTable.css';
import '../styles/Templates.css';

import TableFirstColumn from '../../../modules/channels/components/TableFirstColumn';
import CampaignFilter from '../../../modules/campaign/components/CampaignFilter';

import Search from '../../../components/commonComponents/ListViewHeader/ListViewSearch';
import { Button } from '../../../components/form/Button/Button';
import LabelText from '../../../components/commonComponents/Label';
import ModelComponent from '../../../components/commonComponents/ModelComponent';

import { images } from '../../../assets/images';
import { ICONS } from '../../../assets/icons';

import { templateData, templateTableHeaderList } from '../../../constant/app/channel';

import { templateLists } from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';

import { getLanguageName } from '../../../helper/setLanguageCode';
import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';
let count = 0;
const TemplateTable = () => {
  const navigate = useNavigate();
  const [isModelOpen, setIsModelOpen] = useState({
    isDeleteModule: false,
    isEditModule: false,
    isTemplateEdit: false,
  });
  const [openFilter, setOpenFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [templateDetails, setTemplateDetails] = useState([]);
  const [page, setPage] = useState(1);

  const { currentBrand } = useAspSelector((state) => state.app);

  const dispatch = useAspDispatch();

  const columnLength = templateTableHeaderList?.length;
  const tdStyle = {
    width: `calc(100% / ${columnLength})`,
  };

  const fetchTemplateLists = (brandId, payload) => {
    if (brandId) {
      dispatch(updateGlobalLoader(true));

      templateLists(brandId, payload)
        .then((res) => {
          if (res?.status === 200) {
            setTemplateDetails([...templateDetails, ...res?.data?.templates]);
            count = res?.data?.template_count;
            setPage(page + 1);
          }
        })
        .finally(() => {
          dispatch(updateGlobalLoader(false));
        });
    } else {
      setTemplateDetails([]);
    }
  };

  const loadNextPage = () => {
    fetchTemplateLists(currentBrand?.id, { page: page, limit: 10 });
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      if (templateDetails?.length < count) {
        loadNextPage();
      }
    }
  };
  useEffect(() => {
    fetchTemplateLists(currentBrand?.id, { page: page, limit: 10 });
  }, []);

  const handleSelect = (e, item) => {
    if (e === 'delete') {
      setIsModelOpen({ ...isModelOpen, isDeleteModule: true, row: item });
    } else if (e === 'templateEdit') {
      setIsModelOpen({ ...isModelOpen, isTemplateEdit: true, row: item });
    } else {
      setIsModelOpen({ ...isModelOpen, isEditModule: true, row: item });
    }
  };

  const templateSearch = (value) => {
    const name = `?name=${value}`;
    templateLists(currentBrand?.id, name).then((res) => {
      if (res?.status === 200) {
        // setTemplateDetails(res?.data);
      }
    });
  };

  const TemplateEditHeader = ({ title, status }) => {
    return (
      <div className='flex-row gap-2'>
        <img
          src={ICONS?.BellBox}
          alt='BellBox'
          className='my-auto'
        />
        <div className='flex-column justify-center'>
          <div>
            <div className='font-medium weight-medium'>{title}</div>
          </div>
          <div>
            <LabelText
              text={status}
              variety={'active'}
              padding='2px 4px'
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='w-100'>
      <div className='flex-row space-between mb-15 mt-15'>
        <div className='w-40 flex-row ml-20'>
          <Search searchingText={templateSearch} />
        </div>
        <div className='flex-row'>
          <span className='mr-10'>
            <Popover
              content={
                <CampaignFilter
                  setOpenFilter={setOpenFilter}
                  setShowFilter={setShowFilter}
                />
              }
              trigger='click'>
              {showFilter ? (
                <div
                  className='border-2 rounded-xl firstList-wrap-active flex-row ml-10'
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
            </Popover>
          </span>
          <Button
            size={'medium'}
            label={'Create template'}
            onClick={() => navigate('create-template')}
          />
        </div>
      </div>
      <div
        className='w-100  templateTableWrapper'
        style={{
          background: 'var(--BG-25)',
        }}
        onScroll={handleScroll}>
        <table
          style={{
            width: columnLength > 4 ? `${columnLength * 13.2}vw` : '100%',
            margin: 'auto',
          }}>
          <thead>
            <tr className='tableHeaderRow'>
              {templateTableHeaderList?.map((column) => (
                <th>{column?.name}</th>
              ))}
            </tr>
          </thead>
          {templateDetails?.map((item, i) => {
            return (
              <>
                {templateDetails ? (
                  <tr
                    className='listRow'
                    key={item?.id}
                    onClick={() => {}}>
                    <td>
                      <TableFirstColumn
                        item={item}
                        handleTableRow={handleSelect}
                      />
                    </td>
                    <td style={tdStyle}>
                      <div className='flex-row justify-center'>
                        <LabelText
                          text={item?.status}
                          variety={item?.status}
                        />
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <div className='flex-row justify-center '>{item?.category}</div>
                    </td>
                    <td style={tdStyle}>
                      <div className='flex-row justify-center '>
                        {getLanguageName(item?.language)}
                      </div>
                    </td>

                    {/* <td style={tdStyle}>
                  <div className='flex-row avatarRow justify-center'>{item?.msg_deliver}</div>
                </td>

                <td style={tdStyle}>
                  <div className='flex-row justify-center '>{item?.msg_red}</div>
                </td> */}
                  </tr>
                ) : (
                  <div className='no-data flex-row align-center justify-center'>No Data Found</div>
                )}
              </>
            );
          })}
        </table>
      </div>
      <ModelComponent
        isOpen={isModelOpen?.isDeleteModule}
        handleCancel={() => setIsModelOpen({ ...isModelOpen, isDeleteModule: false })}>
        <div className='flex-column align-center deleteTemplateContainer'>
          <img
            style={{ width: '36px', height: '36px' }}
            src={ICONS?.HighAlert}
            alt='alert'
          />
          <div className='font-large weight-medium mt-10'>
            Are you sure you want to delete your template?
          </div>
          <div className='flex-row space-around mt-10 w-40'>
            <Button
              className='btn cancelBtn'
              primary={false}
              size={'medium'}
              label={'No'}
              onClick={() => setIsModelOpen({ ...isModelOpen, isDeleteModule: false })}
            />
            <Button
              size={'medium'}
              label={'Yes'}
              onClick={() => setIsModelOpen({ ...isModelOpen, isDeleteModule: false })}
            />
          </div>
        </div>
      </ModelComponent>

      <ModelComponent
        isCustomHeader
        customHeader={
          <TemplateEditHeader
            title={isModelOpen?.row?.name}
            status={isModelOpen?.row?.status}
          />
        }
        isOpen={isModelOpen?.isTemplateEdit}
        handleCancel={() => setIsModelOpen({ ...isModelOpen, isTemplateEdit: false })}>
        <div className='flex-column align-center gap-2'>
          <div className='my-4 w-80 flex-column align-center pb-2 bg-[#f5ebe3]'>
            <div className='msgPrev leftTop'>
              <img
                alt='imgPrev'
                className='imagePreview'
                src={images?.ContentImage}
              />
              <p className='!ml-0 mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum quo, officiis,
              </p>
            </div>
          </div>
          <div className='flex-row gap-3'>
            <Button
              primary={false}
              size={'medium'}
              label={'Edit template'}
              onClick={
                () => setIsModelOpen({ ...isModelOpen, isTemplateEdit: false })
                // navigate(`/whatsapp/create-template/template-details`))
              }
            />
          </div>
        </div>
      </ModelComponent>
    </div>
  );
};
export default TemplateTable;
