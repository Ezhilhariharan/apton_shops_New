import React, { useEffect, useState } from 'react';
import '../style/SignUp.css';

import { useAspSelector, useAspDispatch } from '../../../test/jest-redux-hooks';
import { updateSignUpSteps } from '../../../reduxToolkit/authSlice';

import { cardData } from '../../../constant/auth/auth';
import { ICONS } from '../../../assets/icons/index';

import { Card } from '../../../components/commonComponents/Cards/Card';
import { Button } from '../../../components/form/Button/Button';
import Tooltip from '../../../components/commonComponents/tooltip/Tooltip';
import { AuthCard } from './AuthCard';

//style
const button = {
  margin: '25px 0 15px 0',
};

function Step1() {
  const [cardDetails, setCardDetails] = useState(cardData);

  const dispatch = useAspDispatch();
  const { signUp } = useAspSelector((state) => state.authentication);

  const navigate = () => dispatch(updateSignUpSteps({ ...signUp, step: 1 }));

  useEffect(() => {
    if (signUp?.step === 0 && signUp?.professionalIdentity !== '') {
      updateState(signUp?.professionalIdentity, true);
    }
  }, [signUp?.step]);

  const selectedIdentity = (e) => {
    updateState(e.target.value, e.target.checked);
  };

  const updateState = (val, checked) => {
    setCardDetails((prev) => {
      const newState = prev?.map((item) => {
        if (item?.value === val) {
          if (checked) {
            dispatch(updateSignUpSteps({ ...signUp, professionalIdentity: val }));
          } else {
            dispatch(updateSignUpSteps({ ...signUp, professionalIdentity: '' }));
          }
          return checked ? { ...item, selected: true } : { ...item, selected: false };
        } else {
          return { ...item, selected: false };
        }
      });
      return newState;
    });
  };

  return (
    <>
      <p className='step1Sentence'>Please select your professional identity.</p>

      {cardDetails?.map((card, index) => {
        return (
          <Card
            key={index}
            hoverCard='hover-card'
            title={card?.value}
            cardClick={updateState}
            selected={card?.selected}
            margin={'30px 0 0 0'}
            padding={'13px 16px'}
            primary>
            <AuthCard
              title={card?.title}
              content={card?.content}
              image={card?.image}
              selected={card?.selected}
              cardItem={card}
              onClick={selectedIdentity}
              radio
            />
          </Card>
        );
      })}

      {signUp?.professionalIdentity !== '' ? (
        <Button
          onClick={navigate}
          iconSuffix={ICONS.whiteRightIcon}
          size='large'
          label={`Get Started`}
          style={button}
        />
      ) : (
        <Tooltip title={'Kindly Select the Identity'}>
          <Button
            size='large'
            label={`Get Started`}
            iconSuffix={ICONS.whiteRightIcon}
            style={button}
          />
        </Tooltip>
      )}
    </>
  );
}

export default Step1;
