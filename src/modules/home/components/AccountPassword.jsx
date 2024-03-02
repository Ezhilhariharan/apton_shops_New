import React, { useState } from 'react';
import '../styles/account.css';

import { ICONS } from '../../../assets/icons/index';
import { Button } from '../../../components/form/Button/Button';

import { PasswordList } from '../../../constant/app/account/account';
import { Input } from '../../../components/form/Input/Input';
import Label from '../../../components/form/label/label';
import { Form } from 'antd';

const AccountPassword = ({ iconSuffixPassword }) => {
  const [Password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const setClick = () => {
    setVisible(!visible);
  };
  return (
    <div className='Personal-Info flex-row space-between '>
      <div className='Personal-container'>
        <span>Password Settings</span>
      </div>
      <Form>
        <div className='Left-container flex-column'>
          <div className=' password-detail'>
            {PasswordList?.map((item) => (
              <div
                className='password-wrapper '
                key={item?.id}>
                <Label
                  title={item?.name}
                  required></Label>
                <Form.Item name={`${item?.id}`}>
                  <Input
                    value={Password}
                    type={visible ? 'text' : 'Password'}
                    placeholder={item?.content}
                    iconPrefix={ICONS?.passwordLock}
                    iconSuffixPassword={ICONS.passwordEyeOpen}
                    iconPrefixStyle={{ width: '16px', height: '16px' }}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                    style={{
                      height: '4vh',
                    }}></Input>
                </Form.Item>
              </div>
            ))}
            <div className='password-button p-10 flex-row flex-end space-between align-center '>
              <button className='cancel-button'>Cancel</button>

              <Button
                label={'Change Password'}
                size={'medium'}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AccountPassword;
