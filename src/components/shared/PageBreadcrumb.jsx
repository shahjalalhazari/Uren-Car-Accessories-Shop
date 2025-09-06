"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PageBreadcrumb = ({ breadcrumbTitle, breadcrumbLink }) => {
  // const url = usePathname();
  // const urlParts = url.split("/").filter(Boolean);
  const [urlParts, setUrlParts] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    if(pathname) {
      setUrlParts(pathname.split("/").filter(Boolean));
    }
  },[pathname])


  // SHOP RELATED.
  const isShop = isMounted && urlParts.includes("shop");
  const isProductDetails = isMounted && urlParts.length >= 3;

  // USER RELATED.
  const isUser = isMounted && urlParts.includes("user");

  if (!isMounted) {
    return (
      <div className="breadcrumb-bg bg-[url('/images/breadcrumb/1.jpg')] h-[25vh] lg:h-[50vh]">
        <div className="breadcrumb-bg-overlay">
          <div className="animate-pluse h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="animate-pluse h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
      </div>
    )
  }
  return (
    <div className="breadcrumb-bg bg-[url('/images/breadcrumb/1.jpg')] h-[25vh] lg:h-[50vh]">
      <div className="breadcrumb-bg-overlay">
        <h2 className="breadcrumb-title">{breadcrumbTitle}</h2>
        <div className="breadcrumbs text-xs lg:text-sm mx-auto">
          <ul>
            {/* HOME LINK */}
            <li className="hover:text-primary uren-transition">
              <Link href="/">Home</Link>
            </li>

            {isShop && <li>Shop</li>}
            {isUser && <li>User</li>}
            {isProductDetails && (
              <li className="hover:text-primary uren-transition">
                <Link href={"/shop/products"}>Products</Link>
              </li>
            )}
            <li>{breadcrumbLink}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBreadcrumb;