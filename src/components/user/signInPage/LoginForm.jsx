"use client"
import { useState } from 'react';
import PasswordField from '@/components/shared/formInputFields/PasswordField';
import TextInputField from '@/components/shared/formInputFields/TextInputField';
import SecondaryBtn from '@/components/shared/buttons/SecondaryBtn';
import Link from 'next/link';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <form className="login-form">
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
            <span className="loading loading-infinity loading-md"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
  );
};

export default LoginForm;