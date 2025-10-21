import LoginForm from "@/components/user/signInPage/LoginForm";
import "./signin.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import RegisterForm from "@/components/user/signInPage/RegisterForm";

export const metadata = {
  title: "Login & Register",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const SingInPage = () => {
  return (
    <>
      <PageBreadcrumb 
        breadcrumbLink={"Login & Register"} 
        breadcrumbTitle={"User Login & Register"}
      />
      
      <div className="uren-container signin-layout">
          {/* LOGIN FORM */}
          <div className="signin-item">
            <h4 className="item-heading">Login</h4>
            <LoginForm/>
          </div>

          {/* REGISTER FORM */}
          <div className="signin-item">
            <h4 className="item-heading">Register</h4>
            <RegisterForm/>
          </div>
        </div>
    </>
  );
};

export default SingInPage;