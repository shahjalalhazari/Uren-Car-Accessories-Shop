"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PageBreadcrumb = ({ breadcrumbTitle, breadcrumbLink }) => {
  const url = usePathname();
  const urlParts = url.split("/").filter(Boolean);

  // Shop Related
  const isShop = urlParts.includes("shop");
  const isProductDetails = urlParts.length >= 3;

  // User Related
  const isUser = urlParts.includes("user");

  return (
    <div className="breadcrumb-bg bg-[url('/images/breadcrumb/1.jpg')] h-[25vh] lg:h-[50vh]">
      <div className="breadcrumb-bg-overlay">
        <h2 className="breadcrumb-title">{breadcrumbTitle}</h2>
        <div className="breadcrumbs text-xs lg:text-sm mx-auto">
          <ul>
            {/* Home Link */}
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