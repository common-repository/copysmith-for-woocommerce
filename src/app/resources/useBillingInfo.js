import { useQuery } from "react-query";

import api from '../api/api';

const useBillingInfo = () => {
  return useQuery(
    'billing.info',
    () => api.billing.getInfo()
  )
};

export default useBillingInfo;