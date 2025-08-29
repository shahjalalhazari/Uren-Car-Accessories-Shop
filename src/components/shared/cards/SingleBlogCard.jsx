import Image from "next/image";
import Link from "next/link";


const SingleBlogCard = ({ blog, bg }) => {

  const { title, body, id } = blog;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className={bg}>
      <div className="blog-image">
        <Link href={`/blogs/${id}`}>
          <Image
            src={"/images/blog/medium-size/1.jpg"}
            width={300}
            height={300}
            alt={blog.title}
            className="w-full h-auto"
          />
        </Link>
        <p className="blog-date">29 Aug 2025</p>
      </div>
      <div className="blog-content">
        <Link href={`/blogs/${id}`}>
          <h2 className="blog-title">{truncateText(title, 60)}</h2>
        </Link>
        <p className="blog-description">
          {truncateText(body, 100)}{" "}
          <Link href={`/blogs/${id}`}>
            <span className="read-more">READ MORE</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingleBlogCard;