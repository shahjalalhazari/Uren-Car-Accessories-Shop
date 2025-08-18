import React from 'react';

const TextInputField = ({label, required=true, type, name, id="", placeholder=""}) => {
  return (
    <div className="form-input-group">
      <label>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder} required={required} />
    </div>
  );
};

export default TextInputField;