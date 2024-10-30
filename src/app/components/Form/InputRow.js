import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import ValidationError from './ValidationError';

const InputRow = ({
  label,
  placeholder,
  name,
  required,
  disabled = false
}) => {
  return (
    <div className="cs-ai-form-group">
      <label htmlFor={name}>
        { label }
      </label>
      <Field 
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      <ValidationError name={name} />
    </div>
  );
};

InputRow.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default InputRow;