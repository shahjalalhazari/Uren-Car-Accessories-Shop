"use client"
import { useState } from "react";
import PasswordField from "@/components/shared/formInputFields/PasswordField";
import TextInputField from "@/components/shared/formInputFields/TextInputField";


const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // HANDLER FOR USER REGISTRATION.
  const handleRegister = async(event) => {
    event.preventDefault();
    
    setLoading(true);
    setMessage("");
    setRegistrationSuccess(false);

    // SUBMITTED DATA.
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const newUser = {email, password, confirmPassword};

    try {
      // SEND NEW USER DATA TO DB.
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      // GET THE RESPONSE.
      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        setRegistrationSuccess(true);
        form.reset();
      }
    } catch (error) {
      setMessage(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <form className="register-form" onSubmit={handleRegister}>
      {message && (
        <div
          className={`${
            registrationSuccess ? "success-message" : "error-message"
          }`}
        >
          {message}
        </div>
      )}
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
          className={`submit-btn uren-transition ${loading ? "cursor-not-allowed":""}`}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <span className="loading loading-infinity loading-sm" aria-label="Loading"></span>
          ) : (
            "Register"
          )}
        </button>
      </form>
  );
};

export default RegisterForm;