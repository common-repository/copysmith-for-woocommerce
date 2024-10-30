import { useQuery } from "react-query";

import api from '../api/api';
import { getJwtValue } from '../services/jwt.service';

const fetchCompany = () => new Promise((resolve, reject) => {

  const apiToken = getJwtValue();
  if( !apiToken ) {
    return resolve();
  }

  api.company.get()
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  })
});

const useCompany = () => {
  return useQuery(
    'company',
    () => fetchCompany()
  )
};

export default useCompany;