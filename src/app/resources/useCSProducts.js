import { useQuery, useQueryClient } from 'react-query';

import { getJwtValue } from '../services/jwt.service';
import api from '../api/api';

const fetchProducts = (externalId) => new Promise((resolve, reject) => {
  const apiToken = getJwtValue();

  if(!apiToken) {
    return resolve();
  }

  api.files.list({
    externalIds: [externalId]
  })
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useCSProducts = (externalId) => {
  
  const queryClient = useQueryClient();

  return useQuery(
    ['cs.products', {id: externalId}],
    () => fetchProducts(externalId),
    {
      keepPreviousData: true,
      onSuccess: (data, variables, context) => {
      }
    }
  );
};

export default useCSProducts;