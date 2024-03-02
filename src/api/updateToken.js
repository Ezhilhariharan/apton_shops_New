import AspApi from './ApiConfig';

const updateToken = (token) => {
  AspApi.defaults.headers.common['Authorization'] = token;
};

export default updateToken;
