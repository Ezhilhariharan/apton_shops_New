import AspApi from './ApiConfig';

export const Logout = async () => await AspApi.post('v2/user/logout');

export const currentUserDetails = async () => await AspApi.get('v2/user/current_user');

export const preSendUrl = async (params) =>
  await AspApi.get(`v2/user/presigned_url?extension_name=.${params}`);
