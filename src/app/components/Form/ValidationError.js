import React from 'react';
import { useFormikContext } from 'formik';

const ValidationError = ({name}) => {
  
  const { errors } = useFormikContext();

  if(!errors || !errors[name]) {
    return null;
  }

  return (
    <div className="cs-ai-form-error">
      {errors[name]}
    </div>
  );
};

export default ValidationError;