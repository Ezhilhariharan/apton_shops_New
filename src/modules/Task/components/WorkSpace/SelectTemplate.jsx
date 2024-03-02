import React, { useEffect, useState } from 'react';

import { selectTemplate } from '../../../../constant/app/campaign/campaignExtended';

import { ICONS } from '../../../../assets/icons/index';
import WhatsappSearch from '../../../../components/commonComponents/whatsappSearch/WhatsappSearch';

import { templateLists } from '../../../channels/api/Api';

import { useAspSelector, useAspDispatch } from '../../../../test/jest-redux-hooks';
import { updateGlobalLoader } from '../../../../reduxToolkit/appSlice';

const SelectTemplate = ({ SetVariableAction, handleHeaderClick }) => {
  const [templateDetails, setTemplateDetails] = useState([]);

  const { currentBrand } = useAspSelector((state) => state.app);
  const [page, setPage] = useState(1);

  const dispatch = useAspDispatch();

  const fetchTemplateLists = (brandId, payload) => {
    if (brandId) {
      dispatch(updateGlobalLoader(true));

      templateLists(brandId, payload)
        .then((res) => {
          if (res?.status === 200) {
            setTemplateDetails([...templateDetails, ...res?.data?.templates]);
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
    const nextPage = page + 1;
    fetchTemplateLists(currentBrand?.id, { page: nextPage, limit: 10 });
    setPage(nextPage);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      loadNextPage();
    }
  };

  useEffect(() => {
    fetchTemplateLists(currentBrand?.id, { page: page, limit: 10 });
  }, []);

  const templateSearch = (value) => {
    const name = `?name=${value}`;
    templateLists(currentBrand?.id, name).then((res) => {
      if (res?.status === 200) {
        // setTemplateDetails(res?.data);
      }
    });
  };
  return (
    <div
      className='search'
      onClick={() => handleHeaderClick('footer')}
      onScroll={handleScroll}>
      <div
        className='search-template-container flex-column p-10  '
        style={{}}>
        <div className=' search-container flex-row align-center  '>
          <img
            src={ICONS?.searchLightIcon}
            alt='searchIcon'
          />
          <WhatsappSearch
            placeholder={'Search template'}
            templateSearch={templateSearch}
          />
        </div>
      </div>
      <div
        className='search-template-menu flex-column'
        style={{}}>
        {templateDetails?.map((data) => {
          return (
            <div
              className=' search-template-info flex-row align-center'
              key={data?.id}
              onClick={() => SetVariableAction(data)}>
              <p>{data?.name}</p>
              <span
                className='status-color flex align-center justify-center '
                style={{
                  color: data?.category === 'MARKETING' ? '#ED4F9D' : '#f6a723',
                  background: data?.category === 'MARKETING' ? '#fdf2f8' : '#FFFBEB',
                }}>
                {data?.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectTemplate;
