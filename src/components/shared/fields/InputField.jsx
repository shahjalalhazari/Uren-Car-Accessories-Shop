import React from 'react';

const InputField = ({
  label,
  type,
  name,
  placeholder = "",
  required,
  className = "",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={className}
      />
    </div>
  );
};

export default InputField;