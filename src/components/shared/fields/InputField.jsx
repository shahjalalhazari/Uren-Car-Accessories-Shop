import React from 'react';

const InputField = ({
  label,
  type,
  name,
  id = "",
  placeholder = "",
  required,
  className = "",
  defaultValue = "",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        className={className}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputField;