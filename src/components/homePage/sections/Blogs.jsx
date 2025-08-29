import PrimaryBtn from '@/components/shared/buttons/PrimaryBtn';
import SingleBlogCard from '@/components/shared/cards/SingleBlogCard';
import SectionHeading from '@/components/shared/headings/SectionHeading';

const Blogs = ({blogs}) => {

  return (
    <div className="blog-section">
        {/* Section Heading */}
        <SectionHeading
          heading={"From Our Blogs"}
          subHeading={"Our Recent Posts"}
        />
        <div className="blog-layout">
          {blogs.slice(0,4)?.map((blog, index) => (
            <SingleBlogCard blog={blog} key={index} bg={"bg-base-100"} />
          ))}
        </div>
        <PrimaryBtn text={"SEE MORE"} path={"/blogs"} />
      </div>
  );
};

export default Blogs;