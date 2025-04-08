import Link from "next/link";
import "./signin.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";


const SignInUPPage = () => {
  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Login & Register"} breadcrumbTitle={"User Login & Register"} />
      <div className="uren-container">
        <div className="signin-layout">
          {/* LogIn */}
          <div className="signin-layout-item">
            <h4 className="item-heading">Login</h4>

            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">E-mail <span>*</span></label>
                <input type="email" name="email" id="email" placeholder="E-mail Address"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" name="password" id="password" placeholder="Enter Password"/>
              </div>
              <div className="remember-forgot">
                <div className="flex gap-x-2 items-center">
                  <input
                    type="checkbox"
                    name="remember-login"
                    id="remember-login"
                    className="remember-checkbox uren-transition" />
                  <label htmlFor="remember-login">Remember Me</label>
                </div>

                <p className="forgot-password uren-transition"><Link href={"user/forgot-password"}>Forgotten password?</Link></p>
              </div>

              <input type="submit" value="Login" className="submit-btn uren-transition"/>
            </form>
          </div>

          {/* Register */}
          <div className="signin-layout-item">
            <h4 className="item-heading">Register</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUPPage;