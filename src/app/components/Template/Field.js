import React from 'react';

import SelectRow from '../Form/SelectRow';
import InputRow from '../Form/InputRow';
import KeywordRow from '../Form/KeywordRow';

const Field = ({field}) => {

  switch(field.type) {
    case 'singleSelect':
      return (
        <SelectRow
          label={field.label}
          placeholder={field.placeholder || ''}
          options={field.options}
          name={field.name}
          required={field.required}
        />
      );
    case 'string':
      return (
        <InputRow
          label={field.label}
          placeholder={field.placeholder || ''}
          name={field.name}
          required={field.required}
          disabled={field.name == 'productName'}
        />
      );
    case 'keywords':
      return (
        <KeywordRow
          label={field.label}
          placeholder={field.placeholder || ''}
          name={field.name}
          required={field.required}
        />
      );
    default:
      throw new Error(`unknow field type: ${field.type}`)
  }
};

export default Field;
