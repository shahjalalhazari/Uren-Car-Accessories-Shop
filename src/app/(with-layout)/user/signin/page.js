import Link from "next/link";
import "./signin.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import PasswordField from "@/components/shared/fields/PasswordField";
import InputField from "@/components/shared/fields/InputField";

export const metadata = {
  title: "Signin & Signup",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const SignInUPPage = () => {
  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Login & Register"} breadcrumbTitle={"User Login & Register"} />
      <div className="uren-container signin-layout">
          {/* LogIn */}
          <div className="signin-layout-item">
            <h4 className="item-heading">Login</h4>

            <form className="login-form">
              {/* Email Field */}
              <InputField label={"E-mail"} name={"email"} type={"email"} placeholder={"E-mail Address"} required={false}/>
              
              {/* Password Field */}
              <PasswordField name={"password"} label={"Password"} placeholder={"Enter Password"}/>


              <div className="remember-forgot">
                <div className="flex gap-x-2 items-center">
                  <input
                    type="checkbox"
                    name="remember-login"
                    id="remember-login"
                    className="remember-checkbox uren-transition" />
                  <label htmlFor="remember-login">Remember Me</label>
                </div>

                <p className="forgot-password uren-transition"><Link href={"user/forgot-password"}>Forgot password?</Link></p>
              </div>

              <input type="submit" value="Login" className="submit-btn uren-transition"/>
            </form>
          </div>

          {/* Register */}
          <div className="signin-layout-item">
            <h4 className="item-heading">Register</h4>

            <form className="register-form">
              {/* Email Field */}
              <InputField label={"E-mail"} name={"email"} type={"email"} placeholder={"E-mail Address"} required={false}/>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                {/* Password Field */}
                <PasswordField name={"password"} label={"Password"} placeholder={"Enter Password"} />
                {/* Confirm Password Field */}
                <PasswordField name={"confirm-password"} label={"Confirm Password"} placeholder={"Confirm Password"}/>
              </div>

              <input type="submit" value="Register" className="submit-btn uren-transition"/>
            </form>
          </div>
        </div>
    </div>
  );
};

export default SignInUPPage;