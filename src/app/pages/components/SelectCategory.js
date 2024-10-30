import React from 'react';

import useCategories from '../../resources/useCategories';
import { useProductContext, actions } from '../../resources/productContext';

const SelectCategory = () => {

  const {isLoading, data} = useCategories();
  const {state: { category }, dispatch} = useProductContext();

  return (  
    <select onChange={(event) => (dispatch({
        type: actions.CATEGORY_SELECT,
        payload: event.target.value,
      }))}
      defaultValue={category}
    >
      {isLoading 
        ? (<option value="" hidden>Loading categories</option>) 
        : (<option value="">Select a Category</option>)}
      {!isLoading && data?.data.map(category => (
        <option value={category.cat_ID} key={`product-category-${category.cat_ID}`}>{category.name}</option>
      )) }
    </select>
  )
};

export default SelectCategory;