import { preSendUrl } from '../api/Api';

export const uploadFile = async (file) => {
  let type = file?.name?.split('.').pop();

  const apiResponse = await preSendUrl(type).then((res) => {
    if (res?.status === 200) {
      let fileType = '';
      switch (type) {
        case 'mp4':
          fileType = 'video/mp4';
          break;
        case 'png':
          fileType = 'image/png';
          break;
        case 'jpg':
        case 'jpeg':
          fileType = 'image/jpeg';
          break;
        case 'pdf':
          fileType = 'application/pdf';
          break;
        case 'xlsx':
          fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          break;
        default:
          fileType = null;
      }
      return res?.data?.response && fileType && file
        ? getUrl(res?.data?.response, fileType, file)
        : undefined;
    }
  });
  return apiResponse;
};

const getUrl = async (url, fileType, file) => {
  let responseData = '';

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        contentType: fileType,
      },
      body: file,
    });
    responseData =
      response?.ok && response?.status === 200 ? response?.url?.split('?').shift() : undefined;
  } catch (error) {
    console.error('Error during file upload:', error?.message);
    responseData = undefined;
  }

  return responseData;
};
