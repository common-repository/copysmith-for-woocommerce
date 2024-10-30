import React from 'react';
import { DateTime } from 'luxon';

import useCompany from '../../../resources/useCompany';
import subscriptionModalContent from '../../../constants/subscriptionModalContent';
import { getJwtValue } from '../../../services/jwt.service';

const getContent = (company) => {
  
  const apiToken = getJwtValue();
  if( !apiToken ) {
    return subscriptionModalContent.linkAccount
  }

  if( !company ) {
    return null;
  }

  const trailEndOn = DateTime.fromSeconds(company.billing.trialEndOn);
  const timeNow = DateTime.now();

  if ( company.billing.status === 'trialExpired' ) {
    return subscriptionModalContent.trialExpired;
  }

  if ( company.billing.suspendedPlan ) {
    return subscriptionModalContent.suspended;
  }

  if ( company.billing.cancelOn ||  company.billing.status === 'cancelled') {
    return subscriptionModalContent.canceled;
  }

  return null;
};

const SubscribeModal = () => {

  const { isLoading, data } = useCompany();
  const modalContent = getContent(data);

  if(isLoading || modalContent == null) {
    return null;
  }



  return (
    <div className="cs-ia-sub-modal">
      <div className="cs-ai-sub-content">
        <h1>{ modalContent.title }</h1>
        <p>{ modalContent.content }</p>
        <div className="cs-ai-sub-buttons">
          { modalContent.button ? 
            ( 
              <a
                href="http://app.copysmith.ai/profile/plans"
                target="_blank"
                className="cs-ai-button"
              >
                { modalContent.button }
              </a>
            ) : (
              <a
                href="/wp-admin/admin.php?page=copysmith-ai-plugin-account"
                className="cs-ai-button"
              >
                Link Account
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;