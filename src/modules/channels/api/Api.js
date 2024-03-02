import AspApi from '../../../api/ApiConfig';

export const channelListApi = async (params) =>
  await AspApi.get(`v2/user/channels?brand_id=${params}`);

export const metaConnection = async (params) => await AspApi.get(`v2/user/meta_auth?${params}`);

export const channelDisconnection = async (id) =>
  await AspApi.put(`v2/user/channel/disconnect/${id}`);

//Facebook Page

export const fbPageMetrics = async (params) =>
  await AspApi.get(`v2/user/facebook/page/metrics/${params}`);

export const fbPageAnalytics = async (params) =>
  await AspApi.get(`v2/user/facebook/page/audiences/${params}`);

export const fbPageConnectionStep2 = async (params) =>
  await AspApi.get(`v2/user/facebook/page_list?${params}`);

export const fbPageSelectedList = async (payLoad) =>
  await AspApi.post('v2/user/facebook/detail', payLoad);

//Facebook Group

export const fbGroupConnectionStep2 = async (params) =>
  await AspApi.get(`v2/user/facebook/groups?${params}`);

export const fbGroupSelectedList = async (payLoad) =>
  await AspApi.post('v2/user/facebook/groups', payLoad);

export const fbGroupAnalytics = async (params) =>
  await AspApi.get(`v2/user/fb_grp/detail/${params}`);

// whatsApp

export const whatsAppStep2 = async (params) =>
  await AspApi.get(`v2/user/whatsapp/business_list?${params}`);

export const whatsAppStep3 = async (params) =>
  await AspApi.get(`v2/user/whatsapp/business_accounts?${params}`);

export const whatsAppStep4 = async (params) =>
  await AspApi.get(`v2/user/whatsapp/business_numbers?${params}`);

export const whatsAppStep5 = async (payLoad) =>
  await AspApi.post('v2/user/whatsapp/detail', payLoad);

export const whatsAppProfileDetails = async (params) =>
  await AspApi.get(`/v2/user/whatsapp/profile/${params}`);

export const updateProfile = async (params) =>
  await AspApi.post(`/v2/user/whatsapp/profile/`, params);

export const metaLimits = async (id, params) =>
  await AspApi.get(`/v2/user/whatsapp/usage_limit/${id}?${params}`);

export const checkTemplateExits = async (id, params) =>
  await AspApi.get(`/v2/user/check_template/${id}/${params}`);

export const prospectsLists = async (id) => await AspApi.get(`v2/user/campaigns/prospects/${id}`);

// export const broadcastLists = async (id) => await AspApi.get(`v2/user/campaign_tasks/${id}`);

export const broadcastLists = async (brandId, query) => {
  let qpm = [];

  if (query.page) qpm.push(`page=${query.page}`);
  if (query.limit) qpm.push(`limit=${query.limit}`);

  let qpmString = '';
  if (qpm.length > 0) qpmString = '?' + qpm.join('&');

  const res = await AspApi.get(`v2/user/campaign_tasks/${brandId}${qpmString}`);
  return res;
};

// export const templateLists = async (id, { page, limit, ...params }) => {
//   const queryParams = new URLSearchParams({ page, limit, ...params }).toString();
//   const url = `/v2/user/templates/${id}${queryParams ? `?${queryParams}` : ''}`;

//   return await AspApi.get(url);
// };

export const templateLists = async (brandId, query) => {
  let qpm = [];

  if (query.page) qpm.push(`page=${query.page}`);
  if (query.limit) qpm.push(`limit=${query.limit}`);

  let qpmString = '';
  if (qpm.length > 0) qpmString = '?' + qpm.join('&');

  const res = await AspApi.get(`/v2/user/templates/${brandId}${qpmString}`);
  return res;
};

export const deleteTemplates = async (name) => await AspApi.get(`/v2/user/template/${name}`);

export const createAndUpdateTemplate = async (payLoad) =>
  await AspApi.post(`/v2/user/template`, payLoad);

//linkedin Page

export const linkedinPageConnection = async (params) =>
  await AspApi.get(`v2/user/linkedin_page/signup/${params}`);

export const linkedinPageStep2 = async (params) =>
  await AspApi.get(`v2/user/linkedin_pages?${params}`);

export const linkedinPageStep3 = async (payLoad) =>
  await AspApi.post('v2/user/linkedin_pages/detail', payLoad);

export const linkedinPageGraph = async (params) =>
  await AspApi.get(`v2/user/linkedin_page/analytics/${params}`);

//linkedin Profile

export const linkedinProfileConnection = async (params) =>
  await AspApi.get(`v2/user/linkedin/signup/${params}`);

export const linkedinMetrics = async (params) =>
  await AspApi.get(`v2/user/linkedin_profile/analytics/${params}`);

//Pinterest

export const pinterestConnection = async (params) =>
  await AspApi.get(`v2/user/pinterest/signup/${params}`);

export const pinterestStep2 = async (params) =>
  await AspApi.get(`v2/user/pinterest/boards?${params}`);

export const pinterestStep3 = async (params) =>
  await AspApi.post('v2/user/pinterest/detail', params);

export const pinterestMetrics = async (params) =>
  await AspApi.get(`v2/user/pinterest/metrics/${params}`);

//twitter

export const twitterConnection = async (params) =>
  await AspApi.get(`v2/user/twitter/signup/${params}`);

//instagram

export const instagramAnalytics = async (params) =>
  await AspApi.get(`v2/user/instagram/analytics/${params}`);
