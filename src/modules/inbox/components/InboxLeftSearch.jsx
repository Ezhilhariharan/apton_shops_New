import React from 'react';
import '../styles/inbox.css';

import ListViewSearch from '../../../components/commonComponents/ListViewHeader/ListViewSearch';
import Conversations from './Conversations';
import ConversationList from './ConversationList';
import MiddleHeader from './MiddleHeader';
import InboxRight from './inboxRight';
import MiddleBody from './MiddleBody';
import MiddleFooter from './MiddleFooter';

const InboxLeftSearch = () => {
  return (
    <div>
      <div className='list-view'>
        <ListViewSearch />
      </div>
      <div className='flex-row'>
        <div className='inbox-left-container flex-row'>
          <div className='inbox-left-main-container flex-column'>
            <Conversations />
            <ConversationList />
          </div>

          <div className='inbox-left-middle-container flex-column'>
            <MiddleHeader />
            <MiddleBody />
            <MiddleFooter />
          </div>
        </div>
        <div className='inbox-right-main-container'>
          <InboxRight />
        </div>
      </div>
    </div>
  );
};

export default InboxLeftSearch;
