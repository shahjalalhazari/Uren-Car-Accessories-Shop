import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import CategoriesList from '@/components/Shop/Products/CategoriesList';
import PriceRangeFilter from '@/components/Shop/Products/PriceRangeFilter';
import "@/components/Shop/Products/products-page.css";

export const metadata = {
  title: "Products",
  description: "UREN is a cutting-edge car accessories shop dedicated to enhancing the driving experience for car enthusiasts and everyday drivers alike. The brand focuses on offering high-quality, stylish, and innovative automotive products designed to upgrade vehicle aesthetics, comfort, safety, and performance.",
  keywords: ["meal", "meals", "Choose your meal", "find your meal", "favorite meal"]
};

const ProductsPage = () => {
  return (
    <div>
      {/* Page Breadcrumb */}
      <PageBreadcrumb />
      
      {/* Main content */}
      <main className="grid grid-cols-4 gap-8 mx-8 my-20">
        {/* 1/4 Width */}
        <aside className="space-y-12">
          <CategoriesList categoriesList={categoriesList} />
          <PriceRangeFilter/>
        </aside>
        
        {/* 3/4 Width (Spans 3 columns) */}
        <div className="bg-green-500 text-white col-span-3">All Products List</div>
      </main>
    </div>
  );
};

export default ProductsPage;

const categoriesList = [
  {
    name: "Games & Consoles",
    image: "",
    added:""
  },
  {
    name: "Appliances",
    image: "",
    added:""
  },
  {
    name: "Audio",
    image: "",
    added:""
  },
  {
    name: "Bakeware",
    image: "",
    added:""
  },
  {
    name: "Body Parts",
    image: "",
    added:""
  },
  {
    name: "Cameras & Camcoders",
    image: "",
    added:""
  },
  {
    name: "Car Parts",
    image: "",
    added:""
  },
  {
    name: "Cookies & Crackers",
    image: "",
    added:""
  },
  {
    name: "Interior",
    image: "",
    added:""
  },
  {
    name: "Brakes & Rotors",
    image: "",
    added:""
  },
  {
    name: "Lighting",
    image: "",
    added:""
  },
  {
    name: "Perfomance",
    image: "",
    added:""
  },
  {
    name: "Wheels & Tires",
    image: "",
    added:""
  },
]
