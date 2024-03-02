import React, { useEffect, useState } from 'react';
import '../components/ConnectionPopup/connectionPopup.css';

import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import LeftList from '../../../components/commonComponents/leftListLayout/Index';
import ChannelHeader from '../components/whatsapp/whatsappHeader';

import { channelList as channelListDefault } from '../../../constant/app/campaign/campaign';
import useDidMountEffect from '../../../hooks/useDidMountEffect';

import { Button } from '../../../components/form/Button/Button';

import {
  channelListApi,
  metaConnection,
  twitterConnection,
  linkedinProfileConnection,
  linkedinPageConnection,
  pinterestConnection,
} from '../api/Api';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateChannelList } from '../../../reduxToolkit/channelSlice';
import { updateGlobalLoader } from '../../../reduxToolkit/appSlice';

function ListOfChannels() {
  const [connected, setConnected] = useState(false);
  const [buttonName, setButtonName] = useState('Connect Facebook Page');
  const [channelListPath, setChannelListPath] = useState('');
  const [activeTabName, setActiveTabName] = useState('Facebook Pages');

  const dispatch = useAspDispatch();
  const { currentBrand } = useAspSelector((state) => state.app);
  const { channelList } = useAspSelector((state) => state?.Channel);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    initialBlur();
    updateTabName();
    updateBlur();
  }, []);

  useEffect(() => {
    setConnected(false);
    updateTabName();
    updateBlur();
  }, [activeTabName]);

  useEffect(() => handleChannelListApi(), [currentBrand, connected]);

  useEffect(() => updateBlur(), [channelList]);

  const initialBlur = () => {
    if (
      pathname == '/user/channels/facebookpage/list' ||
      pathname == '/user/channels/facebookgroup/list' ||
      pathname == '/user/channels/instagram/list' ||
      pathname == '/user/channels/whatsapp/list' ||
      pathname == '/user/channels/twitter/list' ||
      pathname == '/user/channels/pinterest/list' ||
      pathname == '/user/channels/linkedinpage/list' ||
      pathname == '/user/channels/linkedinprofile/list'
    ) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  };

  const updateBlur = () => {
    const selectedTab = channelList?.filter((list) => list?.name === activeTabName);
    if (
      pathname == '/user/channels/facebookpage/list' ||
      pathname == '/user/channels/facebookgroup/list' ||
      pathname == '/user/channels/instagram/list' ||
      pathname == '/user/channels/whatsapp/list' ||
      pathname == '/user/channels/twitter/list' ||
      pathname == '/user/channels/pinterest/list' ||
      pathname == '/user/channels/linkedinpage/list' ||
      pathname == '/user/channels/linkedinprofile/list'
    ) {
    } else {
      selectedTab?.length > 0 && selectedTab[0]?.apiData?.status === 1
        ? setConnected(true)
        : setConnected(false);
    }
  };

  const updateTabName = () => {
    const currentChannelName = pathname?.split('/')[3];
    switch (currentChannelName) {
      case 'facebookpage':
        setActiveTabName('Facebook Pages');
        setButtonName('Connect Facebook Page');
        setChannelListPath('facebookpage/list');
        break;
      case 'facebookgroup':
        setActiveTabName('Facebook Groups');
        setButtonName('Connect Facebook Group');
        setChannelListPath('facebookgroup/list');
        break;
      case 'twitter':
        setActiveTabName('Twitter');
        setButtonName('Connect Twitter');
        setChannelListPath('twitter/list');
        break;
      case 'instagram':
        setActiveTabName('Instagram');
        setButtonName('Connect Instagram Business');
        setChannelListPath('instagram/list');
        break;
      case 'whatsapp':
        setActiveTabName('WhatsApp');
        setButtonName('Connect Whatsapp');
        setChannelListPath('whatsapp/list');
        break;
      case 'pinterest':
        setActiveTabName('Pinterest');
        setButtonName('Connect Pinterest');
        setChannelListPath('pinterest/list');
        break;
      case 'linkedinpage':
        setActiveTabName('Linkedin Pages');
        setButtonName('Connect LInkedIn Page');
        setChannelListPath('linkedinpage/list');
        break;
      case 'linkedinprofile':
        setActiveTabName('Linkedin Profile');
        setButtonName('Connect LinkedIn Profile');
        setChannelListPath('linkedinprofile/list');
        break;
      default:
        break;
    }
  };

  const handleChannelListApi = () => {
    dispatch(updateGlobalLoader(true));
    channelListApi(currentBrand?.id).then((res) => {
      dispatch(updateGlobalLoader(false));
      if (res?.status === 200) {
        mergingData(res?.data?.channels);
      }
    });
  };

  const mergingData = (data) => {
    let merging = [];
    channelListDefault?.map((parent) => {
      data?.map((child) => {
        if (child?.name == parent?.name) {
          merging?.push({
            ...parent,
            apiData: child,
          });
        }
      });
    });
    dispatch(updateChannelList(merging));
  };

  const connectChannel = (pageName) => {
    dispatch(updateGlobalLoader(true));
    const redirect_uri = `&redirect_uri=https://preprod.aptonworks.com/user/channels/${channelListPath}`;
    const brand_id = `brand_id=${currentBrand?.id}`;
    const redirect_url = `&redirect_url=https://preprod.aptonworks.com/user/channels/${channelListPath}`;
    if (pageName == 'Connect Facebook Page') {
      const reference_url = `&reference_url=https://preprod.aptonworks.com/user/channels/facebookpage`;
      const connection_name = `&connection_name=Facebook Pages`;
      metaConnect(`${brand_id}${reference_url}${redirect_uri}${connection_name}`);
    } else if (pageName == 'Connect Facebook Group') {
      const reference_url = `&reference_url=https://preprod.aptonworks.com/user/channels/facebookgroup`;
      const connection_name = `&connection_name=Facebook Groups`;
      metaConnect(`${brand_id}${reference_url}${redirect_uri}${connection_name}`);
    } else if (pageName == 'Connect Instagram Business') {
      const reference_url = `&reference_url=https://preprod.aptonworks.com/user/channels/instagram`;
      const connection_name = `&connection_name=Instagram`;
      metaConnect(`${brand_id}${reference_url}${redirect_uri}${connection_name}`);
    } else if (pageName == 'Connect Whatsapp') {
      const reference_url = `&reference_url=https://preprod.aptonworks.com/user/channels/whatsapp`;
      const connection_name = `&connection_name=WhatsApp`;
      metaConnect(`${brand_id}${reference_url}${redirect_uri}${connection_name}`);
    } else if (pageName == 'Connect Twitter') {
      const params = `${currentBrand?.id}?reference_url=https://preprod.aptonworks.com/user/channels/twitter`;
      twitterConnection(params).then((res) => {
        dispatch(updateGlobalLoader(false));
        if (res?.status === 200) {
          reDirect(res?.data?.redirect_url);
        }
      });
    } else if (pageName == 'Connect Pinterest') {
      const params = `${currentBrand?.id}?reference_url=https://preprod.aptonworks.com/user/channels/pinterest${redirect_url}`;
      pinterestConnection(params).then((res) => {
        dispatch(updateGlobalLoader(false));
        if (res?.status === 200) {
          reDirect(res?.data?.redirect_url);
        }
      });
    } else if (pageName == 'Connect LInkedIn Page') {
      const params = `${currentBrand?.id}?reference_url=https://preprod.aptonworks.com/user/channels/linkedinpage${redirect_url}`;
      linkedinPageConnection(params).then((res) => {
        dispatch(updateGlobalLoader(false));
        if (res?.status === 200) {
          reDirect(res?.data?.redirect_url);
        }
      });
    } else if (pageName == 'Connect LinkedIn Profile') {
      const params = `${currentBrand?.id}?reference_url=https://preprod.aptonworks.com/user/channels/linkedinprofile`;
      linkedinProfileConnection(params).then((res) => {
        dispatch(updateGlobalLoader(false));
        if (res?.status === 200) {
          reDirect(res?.data?.redirect_url);
        }
      });
    }
  };

  const metaConnect = (payLoad) => {
    metaConnection(payLoad).then((res) => {
      dispatch(updateGlobalLoader(false));
      if (res?.status === 200) {
        reDirect(res?.data?.redirect_url);
      }
    });
  };

  const reDirect = (path) => {
    window.location.href = path;
    setTimeout(() => setConnected(true), 1000);
  };

  const navListSelect = (val) => setActiveTabName(val?.name);

  return (
    <div className='flex-row campaignWrapper'>
      <LeftList
        list={channelListDefault}
        activeNav={activeTabName}
        onSelect={navListSelect}
      />
      <div className='campaign-rightLayout'>
        {!connected && (
          <div className='confirmationModal'>
            <div className='btnContainer'>
              <div>
                You have not connected any account yet, <br />
                click on the button to get started.
              </div>
              <Button
                onClick={() => connectChannel(buttonName)}
                className='connectButton'
                size={'medium'}
                label={buttonName}
              />
            </div>
          </div>
        )}
        <div className={`${!connected ? 'greyBg' : ''}`}></div>
        <ChannelHeader
          activeTab={activeTabName}
          setConnected={setConnected}
        />
        <Outlet />
      </div>
    </div>
  );
}
export default ListOfChannels;
