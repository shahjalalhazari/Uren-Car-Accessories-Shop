"use client"
import InputField from '@/components/shared/fields/InputField';
import PasswordField from '@/components/shared/fields/PasswordField';
import { useState } from "react";

const RegisterForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const RegisterHandler = async (event) => {
    event.preventDefault();
    // START LOADING
    setLoading(true);
    // SET EMPTY MESSAGE ON EACH SUBMIT
    setMessage("");

    // GET SUBMITTED DATA
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // CREATE NEW USER DATA
    const newUser = { email, password, confirmPassword };

    try {
      // SEND REGISTRATION DATA TO DB
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        // RESET THE REGISTER FORM
        setRegistrationSuccess(true);
        form.reset();
      }
    } catch (error) {
      setMessage(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {message && (
        <div
          className={`${
            registrationSuccess ? "success-message" : "error-message"
          }`}
        >
          {message}
        </div>
      )}
      <form className="register-form" onSubmit={RegisterHandler}>
        {/* Email Field */}
        <InputField
          label={"E-mail"}
          name={"email"}
          id={"registerEmail"}
          type={"email"}
          placeholder={"E-mail Address"}
          required={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
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
    </>
  );
};

export default RegisterForm;