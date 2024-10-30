import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ImageIcon from '@material-ui/icons/Image';

import Bookmark from './Bookmark';
import ProductGeneratorRow from './ProductGeneratorRow';
import useCSProducts from '../../resources/useCSProducts';
import generations from './Generations';

const ProductTableRow = ({product}) => {

  const [expanded, setExpanded] = useState(false);
  const { isLoading, error, data } = useCSProducts(product.ID);

  return (
    <>
      <tr className={`cs-ai-product-list ${expanded ? 'expanded' : ''}`}>
        <td className="cs-ai-table-text" onClick={() => setExpanded(!expanded)}>
          <ImageIcon />
        </td>
        <td className="cs-ai-product-list-title" onClick={() => setExpanded(!expanded)}>{product.post_title}</td>
        {/* <td className="cs-ai-table-text">Category</td>
        <td className="cs-ai-table-text">Tag</td> */}
        <td className="cs-ai-table-text">{product.post_status}</td>
        <td className="cs-ai-table-number" onClick={() => setExpanded(!expanded)}>{generations(data) }</td>
        <td className="cs-ai-table-text">
          <Bookmark product={product} csProduct={data && data.results[0]} />
        </td>
        <td className="cs-ai-table-number" onClick={() => setExpanded(!expanded)}>{product.post_modified}</td>
        <td className="cs-ai-table-number" onClick={() => setExpanded(!expanded)}>
          {expanded && (<span onClick={() => setExpanded(false)}><ExpandLessIcon/></span>)}
          {!expanded && (<span onClick={() => setExpanded(true)}><ExpandMoreIcon/></span>)}
        </td>
      </tr>
      <ProductGeneratorRow
        product={product}
        csProduct={data && data.results[0]}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </>
  );

};

export default ProductTableRow;