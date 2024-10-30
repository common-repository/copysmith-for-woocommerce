import { useQuery } from "react-query";
import api from '../api/api';

const fetchLimits = () => new Promise((resolve, reject) => {
  api.billing.getLimits()
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useDocuments = () => {
  return useQuery(
    ['billing.getLimits', { }],
    () => fetchLimits(),
  );
};

export default useDocuments;