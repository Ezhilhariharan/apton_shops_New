import React from 'react';
import '../styles/account.css';

import { ContactDetailList } from '../../../constant/app/account/account';

import { Form } from 'antd';

import Label from '../../../components/form/label/label';
import { Input } from '../../../components/form/Input/Input';
import { useMemo } from 'react';

const ContactDetails = () => {
  const memoizedContactDetails = useMemo(() => {
    return (
      <>
        {ContactDetailList?.map((data) => (
          <div
            className='contact-container align-center'
            key={data?.id}>
            <Label
              title={data?.name}
              required={data?.name === 'Mobile number' || data?.name === 'Email'}></Label>
            <Form.Item
              name={`${data?.id}`}
              rules={[
                {
                  required: true,
                  message: `${data?.name} is required!`,
                },

                data?.name === 'Mobile number' && {
                  pattern: /^[0-9]{10}$/,
                  message: 'Invalid mobile number!',
                },
                data?.name === 'Email' && {
                  pattern: /.*@.*/,
                  message: 'Invalid email address! Must contain "@" symbol.',
                },
              ]}>
              <Input
                type='text'
                placeholder={data?.content}
                iconPrefix={data?.icon}
                iconPrefixStyle={{ width: '15px', height: '15px' }}
                style={{ height: '4vh' }}
              />
            </Form.Item>
          </div>
        ))}
      </>
    );
  }, [ContactDetailList]);
  return (
    <div className='person flex-row space-between '>
      <div className='Personal-Info'>
        <div className='Personal-container'>
          <span>Contact information</span>
        </div>
      </div>
      <Form>
        <div className='Left-container flex-column '>
          <div className=' password-detail'>{memoizedContactDetails}</div>
        </div>
      </Form>
    </div>
  );
};

export default ContactDetails;
