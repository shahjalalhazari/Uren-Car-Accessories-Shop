import "./brands.css"
import BrandTable from "@/components/inventory/brands/BrandTable";
import BrandAndModelForm from "@/components/inventory/brands/BrandAndModelForm";

export const metadata = {
  title: "Brands & Models - Inventory",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"],
};

const BrandsPage = () => {
  

  return (
    <>
      {/* ADD BRAND AND MODEL FORM */}
      <BrandAndModelForm/>

      {/* BRAND & MODEL LIST TABLE */}
      <BrandTable/>
    </>
  );
};

export default BrandsPage;
