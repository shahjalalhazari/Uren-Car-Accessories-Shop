import "./signin.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import RegisterForm from "@/components/user/signin/RegisterForm";
import LoginForm from "@/components/user/signin/LoginForm";

export const metadata = {
  title: "Login & Register",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const SignInPage = () => {
  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Login & Register"} breadcrumbTitle={"User Login & Register"} />
      <div className="uren-container signin-layout">
          {/* LogIn */}
          <div className="signin-layout-item">
            <h4 className="item-heading">Login</h4>
            {/* LOGIN FORM */}
            <LoginForm/>
          </div>

          {/* REGISTER */}
          <div className="signin-layout-item">
            <h4 className="item-heading">Register</h4>
            {/* REGISTER FORM */}
            <RegisterForm/>
          </div>
        </div>
    </div>
  );
};

export default SignInPage;