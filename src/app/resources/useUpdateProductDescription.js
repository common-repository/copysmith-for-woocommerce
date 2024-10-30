import { useMutation } from "react-query";
import axios from "axios";

const updateDescription = (data) => new Promise((reslove, reject) => {
  axios.post('/?rest_route=/copysmith/v1/product/update', data)
  .then(response => {
    reslove(response);
  })
  .catch(error => {
    reject(error);
  })
});

const useUpdateProductDescription = () => {
  return useMutation(
    (data) => updateDescription(data),
  );
};

export default useUpdateProductDescription;