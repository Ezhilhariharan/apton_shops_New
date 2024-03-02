import React from 'react';
import AccountMain from '../components/AccountMain';
import AccountPerson from '../components/AccountPerson';

const Account = () => {
  return (
    <div className='Account-Main'>
      <AccountMain />
      <AccountPerson />
    </div>
  );
};

export default Account;
