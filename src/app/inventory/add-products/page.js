import "./add-products.css";
import AddProductForm from "@/components/inventory/add-products/AddProductForm";

export const metadata = {
  title: "Add Product - Inventory",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"],
};

const AddProductPage = () => {
  
  return (
    <>
      {/* PAGE HEADING */}
      <h1 className="inventory-heading">Add New Product</h1>

      {/* ADD PRODUCT FORM */}
      <AddProductForm categories={categories} />
    </>
  );
};

export default AddProductPage;


const categories = [
  {
    name: "Games & Consoles",
  },
  {
    name: "Appliances",
  },
  {
    name: "Audio",
  },
  {
    name: "Brake ware",
  },
  {
    name: "Body Parts",
  },
  {
    name: "Cameras & Cam coders",
  },
  {
    name: "Car Parts",
  },
  {
    name: "Cookies & Crackers",
  },
  {
    name: "Interior",
  },
  {
    name: "Brakes & Rotors",
  },
  {
    name: "Lighting",
  },
  {
    name: "Performance",
  },
  {
    name: "Wheels & Tires",
  },
];