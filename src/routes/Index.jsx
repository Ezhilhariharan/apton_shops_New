import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Error from '../modules/error/Index';

// auth

import SignUp from '../modules/auth/pages/SignUp';
import Login from '../modules/auth/pages/Login';
import ForgotPassword from '../modules/auth/pages/ForgotPassword';
import ResetPassword from '../modules/auth/pages/ResetPassword';
import AuthLayout from '../layouts/authLayout/Index';

// app

// import Onboarding from '../modules/onboarding/pages/Onboarding';
import AppLayout from '../layouts/appLayout/Index';
import Campaign from '../modules/campaign/pages/Campaign';
// import OKR from '../modules/OKR/pages/Index';
import CampaignOverview from '../modules/campaign/pages/CampaignOverview';
import CampaignList from '../modules/campaign/components/CampaignList';
// import Task from '../modules/Task/pages/TaskCampaign';
import TaskRight from '../modules/Task/pages/TaskRightLayout';
import Home from '../modules/home/pages/Home';
import Overview from '../modules/home/pages/Overview';
import BrandSettings from '../modules/home/pages/BrandSettings';
import Account from '../modules/home/pages/Account';
import Inbox from '../modules/inbox/pages/Inbox';
import ListOfChannels from '../modules/channels/page/Channels';
import CreateTemplateWA from '../modules/channels/components/CreateTemplate/createTemplateWA';
import TemplateDetails from '../modules/channels/components/TemplateDetails';
import FaceBookPage from '../modules/channels/page/FacebookPage/index';
import FaceBookGroup from '../modules/channels/page/FacebookGroup/index';
import TwitterView from '../modules/channels/page/Twitter/index';
import Instagram from '../modules/channels/page/instagram/index';
import WhatsApp from '../modules/channels/page/whatsapp/Whatsapp';
import Pinterest from '../modules/channels/page/Pinterest/index';
import LinkedInPage from '../modules/channels/page/LinkedInPage/index';
import LinkedInProfile from '../modules/channels/page/LinkedInProfile/index';
import ChannelsConnect from '../modules/channels/components/ConnectionPopup/popup';
import Calender from '../modules/calender/pages/calender';
import BroadCastView from '../modules/channels/page/broadcast/index';

function Index() {
  const TOKEN = localStorage.getItem('authToken');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='*'
          element={<Navigate to={TOKEN ? '/user/home/overview' : '/login'} />}
        />
        <Route
          path='/404'
          element={<Error />}
        />
        <Route element={<AuthLayout />}>
          <Route
            path='/signup'
            element={<SignUp />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='/reset-password'
            element={<ResetPassword />}
          />
        </Route>
        <Route element={<AppLayout />}>
          {/* <Route
            path='/dashboard'
            element={<Onboarding />}
          /> */}
          <Route
            path='/user/home'
            element={<Home />}>
            <Route
              path='overview'
              element={<Overview />}
            />
            <Route
              path='brandsetting'
              element={<BrandSettings />}
            />
            <Route
              path='accountsetting'
              element={<Account />}
            />
          </Route>
          <Route
            path='/user'
            element={<Campaign />}>
            <Route
              path='campaign'
              element={<CampaignList />}
            />
            <Route
              path='campaign/overview/:id'
              element={<CampaignOverview />}
            />
            <Route
              path='campaign/overview/whatsapp/:campaignId/:taskId'
              element={<TaskRight />}
            />
          </Route>
          <Route
            path='/user/calender'
            element={<Calender />}
          />
          {/* <Route
            path='/user/okr'
            element={<OKR />}
          />
          <Route
            path='/user/task'
            element={<Task />}
          /> */}
          <Route
            path='/user/channels'
            element={<ListOfChannels />}>
            <Route
              path='facebookpage'
              element={<FaceBookPage />}
            />
            <Route
              path='facebookgroup'
              element={<FaceBookGroup />}
            />
            <Route
              path='instagram'
              element={<Instagram />}
            />
            <Route
              path='twitter'
              element={<TwitterView />}
            />
            <Route
              path='whatsapp'
              element={<WhatsApp />}
            />
            <Route
              path='whatsapp/broadcast/:broadCastId'
              element={<BroadCastView />}
            />
            <Route
              path='whatsapp/create-template'
              element={<CreateTemplateWA />}
            />
            <Route
              path='whatsapp/create-template/template-details'
              element={<TemplateDetails />}
            />
            <Route
              path='pinterest'
              element={<Pinterest />}
            />
            <Route
              path='linkedinpage'
              element={<LinkedInPage />}
            />
            <Route
              path='linkedinprofile'
              element={<LinkedInProfile />}
            />
            <Route
              path='facebookpage/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='facebookgroup/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='instagram/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='linkedinpage/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='linkedinprofile/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='whatsapp/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='pinterest/list'
              element={<ChannelsConnect />}
            />
            <Route
              path='twitter/list'
              element={<ChannelsConnect />}
            />
          </Route>
          <Route
            path='/user/inbox'
            element={<Inbox />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
