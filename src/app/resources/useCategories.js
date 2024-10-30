import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCategories = () => new Promise((resolve, reject) => {
  axios.get('/?rest_route=/copysmith/v1/product/categories')
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    });
});

const useCategories = () => {
  return useQuery(
    'categories',
    () => fetchCategories()
  );
};

export default useCategories;