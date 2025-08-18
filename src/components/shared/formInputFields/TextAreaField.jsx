import React from 'react';

const TextAreaField = ({label, name, id="", required=true, placeholder=""}) => {
    return (
      <div className="form-input-group">
        <label>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea name={name} id={id} required={required} placeholder={placeholder} />
      </div>
    );
};

export default TextAreaField;