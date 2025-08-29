import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import CategoriesList from "@/components/shop/products/CategoriesList";
import { getCategories } from "@/lib/getCategories";
import { getProducts } from "@/lib/getProducts";
import "./products.css";


export const metadata = {
  title: "Products",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const ProductsPage = async ({searchParams}) => {
  const { sort } = await searchParams;
  const categories= await getCategories();
  const products = await getProducts();

  
  const sortType = sort || "default";
  let sortedProducts = [...products];

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
      sortedProducts = [...products];
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

            {/* Price Range Filter */}
            {/* <PriceRangeFilter /> */}

            {/* Brand's Names List */}
            {/* <BrandNamesList /> */}

            {/* Ad Banner */}
            {/* <Image src={"/images/shop/1.jpg"} width={500} height={1000} alt='UREN' className='hidden lg:block hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300'/> */}
          </aside>
        
          {/* Right Side (All Products List) */}
          <div className="products-list">
            {/* Sorting Dropdown */}
              {/* <SortingDropdown /> */}

            {/* Products List with Lazy loading*/}
            {/* <ProductsListWithLazyLoad productsList={sortedProducts} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;