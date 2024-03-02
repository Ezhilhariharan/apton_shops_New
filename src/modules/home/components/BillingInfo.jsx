import React, { useState } from 'react';

import { Button } from '../../../components/form/Button/Button';

import { Form } from 'antd';

import { Input } from '../../../components/form/Input/Input';
import Label from '../../../components/form/label/label';
import { ICONS } from '../../../assets/icons/index';

import { BrandList } from '../../../constant/app/Brand/brand';

const BillingInfo = () => {
  const [value, setValue] = useState(false);
  const handleChange = () => {
    setValue(!value);
  };
  return (
    <div className='Billing-container flex-column space-between'>
      <div className='Billing-wrapper flex-row space-between align-center '>
        <p>Billing Information</p>

        <div onClick={() => handleChange()}>
          {value ? (
            <Button
              label={'Save'}
              size={'small'}
            />
          ) : (
            <Button
              iconPrefix={ICONS.BrandEditIcon}
              label={'Edit'}
              size={'small'}
            />
          )}
        </div>
      </div>
      <Form>
        <div className='Bill-details flex-row  space-between'>
          <div className='Brand-details'>
            {BrandList?.slice(0, 4)?.map((data) => (
              <div key={data?.id}>
                <Label title={data?.name} />

                <Form.Item
                  name={`${data?.id}`}
                  rules={[
                    data?.name === 'Phone number' && {
                      pattern: /^[0-9]{10}$/,
                      message: 'Invalid mobile number!',
                    },
                    data?.name === 'Zip/Postal code' && {
                      pattern: /^[0-9]{6}$/,
                      message: 'Invalid post code',
                    },
                  ]}>
                  <Input
                    type='text'
                    placeholder={data?.content}
                    style={{ height: '4vh' }}
                  />
                </Form.Item>
              </div>
            ))}
          </div>
          <div className='Brand-details'>
            {BrandList?.slice(4, 7)?.map((data) => (
              <div key={data?.id}>
                <Label title={data?.name} />
                <Form.Item
                  name={`${data?.id}`}
                  rules={[
                    data?.name === 'Email' && {
                      pattern: /.*@.*/,
                      message: 'Invalid email address! Must contain "@" symbol.',
                    },
                  ]}>
                  <Input
                    placeholder={data?.content}
                    style={{ height: '4vh' }}
                  />
                </Form.Item>
              </div>
            ))}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BillingInfo;
