"use client";
import InputField from "@/components/shared/fields/InputField";
import PasswordField from "@/components/shared/fields/PasswordField";
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
          <div className="login-accordion">
            <form className="checkout-login-form">
              {/* EMAIL FIELD */}
              <InputField
                label={"E-mail"}
                name={"login-email"}
                required={true}
                type={"email"}
                placeholder={""} />

              {/* PASSWORD FIELD */}
              <PasswordField
                label={"Password"}
                name={"password"}
                placeholder={""}
              />
              <div className="flex gap-x-2 items-center">
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
            </form>
            <div className=""></div>
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
          className={`overflow-hidden transition-all duration-500 px-4 ${
            couponAccordion ? "max-h-[500px] py-4" : "max-h-0"
          }`}
        >
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            repellat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAccordion;
