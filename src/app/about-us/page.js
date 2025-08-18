import PageBreadcrumb from "@/components/shared/PageBreadcrumb";

export const metadata = {
  title: "About Us",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const AboutUsPage = () => {
  return (
    <div>
      {/* Page Breadcrumb */}
      <PageBreadcrumb breadcrumbTitle={"About Us"} breadcrumbLink={"About Us"} />

      <h1>About Us</h1>
      <p>Welcome to our website! We are dedicated to providing the best service possible.</p>
    </div>
  );
};

export default AboutUsPage;