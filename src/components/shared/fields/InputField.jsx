import React from 'react';

const InputField = ({label, type, name, placeholder, required}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;