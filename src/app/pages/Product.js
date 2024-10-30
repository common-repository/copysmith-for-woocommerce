import React from 'react';

import Filters from './components/Filters';
import ProductTable from './components/ProductTable';
import SubscribeModal from './components/Modals/SubscribeModal';

const Product = () => {

  return (<div className="cs-ai-product-section">
    <div className="cs-ai-product-header">
      <h1 className="cs-ai-page-title">Select Product</h1>
      <div>
        {/* <ProductSearch /> */}
      </div>
    </div>

    <Filters />
    <ProductTable />
    <SubscribeModal />
  </div>);
}

export default Product;