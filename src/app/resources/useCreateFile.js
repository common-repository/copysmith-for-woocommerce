import { useMutation, useQueryClient } from 'react-query';
import api from '../api/api';

const postCreateFile = (data) => new Promise((resolve, reject) => {
  api.files.create(data)
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
})

const useCreateFile = () => {

  const queryClient = useQueryClient();

  return useMutation(
    (data) => postCreateFile(data),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(['cs.products', variables.externalId]);
      }
    }
  );
};

export default useCreateFile;