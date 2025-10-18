"use client"
import { useState } from "react";
import PasswordField from "@/components/shared/formInputFields/PasswordField";
import TextInputField from "@/components/shared/formInputFields/TextInputField";


const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <form className="register-form">
        {/* Email Field */}
        <TextInputField
          label={"E-mail"}
          name={"email"}
          id={"registerEmail"}
          type={"email"}
          placeholder={"E-mail Address"}
          required={true}
        />

        <div className="passwords">
          {/* Password Field */}
          <PasswordField
            name={"password"}
            id={"registerPassword"}
            label={"Password"}
            placeholder={"Enter Password"}
          />
          {/* Confirm Password Field */}
          <PasswordField
            name={"confirmPassword"}
            id={"registerConfirmPassword"}
            label={"Confirm Password"}
            placeholder={"Confirm Password"}
          />
        </div>
        <button
          type="submit"
          className="submit-btn uren-transition"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-infinity loading-md"></span>
          ) : (
            "Register"
          )}
        </button>
      </form>
  );
};

export default RegisterForm;