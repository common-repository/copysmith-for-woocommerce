import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const FieldRender = ({fields}) => {

  if(!fields) {
    return null;
  }
  
  return fields.map(field => (
    <Field field={field} key={`field-render-${field.name}`}/>
  ));
};

FieldRender.propTypes = {
  fields: PropTypes.array
};

FieldRender.defaultProps = {
  fields: [],
};

export default FieldRender;