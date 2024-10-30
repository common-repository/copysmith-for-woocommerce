import { useMutation } from 'react-query';
import api from '../api/api';

const postUpateDoc = ({ id, content }) => new Promise((resolve, reject) => {
  api.documents.update(id, { content })
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useUpdateDocument = () => {
  return useMutation(
    (data) => postUpateDoc(data),
  );
};

export default useUpdateDocument;