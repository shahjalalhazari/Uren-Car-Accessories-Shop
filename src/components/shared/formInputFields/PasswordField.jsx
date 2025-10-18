"use client"
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = ({name, label, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-input-group relative">
      <label htmlFor={name}>
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
      />
      <p
        title={showPassword ? "Hide Password" : "Show Password"}
        onClick={() => {
          !setShowPassword(!showPassword);
        }}
        className="show-password"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </p>
    </div>
  );
};

export default PasswordField;