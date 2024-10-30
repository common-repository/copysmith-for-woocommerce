import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTags = () => new Promise((resolve, reject) => {
  axios.get('/?rest_route=/copysmith/v1/product/tags')
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    });
});

const useTags = () => {
  return useQuery(
    'tags',
    () => fetchTags()
  );
};

export default useTags;