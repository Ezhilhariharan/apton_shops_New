import React, { useState } from 'react';
import '../styles/account.css';

import ContactDetails from '../components/ContactDetails';

import { Form } from 'antd';

import { Input } from '../../../components/form/Input/Input';
import Label from '../../../components/form/label/label';
import { Button } from '../../../components/form/Button/Button';

import AccountPassword from './AccountPassword';
import CustomTextArea from '../../../components/form/TextArea';

const AccountPerson = () => {
  const [value, setValue] = useState('');
  const [form] = Form.useForm();
  // const initialText = `Enter text`;
  const onFinish = () => {};
  return (
    <div className='Account-settingMain flex-row space-between '>
      <div className=' AccountMain-container  flex-column space-betweens'>
        <Form>
          <div className=' person space-between flex-row'>
            <div className='Personal-Info flex-row space-between '>
              <div className='Personal-container flex-row'>
                <span>Personal</span>
              </div>
            </div>
            <div className='Left-container flex-column'>
              <div className=' space-between flex-colum '>
                <div className='Personal-left flex-row space-between'>
                  <div className='label-details flex-row  space-between'>
                    <div className='label-container flex-column'>
                      <Label
                        title='First Name'
                        required></Label>
                      <Form.Item className='input'>
                        <Input
                          placeholder={'Vidya'}
                          style={{ height: '4svh' }}
                        />
                      </Form.Item>
                    </div>
                    <div className='flex-column'>
                      <Label
                        title='Last Name'
                        required
                      />

                      <Form.Item className='input'>
                        <Input
                          placeholder={'Dayal'}
                          style={{ height: '4vh' }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <div className='About'>
                  <span className='flex-column'>About me</span>
                  <div
                    className='about-container flex-row align-center'
                    onFinish={onFinish}>
                    <div className='w-100'>

                      {/* <Input
                        placeholder='Enter text'
                        maxLength={510}
                      /> */}
                      <CustomTextArea
                        maxLength={510}
                        autoSize={{ minRows: 3, maxRows: 3 }}
                        placeholder='Enter text'
                        textAreaClass='accountText'
                        className='textarea'

//                       <textarea
//                         placeholder={'Text me'}
//                         value={value}
//                         onChange={(e) => setValue(e.target.value)}

                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactDetails />
          <div className='button  flex-row flex-end p-10  space-between align-center '>
            <button className='cancel-button'>Cancel</button>

            <Button
              label={'Save'}
              size={'small'}
            />
          </div>
          <div className='border'>
            <AccountPassword />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccountPerson;
