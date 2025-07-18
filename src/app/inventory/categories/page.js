import AddCategoryForm from "@/components/inventory/categories/AddCategoryForm";
import "./categories.css"
import CategoriesTable from "@/components/inventory/categories/CategoriesTable";
import { toast } from "react-toastify";


export const metadata = {
  title: "Categories - Inventory",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};


// GET ALL CATEGORIES FROM DB.
const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/category`, {
      cache: "no-store",
    });

    if (!res.ok) {
      toast.error("Failed to fetching categories!");
    }

    const data = res.json();
    return data;
  } catch (error) {
    toast.error(error);
    return [];
  }
}


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