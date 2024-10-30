import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import ValidationError from './ValidationError';

const SelectRow = ({
  label,
  placeholder,
  name,
  required,
  options,
}) => {
  return (
    <div className="cs-ai-form-group">
      <label htmlFor={name}>
        { label }
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      >
        {options.map(opt => (
          <option value={opt.value} key={`select-row-${opt.value}`}>{ opt.label }</option>
        ))}
      </Field>
      <ValidationError name={name} />
    </div>
  );
};

SelectRow.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectRow;