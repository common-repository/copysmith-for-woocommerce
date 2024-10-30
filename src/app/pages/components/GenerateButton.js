import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';

import useLimit from '../../resources/useLimit';

const GenerateButton = ({isLoading}) => {

  const {data: limitData} = useLimit();

  if (limitData && limitData.limit === 0) {
    return (
      <Tooltip
        placement="top"
        arrow
        title={(
          <span>You have no remaining credits this month.&nbsp; 
          <a href="http://app.copysmith.ai/profile/plans" target="_blank" style={{color: 'white'}}>
            Visit the web app
          </a> 
          &nbsp;to upgrade your plan type.</span>
        )} 
      >
        <span>
          <button
            type="submit"
            className="cs-ai-button cs-ai-submit cs-ai-cursor-no-allow"
            disabled
            style={{ pointerEvents: 'none' }}
          >
            Generate Product Descriptions
          </button>
        </span>
      </Tooltip>
    );
  }

  return (
    <button type="submit" className="cs-ai-button cs-ai-submit" disabled={isLoading}>
      {isLoading && <CircularProgress color="inherit" size={20} />}
      Generate Product Descriptions
    </button>
  );
};

export default GenerateButton;