import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

const makeRequest = (url:string, options: {}):  Promise<Array<any>> => {
  return api(url, options)
    .then(res => res.data)
    .catch(error => Promise.reject(error?.response?.data?.message ?? 'Error'));
};

export default makeRequest;
