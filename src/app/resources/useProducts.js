import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchProducts = ({category, tag, search, status, page}) => new Promise((resolve, reject) => {
  axios.get(`/?rest_route=/copysmith/v1/products&category=${category}&tag=${tag}&search=${search}&status=${status}&page=${page}`)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    });
});

const useProducts = (filters) => {
  return useQuery(
    ['products', filters],
    () => fetchProducts(filters)
  );
};

export default useProducts;