
import AddCategoryForm from "@/components/inventory/categories/AddCategoryForm";
import "./categories.css"
import CategoriesTable from "@/components/inventory/categories/CategoriesTable";
import UrenAccordion from "@/components/shared/UrenAccordion";
import FormSubmitBtn from "@/components/shared/buttons/FormSubmitBtn";
import ImageField from "@/components/shared/fields/ImageField";
import InputField from "@/components/shared/fields/InputField";


export const metadata = {
  title: "Categories - Inventory",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};


const CategoriesPage = () => {
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

const categories = [
  {
    id: 1,
    items: 12,
    img: "/images/featured-categories/1.png",
    name: "Games & Consoles",
  },
  {
    id: 2,
    items: 2,
    img: "/images/featured-categories/2.png",
    name: "Appliances",
  },
  {
    id: 3,
    items: 20,
    img: "/images/featured-categories/3.png",
    name: "Audio",
  },
  {
    id: 4,
    items: 120,
    img: "/images/featured-categories/4.png",
    name: "Brake ware",
  },
  {
    id: 5, items: 12, img: "/images/featured-categories/5.png",
    name: "Body Parts",
  },
  {
    id:6,
    items:142, 
    img:"/images/featured-categories/6.png",
    name: "Cameras & Cam coders",
  },
  {
    id:7,
    items:112, 
    img:"/images/featured-categories/1.png",
    name: "Car Parts",
  },
  {
    id:8,
    items:172, 
    img:"/images/featured-categories/2.png",
    name: "Cookies & Crackers",
  },
  {
    id:9,
    items:142, 
    img:"/images/featured-categories/3.png",
    name: "Interior",
  },
  {
    id: 10,
    items: 102,
    img: "/images/featured-categories/4.png",
    name: "Brakes & Rotors",
  },
  {
    id: 11,
    items: 152,
    img: "/images/featured-categories/5.png",
    name: "Lighting",
  },
  {
    id: 12,
    items: 155,
    img: "/images/featured-categories/6.png",
    name: "Performance",
  },
  {
    id: 13,
    items: 10,
    img: "/images/featured-categories/1.png",
    name: "Wheels & Tires",
  },
];
