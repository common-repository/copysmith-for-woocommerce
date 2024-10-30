import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Product from './pages/Product';
import { ProductProvider } from './resources/productContext';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </QueryClientProvider>
  );
};

export default App;