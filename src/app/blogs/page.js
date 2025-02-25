import SearchBox from "@/components/Blogs/SearchBox";
import "./blogs.css"
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';

const BlogsPage = () => {
  return (
    <>
      {/* Page Breadcrumb */}
      <PageBreadcrumb breadcrumbLink={"Blogs"} breadcrumbTitle={"Blogs"}/>
      <div className='uren-container'>
        <div className="grid grid-cols-4 gap-8">
          {/* Left Side */}
          <aside className="space-y-8">
            {/* Search box */}
            <SearchBox />
            {/* Ad Banner */}
              {/* <Image src={"/images/shop/1.jpg"} width={500} height={1000} alt='UREN' className='hover:opacity-85 cursor-pointer transition-all ease-in-out duration-300'/> */}
          </aside>
        
          {/* Right Side (All Products List) */}
          <div className="col-span-3">
            {/* Sorting Dropdown */}
            {/* <SortingDropdown /> */}

            {/* Products List with Lazy loading*/}
            {/* <ProductsListWithLazyLoad productsList={sortedProducts} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;