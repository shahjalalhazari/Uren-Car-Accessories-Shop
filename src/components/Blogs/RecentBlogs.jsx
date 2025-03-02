import SingleBlogSmallCard from '../shared/cards/SingleBlogSmallCard';

const RecentBlogs = ({ blogs }) => {  
    return (
      <div>
        <h6 className="blog-aside-title">Recent Posts</h6>
        <hr />

        <div className="blog-list">
          {/* map last 6 blogs in descending order */}
          {blogs.slice(-6).reverse().map((blog, index) => (
            <SingleBlogSmallCard singleBlog={blog} key={index} />
          ))}
        </div>
      </div>
    );
};

export default RecentBlogs;