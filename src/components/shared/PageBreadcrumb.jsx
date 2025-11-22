"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import UrenLoading from './UrenLoading';

const PageBreadcrumb = ({ breadcrumbTitle, breadcrumbLink }) => {
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
  const isProductDetails = isMounted && urlParts.length >= 3;

  // USER RELATED.
  const isUser = isMounted && urlParts.includes("user");

  if (!isMounted) {
    return (
      <UrenLoading/>
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

            {isUser && <li>User</li>}
            {isProductDetails && (
              <li className="hover:text-primary uren-transition">
                <Link href={"/shop/products"}>Products</Link>
              </li>
            )}
            <li className='text-body'>{breadcrumbLink}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBreadcrumb;