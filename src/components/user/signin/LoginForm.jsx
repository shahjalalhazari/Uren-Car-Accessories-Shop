"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import InputField from "@/components/shared/fields/InputField";
import PasswordField from "@/components/shared/fields/PasswordField";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect") || "/";
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) setRememberedEmail(savedEmail);
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    // START LOADING
    setLoading(true);
    // SET EMPTY MESSAGE ON EACH SUBMIT
    setMessage("");

    // GET SUBMITTED DATA
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.rememberLogin.checked;

    // SEND USER CREDENTIALS FOR LOGIN
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path,
    });

    if (res.ok) {
      if (remember) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
    } else {
      setMessage(res.error || "Login Failed!");
    }
    setLoading(false);
  };

  return (
    <>
      {message && <div className="error-message">{message}</div>}
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