import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
  signUp: {
    professionalIdentity: '',
    email: '',
    password: '',
    termsAndService: '',
    verifyCode: '',
    step: 0,
  },
  resetPasswordEmail: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    updateSignUpSteps: (state, action) => {
      state.signUp = action.payload;
    },
    updateResetPasswordEmail: (state, action) => {
      state.resetPasswordEmail = action.payload;
    },
  },
});

export const { updateAuthToken, updateSignUpSteps, updateResetPasswordEmail } = authSlice.actions;

export default authSlice.reducer;
