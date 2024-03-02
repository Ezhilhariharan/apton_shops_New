import React, { useEffect, useState } from 'react';
import '../styles/home.css';

import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { homeLeftList } from '../../../constant/app/home/home';

import LeftList from '../../../components/commonComponents/leftListLayout/Index';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';

function Home({ children }) {
  const [pageNavigate, setPageNavigate] = useState('Overview');
  const { pathname } = useLocation();

  const dispatch = useAspDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateGlobalLoader(false));
  }, []);

  useEffect(() => {
    if (pathname === '/user/home/overview') {
      setPageNavigate('Overview');
    } else if (pathname === '/user/home/accountsetting') {
      setPageNavigate('Accounts settings');
    } else if (pathname === '/user/home/brandsetting') {
      setPageNavigate('Brand settings');
    }
  }, [pathname]);

  const pageNavigation = (item) => {
    setPageNavigate(item?.name);
    navigate(item?.link);
  };

  return (
    <div className='flex-row w-100 h-100'>
      <LeftList
        list={homeLeftList}
        activeNav={pageNavigate}
        onSelect={(item) => pageNavigation(item)}
      />

      <div
        className='home-rightLayout flex-row '
        style={{
          backgroundColor:
            pageNavigate === 'Overview' && `Brand settings && Accounts settings`
              ? 'inherit'
              : 'white',
        }}>
        <Outlet />
        {children}
      </div>
    </div>
  );
}

export default Home;
