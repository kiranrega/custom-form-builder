import React from 'react';
import Field from './Field';

const FormBuilder = ({ fields, onChange, values, errors }) => {
  return (
    <form className="form-builder">
      {fields.map((field, index) => {
        const key = `${field.type}-${field.label}`;
        const fieldValue = values[key] || '';
        let fieldError = errors[key];
        if (fieldValue.trim() === '') {
          fieldError = 'This field cannot be empty';
        }
        return <Field key={index} field={field} fieldValue={fieldValue} fieldError={fieldError} onChange={onChange} />;
      })}
    </form>
  );
};

export default FormBuilder;
