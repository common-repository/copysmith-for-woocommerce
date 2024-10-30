import React from 'react';

import { useProductContext, actions } from '../../resources/productContext';

const ProductSearch = () => {
  
  const { state: {search}, dispatch } = useProductContext();

  return (
    <div>
      <input
        type="search"
        defaultValue={search}
        onChange={(event) => dispatch({
          type: actions.SEARCH_TERM,
          payload: event.target.value
        })}
        placeholder="Search for a product"
        className="cs-ai-product-search"
      />
    </div>
  );
};

export default ProductSearch;