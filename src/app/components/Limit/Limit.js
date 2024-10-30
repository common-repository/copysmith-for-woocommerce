import React from 'react';

import useLimit from '../../resources/useLimit';
import useBillingInfo from '../../resources/useBillingInfo';

const Limit = () => {

  const { isLoading, data } = useLimit();
  const { isLoading: loading, data: billing } = useBillingInfo();

  if (isLoading || loading) {
    return null;
  }

  if(billing && ['Unlimited', 'Professional Plan', 'Enterprise', 'Teams'].includes(billing.plan)) {
    return null;
  }

  return (
    <div>
      <div className="cs-ai-credits">
        <div>Credits Remaining</div>
        <div>
          { isLoading ? '0' : data.limit }
        </div>
      </div>
    </div>
  );
};

export default Limit;