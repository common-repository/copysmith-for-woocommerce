import React from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';
import { useFormikContext } from 'formik';

import ValidationError from './ValidationError';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const KeywordRow = ({
  label,
  placeholder,
  name,
  required
}) => {
  const {values, setFieldValue} = useFormikContext();

  const handleDelete = (i) => {
    const tags = values[name];
    const newTags = tags.filter((tag, index) => index !== i)
    setFieldValue(name, newTags);
  }

  const handleDrag = (tag, currPos, newPos) => {
    const tags = values[name];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setFieldValue(name, newTags);
  }

  const handleAddition = (tag) => {
    let tags = values[name];
    tags.push(tag);
    setFieldValue(name, tags);
  }

  return (
    <div className="cs-ai-form-group">
      <label htmlFor={name}>{label}</label>
      <ReactTags
        tags={values[name]} 
        placeholder={placeholder}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        name={name}
        id={name}
        inputFieldPosition="top"
      />
      <ValidationError name={name} />
    </div>
  );
};

KeywordRow.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default KeywordRow;