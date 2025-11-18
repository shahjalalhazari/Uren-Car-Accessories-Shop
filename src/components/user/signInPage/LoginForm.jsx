"use client"
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    const verified = searchParams.get("successMessage");
    const error = searchParams.get("errorMessage");

    // EMAIL VERIFIED.
    if (verified) {
      setLoginSuccess(true);
      setMessage(verified);
    }
    // NOT VERIFIED OR ANY ERROR.
    if (error) setMessage(error);
    // THERE IS SAVED EMAIL IN LOCAL STORAGE.
    if (savedEmail) setRememberedEmail(savedEmail);

    // REMOVE QUERY PARAMS FROM URL.
    if (verified || error) {
      const url = new URL(window.location.href);
      url.searchParams.delete("successMessage");
      url.searchParams.delete("errorMessage");
      window.history.replaceState({}, "", url.toString());
    }
  }, [searchParams])

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

    try {
      // USING TOAST PROMISE FOR USER LOGIN PROCESS.
      await toast.promise(
        (async () => {
          // SEND USER CREDENTIALS FOR LOGIN.
          const res = await signIn("credentials", {
            email, password,
            redirect: false,
            callbackUrl: path,
          });

          // THROW ERROR IF LOGIN FAILED.
          if (!res?.ok) throw new Error(res?.error || "Login Failed!");

          // REMEMBER IS CHECKED.
          if (remember) {
            localStorage.setItem("rememberEmail", email);
          } else {
            localStorage.removeItem("rememberEmail");
          }

          return res;
        })(),

        // TOAST CONFIGURATION.
        {
          pending: {
            render: "Logging in...",
          },
          success: {
            render: "Login successful! You'll be redirected...",
            type: "success",
            autoClose: 2500,
            icon: "✅"
          },
          error: {
            render({data}){
              return data?.message || "Login Failed!"
            },
            type: "error",
            autoClose: 5000
          }
        }
    )
    setLoginSuccess(true);

    setTimeout(() => {
      router.push(path);
    }, 2500);
    
    } catch (error) {
      // SET THE ERROR MESSAGE.
      console.error("Login Failed!");
    } finally{
      // FINALLY STOP THE LOADING.
      setLoading(false);
    };
  }
  
  return (
    <form className="login-form" onSubmit={handleLogin}>
      {message && (
        <div
          className={`${
            loginSuccess ? "success-message" : "error-message"
          }`}
        >
          {message}
        </div>
      )}
      {/* EMAIL INPUT FIELD */}
      <TextInputField
        label={"E-mail"}
        name={"email"}
        id="LoginEmail"
        type={"email"}
        placeholder={"E-mail Address"}
        required={true}
        defaultValue={rememberedEmail}
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
            defaultChecked={!!rememberedEmail}
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
  );
};

export default LoginForm;