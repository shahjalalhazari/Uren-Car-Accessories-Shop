"use client"
import { useState } from 'react';
import PasswordField from '@/components/shared/formInputFields/PasswordField';
import TextInputField from '@/components/shared/formInputFields/TextInputField';
import Link from 'next/link';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    // START LOADING.
    setLoading(true);
    // SET EMPTY MESSAGE &LOGIN SUCCESS FALSE ON EACH SUBMIT.
    setMessage("");
    setLoginSuccess(false);
    
    // GET SUBMITTED FORM DATA.
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.rememberLogin.checked;

    const loginUser = {email, password, remember};
    console.log(loginUser);

    setLoading(false);
  };
  
  return (
    <>
      {message && (
        <div
          className={`${loginSuccess ? "success-message" : "error-message"}`}
        >
          {message}
        </div>
      )}
      <form className="login-form" onSubmit={handleLogin}>
        {/* EMAIL INPUT FIELD */}
        <TextInputField
          label={"E-mail"}
          name={"email"}
          id="LoginEmail"
          type={"email"}
          placeholder={"E-mail Address"}
          required={true}
          // defaultValue={rememberedEmail}
        />

        {/* PASSWORD INPUT FIELD */}
        <PasswordField
          name={"password"}
          id="loginPassword"
          label={"Password"}
          placeholder={"Enter Password"}
        />

        {/* REMEMBER & FORGOT PASSWORD */}
        <div className="remember-forgot">
          {/* REMEMBER CHECKBOX */}
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              name="rememberLogin"
              id="rememberLogin"
              className="remember-checkbox uren-transition"
              // defaultChecked={!!rememberedEmail}
            />
            <label htmlFor="rememberLogin">Remember Me</label>
          </div>
          {/* FORGOT PASSWORD */}
          <p className="forgot-password uren-transition">
            <Link href={"user/forgot-password"}>Forgot password?</Link>
          </p>
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="submit-btn uren-transition"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-infinity loading-sm"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;