import React from 'react';

import SelectStatus from './SelectStatus';
//import SelectCategory from './SelectCategory';
//import SelectTag from './SelectTag';

const Filters = () => {

  return (<div className="cs-ai-product-filters">
    <div>
      {/* <SelectCategory />
      <SelectTag /> */}
      <SelectStatus />
    </div>
    <div className="cs-ai-product-filter-cta">
      Product not listed? <a href="">Add a product to your store</a>
    </div>
  </div>);
};

export default Filters;