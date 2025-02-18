import Link from 'next/link';

const PageBreadcrumb = () => {
    return (
      <div className="breadcrumb-bg bg-[url('/images/breadcrumb/1.jpg')] h-[35vh]">
        <div className="breadcrumb-bg-overlay">
          <h2 className="breadcrumb-title">All Products</h2>
          <div className="breadcrumbs text-xs mx-auto">
            <ul>
              <li className="hover:text-primary transition-all ease-in-out duration-300">
                <Link href={"/"}>Home</Link>
              </li>
              <li>Shop</li>
              <li>All Products</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default PageBreadcrumb;