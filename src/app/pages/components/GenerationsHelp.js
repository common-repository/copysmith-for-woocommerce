import React from 'react';
import FlightIcon from '@material-ui/icons/Flight';
import CheckIcon from '@material-ui/icons/Check';

import productDescriptionfields from '../../constants/productDescriptionFields';

const GenerationsHelp = () => {
  return (
    <div className="cs-ai-no-generations">
      <div className="cs-ai-no-gen-plane">
        <FlightIcon />
      </div>
      <p className="cs-ai-no-gen-headline">
      Your product descriptions are empty right now. When you generate new
      descriptions they will appear here.
      </p>
      <p className="cs-ai-no-gen-tips">
        Tips for high quality generations:
      </p>
      {productDescriptionfields.map((field, i) => {
        if(field.helper) {
          return (<div className="cs-ai-no-gen-tip" key={`helping-tips-${i}`}>
          <div>
            <CheckIcon />
          </div>
          <p>
            {field.helper}
          </p>
        </div>)
        }
      })}
    </div>
  );
};

export default GenerationsHelp;