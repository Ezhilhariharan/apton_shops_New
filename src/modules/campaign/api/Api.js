import AspApi from 'api/ApiConfig';

export const createCampaignApi = async (params, payLoad) =>
  await AspApi.post(`v2/user/campaign/create/${params}`, payLoad);

export const sendMessageApi = async (payLoad) =>
  await AspApi.post(`v2/user/campaign/send_message`, payLoad);

export const campaignTaskCreate = async (id, payLoad) =>
  await AspApi.post(`v2/user/campaign/task/${id}`, payLoad);

export const campaignTaskList = async (id) => await AspApi.get(`v2/user/campaign/task/${id}`);

export const broadcastTransactions = async (id) =>
  await AspApi.get(`/v2/user/campaign_task/transactions/${id}`);

export const campaignDelete = async (id) => await AspApi.delete(`/v2/user/campaign/${id}`);

export const campaignListApi = async (brandId, query) => {
  let qpm = [];

  if (query.name) qpm.push(`name=${query.name}`);
  if (query.page) qpm.push(`page=${query.page}`);
  if (query.limit) qpm.push(`limit=${query.limit}`);

  let qpmString = '';
  if (qpm.length > 0) qpmString = '?' + qpm.join('&');

  const res = await AspApi.get(`/v2/user/campaigns/${brandId}${qpmString}`);

  return res.data;
};
