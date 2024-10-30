import { useMutation, useQueryClient } from 'react-query';
import api from '../api/api';

const postGenerateContent = (data) => new Promise((reslove, reject) => {
  api.ai.generateContent(data.data)
  .then(response => {
    reslove(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useGenerateContent = () => {

  const queryClient = useQueryClient();

  return useMutation(
    (data) => postGenerateContent(data),
    {
      onSuccess: () => {
        queryClient.refetchQueries('file.docs', { active: true });
        queryClient.refetchQueries('cs.products', { active: true });
      }
    }
  );
};

export default useGenerateContent;