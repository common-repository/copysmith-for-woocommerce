import React from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ImageIcon from '@material-ui/icons/Image';
import Pagination from '@mui/material/TablePagination';

import NoProductsFound from './NoProductsFound';
import ProductTableRow from './ProductTableRow';
import useProducts from '../../resources/useProducts';
import { actions, useProductContext } from '../../resources/productContext';

const ProductTable = () => {

  const { state: { category, tag, search, status, page }, dispatch } = useProductContext();
  const { isLoading, data, error, refetch } = useProducts({
    category, tag, search, status,
    page: page + 1
  });

  const onPaginationChange = async (event, value) => {
    dispatch({ type: actions.UPDATE_PAGE, payload: value})
    await refetch();
  }

  return (<table className="cs-ai-product-table">
    <thead>
      <tr>
        <th className="cs-ai-table-text">
          <ImageIcon />
        </th>
        <th className="cs-ai-table-text">Product Name</th>
        {/* <th className="cs-ai-table-text">Categories</th>
        <th className="cs-ai-table-text">Tags</th> */}
        <th className="cs-ai-table-text">Status</th>
        <th className="cs-ai-table-number">Generations</th>
        <th className="cs-ai-table-text">
          <BookmarkBorderIcon />
        </th>
        <th className="cs-ai-table-number">Last Modified</th>
        <th className="cs-ai-table-number"></th>
      </tr>
    </thead>
    <tbody>
      {!isLoading && data?.data?.posts?.length < 1 ? (
        <NoProductsFound />
      ) : null }
      {isLoading && (
        <tr>
          <td colSpan="7">
            Loading
          </td>
        </tr>
      )}
      {!isLoading && data?.data?.posts?.map(product => (
        <ProductTableRow product={product} key={`product-${product.ID}`}  />
      ))}
      <Pagination
        rowsPerPageOptions={[10]}
        rowsPerPage={10}
        page={page}
        count={-1}
        onPageChange={onPaginationChange}
        nextIconButtonProps={{
          disabled: !isLoading && data?.data?.posts?.length < 1
        }}
      />
    </tbody>
  </table>);
};

export default ProductTable;
