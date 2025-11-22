import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import ClientProfilePage from '@/components/user/profile/ClientProfilePage';
import "./profile.css";

export const metadata = {
  title: "Profile",
  keywords: ["car accessories", "car parts", "auto parts", "vehicle accessories", "toyota parts", "car modifications"]
};

const ProfilePage = () => {
  return (
    <>
      <PageBreadcrumb
        breadcrumbLink={"profile"} 
        breadcrumbTitle={"My Profile"}
      />

      <ClientProfilePage profileTabs={tabs}/>
    </>
  );
};

export default ProfilePage;

const tabs = [
  "Dashboard",
  "Orders",
  "Addresses",
  "Payment Cards",
  "Account Details",
];