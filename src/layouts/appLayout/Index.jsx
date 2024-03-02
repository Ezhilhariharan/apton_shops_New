import React, { useEffect } from 'react';
import './appLayout.css';

import { Outlet, useNavigate } from 'react-router-dom';

import SideBar from './SideBar';
import Header from './Header';
import Create from '../../components/commonComponents/create/Index';
import updateToken from '../../api/updateToken';

function Index({ children }) {
  const navigate = useNavigate();

  const TOKEN = localStorage.getItem('authToken');

  useEffect(() => {
    if (TOKEN) {
      // navigate('/home');
      // updateToken(TOKEN);
    } else {
      // navigate('/login');
    }
  }, []);

  return (
    <div className='appWrapper'>
      <Header />
      <section>
        <SideBar />
        <div className='mainLayout'>
          <Outlet />
          {children}
          <div className='campaignCreateWrapper'>
            <div className='CreateButtonWrapper flex-column space-between align-right'>
              <Create />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
