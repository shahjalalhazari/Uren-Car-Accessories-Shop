import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import BrandNamesList from '@/components/Shop/Products/BrandNamesList';
import CategoriesList from '@/components/Shop/Products/CategoriesList';
import PriceRangeFilter from '@/components/Shop/Products/PriceRangeFilter';
import "@/components/Shop/Products/products-page.css";
import Image from 'next/image';
import Link from 'next/link';

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
        <aside className="space-y-8">
          {/* Categories List */}
          <CategoriesList categoriesList={categoriesList} />
          {/* Price Range Filter */}
          <PriceRangeFilter />
          {/* Brand's Names List */}
          <BrandNamesList brandsList={brandsList} />
          {/* Ad Banner */}
            <Image src={"/images/shop/1.jpg"} width={500} height={1000} alt='UREN' className='hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300'/>
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


const brandsList = [
  {
    id: 1,
    name: "Brand Name 1",
    price: 120,
    image: "/images/brand/1.jpg",
  },
  {
    id: 2,
    name: "Brand Name 2",
    price: 120,
    image: "/images/brand/2.jpg",
  },
  {
    id: 3,
    name: "Brand Name 3",
    price: 120,
    image: "/images/brand/3.jpg",
  },
  {
    id: 4,
    name: "Brand Name 4",
    price: 120,
    image: "/images/brand/4.jpg",
  },
  {
    id: 5,
    name: "Brand Name 5",
    price: 120,
    image: "/images/brand/5.jpg",
  },
  {
    id: 6,
    name: "Brand Name 6",
    price: 120,
    image: "/images/brand/6.jpg",
  },
];