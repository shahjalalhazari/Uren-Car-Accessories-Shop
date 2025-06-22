"use client"
import InputField from '@/components/shared/fields/InputField';
import PasswordField from '@/components/shared/fields/PasswordField';
import { useState } from 'react';

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const RegisterHandler = async (event) => {
    // START LOADING
    setLoading(true);

    // GET SUBMITTED DATA
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setError("")

    // CHECK BOTH PASSWORDS ARE MATCHING.
    if (password !== confirmPassword) {
      setError("password does't match.");
      return;
    }

    // CREATE NEW USER DATA
    const newUser = {email, password}
    console.log(newUser);
    form.reset();
  }

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      <form className="register-form" onSubmit={RegisterHandler}>
        {/* Email Field */}
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          placeholder={"E-mail Address"}
          required={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          {/* Password Field */}
          <PasswordField
            name={"password"}
            label={"Password"}
            placeholder={"Enter Password"}
          />
          {/* Confirm Password Field */}
          <PasswordField
            name={"confirmPassword"}
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