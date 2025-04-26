import "./profile.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ClientProfilePage from "@/components/user/profile/ClientProfilePage";

export const metadata = {
  title: "Profile",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const ProfilePage = () => {
  
  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Profile"} breadcrumbTitle={"My Account"}/>
      <ClientProfilePage tabs={tabs} />
    </div>
  );
};

export default ProfilePage;

const tabs = [
  "Dashboard",
  "Orders",
  "Addresses",
  "Payment Methods",
  "Account Details",
  "Logout",
];