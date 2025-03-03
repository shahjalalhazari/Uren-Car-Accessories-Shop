import SingleBlogCard from '../shared/cards/SingleBlogCard';

const AllBlogsList = ({allBlogs}) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {allBlogs.map((blog) => (
        <SingleBlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default AllBlogsList;