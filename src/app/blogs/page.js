import SearchBox from "@/components/Blogs/SearchBox";
import "./blogs.css"
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import Archives from "@/components/Blogs/Archives";
import RecentBlogs from "@/components/Blogs/RecentBlogs";
import Tags from "@/components/Blogs/Tags";
import BrandsList from "@/components/Blogs/BrandsList";
import CarModels from "@/components/Blogs/CarModels";
import AllBlogsList from "@/components/Blogs/AllBlogsList";

export const metadata = {
  title: "Blogs",
  keywords: ["car", "parts", "car parts", "car accessories", "toyota"]
};

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

            {/* Archives List */}
            <Archives />

            {/* Recent Blogs List */}
            <RecentBlogs blogs={blogs} />

            {/* Car Brand List */}
            <BrandsList />
            
            {/* Car Models List */}
            <CarModels/>

            {/* Tags List */}
            <Tags/>
          </aside>
        
          {/* Right Side (All Products List) */}
          <div className="col-span-3">
            <AllBlogsList allBlogs={blogs}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;




const blogs = [
  {
    id: 1,
    title: "Quaerat eligendi dolores autem omnis sed",
    image: "/images/blog/medium-size/1.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-09-2024",
  },
  {
    id: 2,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/2.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
  {
    id: 3,
    title: "Laudantium minus excepturi expedita dolore",
    image: "/images/blog/medium-size/3.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-12-2024",
  },
  {
    id: 4,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/4.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "28-02-2025",
  },
  {
    id: 5,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/5.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "28-02-2025",
  },
  {
    id: 6,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/6.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
  {
    id: 7,
    title: "Quaerat eligendi dolores autem omnis sed",
    image: "/images/blog/medium-size/1.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-09-2024",
  },
  {
    id: 8,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/2.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
  {
    id: 9,
    title: "Laudantium minus excepturi expedita dolore",
    image: "/images/blog/medium-size/3.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-12-2024",
  },
  {
    id: 10,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/4.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "28-02-2025",
  },
  {
    id: 11,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/5.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "28-02-2025",
  },
  {
    id: 12,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/6.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
  {
    id: 13,
    title: "Quaerat eligendi dolores autem omnis sed",
    image: "/images/blog/medium-size/1.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-09-2024",
  },
  {
    id: 14,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/2.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
  {
    id: 15,
    title: "Laudantium minus excepturi expedita dolore",
    image: "/images/blog/medium-size/3.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-12-2024",
  },
  {
    id: 16,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/4.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "28-02-2025",
  },
  {
    id: 17,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/5.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "28-02-2025",
  },
  {
    id: 18,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/6.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
];