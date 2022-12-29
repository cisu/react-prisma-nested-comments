import makeRequest from './makeRequest';

const getPosts = () => {
  return makeRequest('/posts', {});
};

export default getPosts;
