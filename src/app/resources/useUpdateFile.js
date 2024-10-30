import { useMutation } from 'react-query';
import api from '../api/api';

const postUpateFile = ({fileId, data}) => new Promise((resolve, reject) => {
  api.files.update(fileId, data)
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useUpdateFile = () => {
  return useMutation(
    (data) => postUpateFile(data),
  );
};

export default useUpdateFile;