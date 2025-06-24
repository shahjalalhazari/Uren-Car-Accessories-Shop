"use client";
import { useState } from 'react';
import Link from 'next/link';
import InputField from '@/components/shared/fields/InputField';
import PasswordField from '@/components/shared/fields/PasswordField';

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = async (event) => {
    // START LOADING
    setLoading(true);

    // GET SUBMITTED DATA
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.rememberLogin.checked;

    setMessage("");

    const loginDate = {email, password, remember};
    console.log(loginDate);

    // RESET THE FORM
    form.reset();
  }

  return (
    <>
      {message && <div className="error-message">{message}</div>}
      <form className="login-form" onSubmit={loginHandler}>
        {/* Email Field */}
        <InputField
          label={"E-mail"}
          name={"email"}
          type={"email"}
          placeholder={"E-mail Address"}
          required={true}
        />
        {/* Password Field */}
        <PasswordField
          name={"password"}
          label={"Password"}
          placeholder={"Enter Password"}
        />
        <div className="remember-forgot">
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              name="rememberLogin"
              id="rememberLogin"
              className="remember-checkbox uren-transition"
            />
            <label htmlFor="rememberLogin">Remember Me</label>
          </div>
          <p className="forgot-password uren-transition">
            <Link href={"user/forgot-password"}>Forgot password?</Link>
          </p>
        </div>
        <button
          type="submit"
          className="submit-btn uren-transition"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-infinity loading-md"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;