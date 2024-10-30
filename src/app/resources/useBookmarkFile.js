import { useMutation, useQueryClient } from "react-query";
import api from '../api/api';

const postBookmark = ({id}) => new Promise((resolve, reject) => {
  api.files.like(id)
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  })
});

const useBookmarkFile = () => {

  const queryClient = useQueryClient();

  return useMutation(
    (data) => postBookmark(data),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(['cs.products', variables.externalId]);
      }
    }
  );
};

export default useBookmarkFile;