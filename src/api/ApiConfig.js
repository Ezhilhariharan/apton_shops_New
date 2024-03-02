import axios from 'axios';

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

const { ASP_API_URL } = process.env;

const baseURL = 'https://api.aptonworks.com/';

const AspApi = axios.create({
  baseURL: ASP_API_URL || baseURL,
  headers,
});

AspApi.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: localStorage.getItem('authToken'),
    };
    return config;
  },

  (error) => {
    console.log(error);
    return error;
  },
);

AspApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error);
    if (
      error?.response?.data?.error === 'Token not logged in' ||
      error?.response?.data?.error === 'No active session found' ||
      error?.response?.data?.error === 'Token expired'
    ) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
      return error;
    } else return error;
  },
);

export default AspApi;
