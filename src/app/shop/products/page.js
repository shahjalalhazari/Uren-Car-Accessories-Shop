import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import BrandNamesList from "@/components/shop/products/BrandNamesList";
import CategoriesList from "@/components/shop/products/CategoriesList";
import PriceRangeFilter from "@/components/shop/products/PriceRangeFilter";
import SortingDropdown from "@/components/shop/products/SortingDropdown";
import Image from "next/image";
import "./products-page.css";
import ProductsListWithLazyLoad from "@/components/shop/products/ProductsListWithLazyLoad";

export const metadata = {
  title: "Products",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const ProductsPage = async ({ searchParams }) => {
  const { sort } = await searchParams;
  
  const sortType = sort || "default";
  let sortedProducts = [...ProductsList];

  switch (sortType) {
    case "a-z": // Name, A to Z
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a": // Name, Z to A
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "low-high": // Price, low to high
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "high-low": // Price, high to low
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "highest": // Rating (Highest)
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "lowest": // Rating (Lowest)
      sortedProducts.sort((a, b) => a.rating - b.rating);
      break;
    default:
      sortedProducts = [...ProductsList];
  }

  return (
    <div>
      {/* Page Breadcrumb */}
      <PageBreadcrumb breadcrumbTitle={"All Products"} breadcrumbLink={"All Products"}/>
      
      {/* Main content */}
      <main className="uren-container">
        <div className="products-page-layout">

          {/* Left Side */}
          <aside className="products-sidebar">
            {/* Categories List */}
            <CategoriesList categoriesList={categoriesList} />

            {/* Price Range Filter */}
            <PriceRangeFilter />

            {/* Brand's Names List */}
            <BrandNamesList />

            {/* Ad Banner */}
            <Image src={"/images/shop/1.jpg"} width={500} height={1000} alt='UREN' className='hidden lg:block hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300'/>
          </aside>
        
          {/* Right Side (All Products List) */}
          <div className="products-list">
            {/* Sorting Dropdown */}
              <SortingDropdown />

            {/* Products List with Lazy loading*/}
            <ProductsListWithLazyLoad productsList={sortedProducts} />
          </div>
        </div>
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

const ProductsList = [
  {
    name: "Oil Filter",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/1.png",
    rating: 3.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Brake Pads",
    price: 750.0,
    oldPrice: 0.0,
    image: "/images/product/medium-size/2.png",
    rating: 3,
    isNew: false,
    discountOf: 55,
  },
  {
    name: "Head Light",
    price: 89.99,
    oldPrice: 150.0,
    image: "/images/product/medium-size/3.png",
    rating: 3.5,
    isNew: true,
    discountOf: 0,
  },
  {
    name: "Alternator",
    price: 250.5,
    oldPrice: 175.99,
    image: "/images/product/medium-size/4.png",
    rating: 5,
    isNew: false,
    discountOf: 33,
  },
  {
    name: "Gear Filter",
    price: 550.75,
    oldPrice: 440.65,
    image: "/images/product/medium-size/5.png",
    rating: 4,
    isNew: false,
    discountOf: 74,
  },
  {
    name: "Tail Light",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/6.png",
    rating: 2,
    isNew: false,
    discountOf: 60,
  },
  {
    name: "Air Filter",
    price: 135.0,
    oldPrice: 0.0,
    image: "/images/product/medium-size/7.png",
    rating: 2.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Shock Absorbers",
    price: 999.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/8.png",
    rating: 1,
    isNew: true,
    discountOf: 44,
  },
  {
    name: "Brake Discs",
    price: 89.99,
    oldPrice: 120.99,
    image: "/images/product/medium-size/9.png",
    rating: 3,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Bumper",
    price: 345.99,
    oldPrice: 300.0,
    image: "/images/product/medium-size/10.png",
    rating: 3.5,
    isNew: false,
    discountOf: 19,
  },
  {
    name: "Ignition Coils",
    price: 240.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/11.png",
    rating: 5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "A/C Filter",
    price: 89.99,
    oldPrice: 110.0,
    image: "/images/product/medium-size/12.png",
    rating: 4,
    isNew: true,
    discountOf: 42,
  },
  {
    name: "Spark Plug",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/13.png",
    rating: 3,
    isNew: false,
    discountOf: 25,
  },
  {
    name: "Radiator",
    price: 110.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/14.png",
    rating: 2.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Compressor",
    price: 189.99,
    oldPrice: 220.0,
    image: "/images/product/medium-size/15.png",
    rating: 3,
    isNew: true,
    discountOf: 66,
  },
  {
    name: "Oil Filter",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/1.png",
    rating: 3.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Brake Pads",
    price: 750.0,
    oldPrice: 0.0,
    image: "/images/product/medium-size/2.png",
    rating: 3,
    isNew: false,
    discountOf: 55,
  },
  {
    name: "Head Light",
    price: 89.99,
    oldPrice: 150.0,
    image: "/images/product/medium-size/3.png",
    rating: 3.5,
    isNew: true,
    discountOf: 0,
  },
  {
    name: "Alternator",
    price: 250.5,
    oldPrice: 175.99,
    image: "/images/product/medium-size/4.png",
    rating: 5,
    isNew: false,
    discountOf: 33,
  },
  {
    name: "Gear Filter",
    price: 550.75,
    oldPrice: 440.65,
    image: "/images/product/medium-size/5.png",
    rating: 4,
    isNew: false,
    discountOf: 74,
  },
  {
    name: "Tail Light",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/6.png",
    rating: 2,
    isNew: false,
    discountOf: 60,
  },
  {
    name: "Air Filter",
    price: 135.0,
    oldPrice: 0.0,
    image: "/images/product/medium-size/7.png",
    rating: 2.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Shock Absorbers",
    price: 999.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/8.png",
    rating: 1,
    isNew: true,
    discountOf: 44,
  },
  {
    name: "Brake Discs",
    price: 89.99,
    oldPrice: 120.99,
    image: "/images/product/medium-size/9.png",
    rating: 3,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Bumper",
    price: 345.99,
    oldPrice: 300.0,
    image: "/images/product/medium-size/10.png",
    rating: 3.5,
    isNew: false,
    discountOf: 19,
  },
  {
    name: "Ignition Coils",
    price: 240.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/11.png",
    rating: 5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "A/C Filter",
    price: 89.99,
    oldPrice: 110.0,
    image: "/images/product/medium-size/12.png",
    rating: 4,
    isNew: true,
    discountOf: 42,
  },
  {
    name: "Spark Plug",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/13.png",
    rating: 3,
    isNew: false,
    discountOf: 25,
  },
  {
    name: "Radiator",
    price: 110.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/14.png",
    rating: 2.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Compressor",
    price: 189.99,
    oldPrice: 220.0,
    image: "/images/product/medium-size/15.png",
    rating: 3,
    isNew: true,
    discountOf: 66,
  },
];