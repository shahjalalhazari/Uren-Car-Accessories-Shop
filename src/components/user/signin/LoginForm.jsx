"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import InputField from "@/components/shared/fields/InputField";
import PasswordField from "@/components/shared/fields/PasswordField";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    const verified = searchParams.get("successMessage");
    const error = searchParams.get("errorMessage");
    const savedEmail = localStorage.getItem("rememberedEmail");

    if (verified) {
      setLoginSuccess(true);
      setMessage(verified);
    }
    if (error) setMessage(error);
    if (savedEmail) setRememberedEmail(savedEmail);

    // REMOVE QUERY PARAMS FROM URL.
    if (verified || error) {
      const url = new URL(window.location);
      url.searchParams.delete("successMessage");
      url.searchParams.delete("errorMessage");
      window.history.replaceState({}, document.title, url.pathname);
    }
  }, [searchParams]);

  const loginHandler = async (event) => {
    event.preventDefault();
    // START LOADING.
    setLoading(true);
    // SET EMPTY MESSAGE ON EACH SUBMIT.
    setMessage("");
    // SET LOGIN SUCCESS FALSE ON EACH SUBMIT.
    setLoginSuccess(false);

    // GET SUBMITTED DATA
    const form = event.target;
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

    // LOGIN SUCCESSFUL, REDIRECT THE USER.
    if (res.ok) {
      // REMEMBER IS CHECKED.
      if (remember) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      // REDIRECT USER AFTER LOGIN
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
      <form className="login-form" onSubmit={loginHandler}>
        {/* Email Field */}
        <InputField
          label={"E-mail"}
          name={"email"}
          id="LoginEmail"
          type={"email"}
          placeholder={"E-mail Address"}
          required={true}
          defaultValue={rememberedEmail}
        />
        {/* Password Field */}
        <PasswordField
          name={"password"}
          id="loginPassword"
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
              defaultChecked={!!rememberedEmail}
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