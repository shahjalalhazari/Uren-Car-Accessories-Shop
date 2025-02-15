import Image from "next/image";
import Link from "next/link";


const SingleBlogCard = ({ blog }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  return (
    <div>
      <div className="blog-image">
        <Image
          src={blog.image}
          width={350}
          height={220}
          alt={blog.title}
          className="w-full"
        />
        <p className="blog-date">{blog.date}</p>
      </div>
      {/* REPLACE */}
      <Link href={"/"}>
        <h2 className="blog-title">{truncateText(blog.title, 60)}</h2>
      </Link>
      <p className="blog-description">
        {truncateText(blog.description, 100)}{" "}
        <Link href={"/"}>
          <span className="read-more">READ MORE</span>
        </Link>
      </p>
    </div>
  );
};

export default SingleBlogCard;