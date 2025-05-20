import React from 'react';

const ImageField = ({name, label, required=true}) => {
  return (
    <div className="form-img-group">
      {label && (
        <label htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        type={"file"}
        name={name}
        required={required}
        className={"file-input-field"}
        accept="image/*"
      />
    </div>
  );
};

export default ImageField;