import api from '../api/api';

const postUpateDoc = (data) => new Promise((resolve, reject) => {
  api.documents.update(data)
  .then(response => {
    resolve(response);
  })
  .catch(error => {
    reject(error);
  });
});

const useUpateDocument = () => {
  return useMutation(
    (data) => postUpateDoc(data),
  );
};

export default useUpateDocument;