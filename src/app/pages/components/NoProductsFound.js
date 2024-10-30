import React from 'react';

const NoProductsFound = () => {
  return (<tr className="cs-ai-no-products">
  <td colSpan="7">
    <h3>No Products Found</h3>
    <p>
      Navigate to your store to add products. Added products will then populate this table.
    </p>
    <p className="cs-ai-no-products-refresh">
      Believe there's been a mistake? Try <a href={window.location}>refreshing this window.</a>
    </p>
  </td>
</tr>);
};

export default NoProductsFound;