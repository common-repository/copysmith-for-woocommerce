import { useMutation, useQueryClient } from "react-query";
import api from '../api/api';

const postDeleteDoc = ({id}) => new Promise((resolve, reject) => {
  api.documents.delete(id)
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useDeleteDocuments = () => {
  
  const queryClient = useQueryClient();

  return useMutation(
    (data) => postDeleteDoc(data),
    {
      onSuccess: (data, variables, context) => {
        queryClient.refetchQueries('file.docs', { active: true });
        queryClient.refetchQueries('cs.products', { active: true });
      }
    }
  );
};

export default useDeleteDocuments;
