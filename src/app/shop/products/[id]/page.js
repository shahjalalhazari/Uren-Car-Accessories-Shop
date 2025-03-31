import ProductImgsGallery from "@/components/shop/product-details/ProductImgsGallery";
import "./product-details.css"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import ProductRating from "@/components/shared/ProductRating";
import Link from "next/link";
import QuantitySelector from "@/components/shop/product-details/QuantitySelector";
import AddToCartBtn from "@/components/shared/buttons/AddToCartBtn";
import OutlineBtn from "@/components/shared/buttons/OutlineBtn";
import { BiHeart } from "react-icons/bi";
import ProductDetailsTabs from "@/components/shop/product-details/ProductDetailsTabs";


// set page title using generate meta data dynamically
export const generateMetadata = async({params}) => {
  // const {title} = await LoadSingleBlogData(params.id);
  
  // return {
  //   title: title
  // }
};


const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  
  return (
    <>
      <PageBreadcrumb breadcrumbLink={"Products Name"} breadcrumbTitle={"Product's Name"}/>
      <div className="uren-container">
        <div className="product-details-layout">
          {/* Photo Gallery */}
          <ProductImgsGallery images={images} zoom={2.5} autoplayDelay={7000} />

          {/* products details */}
          <div className="product-details-content">
            <h3>Dolorem odio provident ut nihil</h3>
            <h5>AED 599.99 <span className="text-xs font-normal text-body line-through">799.99</span></h5>

            {/* Product Rating */}
            <div className="my-3"><ProductRating rating={3.5} text={"base"} /></div>
            <ul className="space-y-2 font-semibold">
              <li>Category: <Link href={"/"}>Tire</Link></li>
              <li>Brand: <Link href={"/"}>Toyota</Link> </li>
              <li>Model: <Link href={"/"}>Sienna</Link> </li>
              <li>Manufacturing Year: <Link href={"/"}>3224</Link> </li>
              <li>Size: <Link href={"/"}>255 / 65 / R17</Link> </li>
              <li>Color: <span>Black</span> </li>
              <li>Availability: <span>In-Stock</span> </li>
            </ul>

            {/* Quantity */}
            {/* Add In-Stock Available num for max quantity */}
            <QuantitySelector max={20} />

            {/* Buttons */}
            <div className="flex gap-x-4 mt-6">
              <AddToCartBtn href={"/"} />
            {/* ADD TO WISHLIST BUTTON */}
              <OutlineBtn btnIcon={<BiHeart />} btnTitle={"Add To Wishlist"} />
            </div>

            <div className="product-tags">
              <h6 className="product-tags-heading">Tags:</h6>
              {tags.map((tag, index) =>
                <Link href={"/"} key={index} className="product-tag uren-transition">{tag},</Link>
              )}
            </div>
          </div>
        </div>        

        {/*  */}
        <ProductDetailsTabs
          description="This is a high-quality product that meets all your needs."
          reviews={[
            { name: "John Doe", comment: "Great product, highly recommended!" },
            { name: "Jane Smith", comment: "Good quality, worth the price." },
          ]}
        />
      </div>
    </>
  );
};

export default ProductDetailPage;

const images = [
  "/images/product/large-size/1.jpg",
  "/images/product/large-size/2.jpg",
  "/images/product/large-size/3.jpg",
  "/images/product/large-size/4.jpg",
  "/images/product/large-size/5.jpg",
  "/images/product/large-size/6.jpg",
]

const tags = ["Tire", "SUV", "SUV Car Tire", "Toyota", "Sienna", "Toyota Car Tire"]