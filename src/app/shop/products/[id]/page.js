import "./product-details.css"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";


const ProductDetailPage = async ({ params }) => {
  const { id } = await params;
  
  return (
    <>
      <PageBreadcrumb breadcrumbLink={"Products Name"} breadcrumbTitle={"Product's Name"}/>
      <div className="uren-container">
        <div className="product-details-layout">
          <div>Photo Gallery</div>
          <div className="product-details-content">
            <h3>Dolorem odio provident ut nihil</h3>
            <p><span>Brands:</span> Buxton</p>
            <p><span>Product Code:</span> Product 16</p>
            <p><span>Reward Points:</span> 100</p>
            <p><span>Availability:</span> In Stock</p>
            <p><span>EX Tax:</span> $453.35</p>
          </div>
        </div>
          <div className="description mt-8">
              <h6> Ullam aliquam</h6>
              <p>Voluptatum, minus? Optio molestias voluptates aspernatur laborum ratione minima, natus eaque nemo rem quisquam, suscipit architecto saepe. Debitis omnis labore laborum consectetur, quas, esse voluptates minus aliquam modi nesciunt earum! Vero rerum molestiae corporis libero repellat doloremque quae sapiente ratione maiores qui aliquam, sunt obcaecati! Iure nisi doloremque numquam delectus.
            </p>
            </div>
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