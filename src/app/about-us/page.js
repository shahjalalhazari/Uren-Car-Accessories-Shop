import "./about-us.css";
import PageBreadcrumb from "@/components/shared/PageBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaChartBar, FaRegSmile, FaShoppingCart } from "react-icons/fa";

export const metadata = {
  title: "About Us",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

const AboutUsPage = () => {
  return (
    <div>
      {/* Page Breadcrumb */}
      <PageBreadcrumb breadcrumbTitle={"About Us"} breadcrumbLink={"About Us"} />

      {/* Main content */}
      <div className="my-20 mx-8">
        <div className="about-us-layout">
          <Link href={"/"} className="about-us-img">
            <Image src="/images/about-us/1.jpg" width="2000" height="800" alt="Uren Store" />
          </Link>
          <div className="about-us-content">
            <h1>Welcome To <span className="text-primary"> Uren&apos;s</span> Store!</h1>
            <div className="relative my-5">
              <div className="bg-[#eaeaea] w-full h-[2px]"></div>
              <div className="bg-primary w-44 h-[2px] absolute top-0 left-0"></div>
            </div>
            <p>
              We Provide Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi fuga facilis, consequuntur, maiores eveniet voluptatum, omnis possimus temporibus aspernatur nobis animi in exercitationem vitae nulla! Adipisci ullam illum quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla veniam? Magni aliquid asperiores magnam. Veniam ex tenetur.
            </p>
            <Link href={"/shop/products"}>
              <button className="about-us-shop-btn">Shop Now</button>
            </Link>
          </div>
        </div>

        {/* project count area */}
        <div className="project-count-layout">
          <div className="project-count-single-item">
            <FaRegSmile className="text-5xl"/>
            <h3>5.8k+</h3>
            <h6>Happy Customers</h6>
          </div>
          <div className="project-count-single-item">
            <FaChartBar className="text-5xl"/>
            <h3>10k+</h3>
            <h6>Products Listed</h6>
          </div>
          <div className="project-count-single-item">
            <FaShoppingCart className="text-5xl"/>
            <h3>15k+</h3>
            <h6>Monthly Order</h6>
          </div>
          <div className="project-count-single-item">
            <FaCalendarAlt className="text-5xl"/>
            <h3>25</h3>
            <h6>Years Serving</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;