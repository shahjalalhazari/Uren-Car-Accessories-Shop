"use client";
import InputField from "@/components/shared/fields/InputField";
import PasswordField from "@/components/shared/fields/PasswordField";
import { Ruthie } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaPercent, FaUserAlt } from "react-icons/fa";

const CheckoutAccordion = () => {
  const [loginAccordion, setLoginAccordion] = useState(false);
  const [couponAccordion, setCouponAccordion] = useState(false);

  return (
    <div className="accordion-layout">
      {/* LOGIN FORM */}
      <div className="accordion-header uren-transition">
        <div className="accordion-heading-text">
          <FaUserAlt className="text-primary" />
          <p>
            Returning customer?{" "}
            <span
              className="uren-transition accordion-action"
              onClick={() => setLoginAccordion(!loginAccordion)}
            >
              Click here to login.
            </span>
          </p>
        </div>

        <div
          className={`overflow-hidden transition-all duration-1000 ${
            loginAccordion ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="accordion-item">
            <form className="form-layout">
              {/* EMAIL FIELD */}
              <InputField
                label={"E-mail"}
                name={"login-email"}
                required={true}
                type={"email"}
                placeholder={""}
              />

              {/* PASSWORD FIELD */}
              <PasswordField
                label={"Password"}
                name={"password"}
                placeholder={""}
              />
              <div className="save-data">
                {/* SAVE LOGIN DATA */}
                <input
                  type="checkbox"
                  name="save-login-data"
                  id="save-login-data"
                  className="save-form-data uren-transition"
                />
                <label
                  htmlFor="save-login-data"
                  className="save-form-data-label"
                >
                  Remember Me
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <input
                type="submit"
                value="Login"
                className="submit-btn uren-transition"
              />
              <p className="text-center text-sm">
                Don't Have An Account?{" "}
                <Link
                  href={"/user/signin"}
                  className="accordion-action underline uren-transition"
                >
                  Click Here
                </Link>
              </p>
            </form>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>

      {/* DISCOUNT COUPON FORM */}
      <div className={`accordion-header uren-transition`}>
        <div className="accordion-heading-text">
          <FaPercent className="text-primary" />
          <p>
            Have a coupon?{" "}
            <span
              className="uren-transition accordion-action"
              onClick={() => setCouponAccordion(!couponAccordion)}
            >
              Click here to enter code.
            </span>
          </p>
        </div>

        <div
          className={`overflow-hidden transition-all duration-1000 ${
            couponAccordion ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="accordion-item">
            {/* DISCOUNT COUPON */}
            <form className="grid grid-cols-2 gap-x-4 md:gap-x-6 lg:gap-x-8">
              <input
                type="text"
                required
                name="coupon-code"
                placeholder="Enter Coupon Code"
                className="coupon-input"
              />
              <button type="submit" className="uren-transition coupon-form-btn">
                APPLY COUPON
              </button>
            </form>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAccordion;
