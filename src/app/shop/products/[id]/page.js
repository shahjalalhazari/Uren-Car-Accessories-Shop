import "./product-details.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import { getProductDetails } from "@/lib/getProductDetails";
import ProductImgsGallery from "@/components/shop/productDetails/ProductImgsGallery";
import DetailsContent from "@/components/shop/productDetails/DetailsContent";
import DetailsTabs from "@/components/shop/productDetails/DetailsTabs";

export const generateMetadata = async({params}) => {
  const {title, description} = await getProductDetails(params.id);
  
  return {
    title: title,
    description: description,
  }
};

const ProductDetailsPage = async ({params}) => {
  const {id} = await params;
  const productDetails = await getProductDetails(id);
  const {title, images, description, reviews} = productDetails;

  return (
    <>
      <PageBreadcrumb 
        breadcrumbTitle={title} 
        breadcrumbLink={title} 
      />

      <div className="uren-container">
        <div className="product-details-layout">
          {/* PRODUCT IMAGES GALLERY */}
          <ProductImgsGallery images={images} zoom={2.5} autoplayDelay={7000} />

          {/* PRODUCT'S DETAILS CONTENT */}
          <DetailsContent productDetails={productDetails}/>
        </div>

        {/* DESCRIPTION & REVIEWS TABS */}
        <DetailsTabs description={description} reviews={reviews}/>
      </div>
    </>
  );
};

export default ProductDetailsPage;