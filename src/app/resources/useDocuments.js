import { useQuery } from "react-query";
import api from '../api/api';

const fetchDocuments = (fileId) => new Promise((resolve, reject) => {
  api.documents.list({
    fileId
  })
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useDocuments = (fileId) => {
  return useQuery(
    ['file.docs', { fileId }],
    () => fetchDocuments(fileId),
  );
};

export default useDocuments;