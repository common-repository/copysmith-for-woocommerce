import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Limit from './Limit';
const queryClient = new QueryClient();

const LimitWrapper = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Limit />
    </QueryClientProvider>
  );
};

export default LimitWrapper;