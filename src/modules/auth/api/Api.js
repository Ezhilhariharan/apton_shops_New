import AspApi from '../../../api/ApiConfig';

export const Login = async (payLoad) => await AspApi.post('v2/user/login', payLoad);

export const SignUp = async (payLoad) => await AspApi.post('v2/user/signup', payLoad);

export const otpValidate = async (payLoad) => await AspApi.post('v2/user/otp/validate', payLoad);

export const forgotPassword = async (payLoad) =>
  await AspApi.post('v2/user/forgot_password', payLoad);

export const resetPassword = async (payload) =>
  await AspApi.post('v2/user/change_password', payload);

export const passwordLinkValidate = async (params) =>
  await AspApi.get(`v2/user/password/link_validate?token=${params}`);
