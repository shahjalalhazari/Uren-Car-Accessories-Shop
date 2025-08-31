import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import CategoriesList from "@/components/shop/products/CategoriesList";
import { getCategories } from "@/lib/getCategories";
import { getProducts } from "@/lib/getProducts";
import "./products.css";
import ProductsListWithLazyLoad from "@/components/shop/products/ProductsListWithLazyLoad";
import SortingDropdown from "@/components/shop/products/SortingDropdown";
import PriceRangeFilter from "@/components/shop/products/PriceRangeFilter";


export const metadata = {
  title: "Products",
  keywords: ["car accessories", "car parts", "auto parts", "vehicle accessories", "toyota parts", "car modifications"]
};

const ProductsPage = async ({searchParams}) => {
  const { sort, min_price, max_price } = await searchParams;
  const categories= await getCategories();
  const products = await getProducts();

  // FILTER PRODUCTS BY PRICE RANGE FIRST.
  let filteredProducts = [...products];
  
  if (min_price || max_price) {
    const min = min_price ? parseInt(min_price) : 0;
    const max = max_price ? parseInt(max_price) : 10000;
    
    filteredProducts = filteredProducts.filter(product => 
      product.price >= min && product.price <= max
    );
  }
  
  // Then apply sorting
  const sortType = sort || "default";
  let sortedProducts = [...filteredProducts];

  switch (sortType) {
    case "a-z": // Name, A to Z
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "z-a": // Name, Z to A
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
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
      sortedProducts = [...filteredProducts];
  }

  return (
    <div>
      {/* PAGE BREADCRUMB */}
      <PageBreadcrumb breadcrumbTitle={"All Products"} breadcrumbLink={"Products"}/>
      
      {/* MAIN CONTENT */}
      <main className="uren-container">
        <div className="products-page-layout">

          {/* LEFT SIDE */}
          <aside className="products-sidebar">
            {/* CATEGORIES LIST */}
            <CategoriesList categoriesList={categories} />

            {/* PRICE RANGE FILTER */}
            <PriceRangeFilter />

            {/* Brand's Names List */}
            {/* <BrandNamesList /> */}

            {/* Ad Banner */}
            {/* <Image src={"/images/shop/1.jpg"} width={500} height={1000} alt='UREN' className='hidden lg:block hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300'/> */}
          </aside>
        
          {/* Right Side (All Products List) */}
          <div className="products-list">
            {/* SORTING DROPDOWN */}
            <SortingDropdown />

            {/* PRODUCTS LIST WITH LAZY LOADING*/}
            <ProductsListWithLazyLoad productsList={sortedProducts} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;