import PrimaryBtn from '@/components/shared/buttons/PrimaryBtn';
import SingleBlogCard from '@/components/shared/cards/SingleBlogCard';
import SectionHeading from '@/components/shared/SectionHeading';
import React from 'react';

const Blogs = () => {
    return (
      <div className="px-8 py-20 bg-[#eee] text-center">
        {/* Section Heading */}
        <SectionHeading
          heading={"From Our Blogs"}
          subHeading={"Our Recent Posts"}
        />
        <div className="blog-layout">
          {blogs.map((blog, index) => (
            <SingleBlogCard blog={blog} key={index} />
          ))}
        </div>
        <PrimaryBtn text={"SEE MORE"} path={"/blogs"} />
      </div>
    );
};

export default Blogs;


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
    date: "29-02-2025",
  },
];