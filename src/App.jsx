// App.js

import React, { useState } from 'react';
import ActionButtons from './components/ActionButtons';
import FormBuilder from './components/FormBuilder';
import Display from './components/Display';

import './App.css';

function App() {
  const [fields, setFields] = useState([]);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const addInput = (label) => {
    setFields([...fields, { type: 'input', label }]);
  };

  const addSelect = (label, options) => {
    setFields([...fields, { type: 'select', label, options }]);
  };

  const handleInputChange = (event, label, type) => {
    const key = `${type}-${label}`;
    setFormValues({ ...formValues, [key]: event.target.value });
  };

  const validateForm = (values) => {
    const newErrors = {};
    fields.forEach(field => {
      const value = values[`${field.type}-${field.label}`];
      if (!value) {
        newErrors[`${field.type}-${field.label}`] = `${field.label} is required`;
      }
    });
    return newErrors;
  };

  const onSave = () => {
    const newErrors = validateForm(formValues);
    // if (!fields.length === 0) {
      if (Object.keys(newErrors).length === 0) {
        setData([...data, formValues]);
        setFormValues({});
        setErrors({});
        setFields([])
      } else {
        setErrors(newErrors);
      }
    // }
    console.log(fields)
  };

  return (
    <div className="App">
      <h1>Custom Form Builder</h1>
      <ActionButtons addInput={addInput} addSelect={addSelect} />
      <FormBuilder fields={fields} onChange={handleInputChange} values={formValues} errors={errors} />
      <Display data={data} />
      <button onClick={onSave} className='save-button form-button'>Save</button>
    </div>
  );
}

export default App;
