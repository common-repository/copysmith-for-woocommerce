import React from 'react';

import useTags from '../../resources/useTags';
import { useProductContext } from '../../resources/productContext';

const SelectTag = () => {

  const { isLoading, data } = useTags();
  const {state: { tag }, dispatch} = useProductContext();

  return (
    <select onChange={(event) => (dispatch({
        type: actions.TAG_SELECT,
        payload: event.target.value,
      }))}
      defaultValue={tag}
    >
      {isLoading 
        ? (<option value="" hidden>Loading product tags</option>) 
        : (<option value="">Filter by product tags</option>)}
        {!isLoading && data?.data.map(tag => (
        <option value={tag.slug} key={`product-tag-${tag.slug}`}>{tag.name}</option>
      )) }
    </select>
  )
};

export default SelectTag;