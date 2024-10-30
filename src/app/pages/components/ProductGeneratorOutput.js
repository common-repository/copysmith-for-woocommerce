import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import GenerationsHelp from './GenerationsHelp';
import AIOutput from './AIOutput';
import useDocuments from '../../resources/useDocuments';

const ProductGeneratorOutput = ({product, csProduct, setExpanded}) => {

  const { isLoading, data, isFetching } = useDocuments(csProduct ? csProduct._id : null);

  if(!data || !csProduct || data.results.length == 0) {
    return (
      <GenerationsHelp />
    );
  }

  if(isLoading || isFetching) {
    return (
      <div className="cs-ai-loading">
        <p>Loading...</p>
        <CircularProgress color="inherit" />
      </div>
    );
  }
  
  return (
    <div className="cs-ai-out-wrapper">
      {data.results.map((data, i) => {
        return (
          <AIOutput
            key={`ai-output-${i}`}
            docId={data._id} 
            product={product}
            content={data.content}
            fileId={csProduct._id}
            setExpanded={setExpanded}
          />
        );
      })}
    </div>
  );


};

export default ProductGeneratorOutput;