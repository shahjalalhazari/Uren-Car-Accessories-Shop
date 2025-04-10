"use client"
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordField = ({name, label, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);


    return (
      <div className="form-group relative">
        <label htmlFor={name}>
          {label} <span>*</span>
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