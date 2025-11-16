"use client"
import { useState } from 'react';
import { signIn } from "next-auth/react";
import PasswordField from '@/components/shared/formInputFields/PasswordField';
import TextInputField from '@/components/shared/formInputFields/TextInputField';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";

  const handleLogin = async(e) => {
    e.preventDefault();
    // START LOADING.
    setLoading(true);
    // SET EMPTY MESSAGE & LOGIN SUCCESS FALSE ON EACH SUBMIT.
    setMessage("");
    setLoginSuccess(false);
    
    // GET SUBMITTED FORM DATA.
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.rememberLogin.checked;

    // SEND USER CREDENTIALS FOR LOGIN.
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: path,
    });

    if (res.ok) {
      // REDIRECT USER AFTER LOGIN
      toast.promise({})
      router.push(path);

    } else {
      // SET THE ERROR MESSAGE.
      setMessage(res.error || "Login Failed!");
    }

    // FINALLY STOP THE LOADING.
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