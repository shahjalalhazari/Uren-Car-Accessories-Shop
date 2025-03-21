"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const PageBreadcrumb = ({ breadcrumbTitle, breadcrumbLink }) => {
  const url = usePathname();
  const isShop = url.split("/").includes("shop");
  
  return (
    <div className="breadcrumb-bg bg-[url('/images/breadcrumb/1.jpg')] h-[25vh] lg:h-[50vh]">
      <div className="breadcrumb-bg-overlay">
        <h2 className="breadcrumb-title">{breadcrumbTitle}</h2>
        <div className="breadcrumbs text-xs mx-auto">
          <ul>
            <li className="hover:text-primary transition-all ease-in-out duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            {isShop && <li>Shop</li>}
            <li>{breadcrumbLink}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBreadcrumb;