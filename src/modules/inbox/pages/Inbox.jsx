import React, { useState } from 'react';
import '../styles/inbox.css';

import { leftInboxList } from '../../../constant/app/inbox/Inbox';

import InboxLeft from '../../../components/commonComponents/inboxLeftListLayout/Index';
import InboxLeftSearch from '../components/InboxLeftSearch';
import Empty from '../components/Empty';

const Inbox = () => {
  const [pageNavigate, setPageNavigate] = useState('Gochew Grill');

  return (
    <div className='flex-row w-100 h-100'>
      <InboxLeft
        list={leftInboxList}
        activeNave={pageNavigate}
        onSelect={(item) => setPageNavigate(item.name)}
      />
      <div className='inbox-rightLayout'>
        <div className='inbox-rightLayout-container '>
          {pageNavigate === 'Gochew Grill' && <InboxLeftSearch />}
        </div>

        <div className='inbox-rightLayout-container flex-column align-center justify-center'>
          {/* <Empty /> */}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
