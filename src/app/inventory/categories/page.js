import Image from "next/image";
import "./categories.css"
import AddCateAccordion from "@/components/inventory/categories/AddCateAccordion";
import { FaEdit, FaTrash } from "react-icons/fa";

export const metadata = {
  title: "Categories - Inventory",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};


const CategoriesPage = () => {
  
  return (
    <>
    {/* ADD CATEGORY ACCORDION */}
      <AddCateAccordion />
      
      {/* CATEGORIES TABLE */}
      <table className="categories-table">
        <thead className="table-head">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Number of Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
        {categories.map((category) => (
              <tr key={category.id} className="">
                <td className="flex items-center justify-center">
                  <Image src={category.img} width={70} height={70} alt={category.name} />
                </td>
                <td>
                  {category.name}
                </td>
                <td>{category.items} Products</td>
                <td className="table-btns">
                  <button className="btn-warning table-btn" title="Edit Category Info"><FaEdit/></button>
                  <button className="btn-secondary table-btn" title="Delete Category"><FaTrash/></button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <div className="overflow-x-auto mt-4 md:mt-6 lg:mt-8">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Products</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>
                  <Image src={category.img} width={70} height={70} alt={category.name}/>
                </td>
                <td>
                  {category.name}
                </td>
                <td>{category.items} Products</td>
                <th className="space-4">
                  <button className="btn btn-warning text-sm text-base-100" title="Edit Category Info"><FaEdit/></button>
                  <button className="btn btn-secondary text-sm text-base-100" title="Delete Category"><FaTrash/></button>
                </th>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div> */}
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
    items: 12,
    img: "/images/featured-categories/2.png",
    name: "Appliances",
  },
  {
    id: 3,
    items: 12,
    img: "/images/featured-categories/3.png",
    name: "Audio",
  },
  {
    id: 4,
    items: 12,
    img: "/images/featured-categories/4.png",
    name: "Brake ware",
  },
  {
    id: 5, items: 12, img: "/images/featured-categories/5.png",
    name: "Body Parts",
  },
  {
    id:6,
    items:12, 
    img:"/images/featured-categories/6.png",
    name: "Cameras & Cam coders",
  },
  {
    id:7,
    items:12, 
    img:"/images/featured-categories/1.png",
    name: "Car Parts",
  },
  {
    id:8,
    items:12, 
    img:"/images/featured-categories/2.png",
    name: "Cookies & Crackers",
  },
  {
    id:9,
    items:12, 
    img:"/images/featured-categories/3.png",
    name: "Interior",
  },
  {
    id: 10,
    items: 12,
    img: "/images/featured-categories/4.png",
    name: "Brakes & Rotors",
  },
  {
    id: 11,
    items: 12,
    img: "/images/featured-categories/5.png",
    name: "Lighting",
  },
  {
    id: 12,
    items: 12,
    img: "/images/featured-categories/6.png",
    name: "Performance",
  },
  {
    id: 13,
    items: 12,
    img: "/images/featured-categories/1.png",
    name: "Wheels & Tires",
  },
];
