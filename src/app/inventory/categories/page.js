import AddCategoryForm from "@/components/inventory/categories/AddCategoryForm";
import "./categories.css"
import CategoriesTable from "@/components/inventory/categories/CategoriesTable";
import { getCategories } from "@/lib/getCategories";


export const metadata = {
  title: "Categories - Inventory",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

export const dynamic = "force-dynamic";


const CategoriesPage = async() => {
  const categories = await getCategories();

  return (
    <>
      {/* ADD CATEGORY FORM */}
      <AddCategoryForm/>

      {/* CATEGORIES TABLE WITH SORTING DROPDOWN */}
      <CategoriesTable categories={categories}/>
    </>
  );
};

export default CategoriesPage;