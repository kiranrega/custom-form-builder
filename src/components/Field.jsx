import React from "react";

const Field = ({ field, fieldValue, fieldError, onChange }) => {
    const handleChange = (e) => onChange(e, field.label, field.type);
  
    return (
      <div className="form-group">
        <label className="form-label">{field.label}</label>
        {field.type === 'input' && (
          <input
            className="form-input"
            value={fieldValue}
            onChange={handleChange}
            placeholder={field.label}
            style={fieldError ? { borderColor: 'red' } : null}
          />
        )}
        {field.type === 'select' && (
          <select
            className="form-select"
            value={fieldValue}
            onChange={handleChange}
            style={fieldError ? { borderColor: 'red' } : null}
          >
            <option value="">Select an option</option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {fieldError && <p className="form-error">{fieldError}</p>}
      </div>
    );
  };

  export default Field;

