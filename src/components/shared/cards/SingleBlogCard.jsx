import Image from "next/image";
import Link from "next/link";


const SingleBlogCard = ({ blog }) => {
  const { title, description, image, date, id } = blog;
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  return (
    <div>
      <div className="blog-image">
        <Link href={`/blogs/${id}`}>
          <Image
            src={image}
            width={350}
            height={220}
            alt={blog.title}
            className="w-full h-auto"
          />
        </Link>
        <p className="blog-date">{date}</p>
      </div>
      {/* REPLACE */}
      <Link href={`/blogs/${id}`}>
        <h2 className="blog-title">{truncateText(title, 60)}</h2>
      </Link>
      <p className="blog-description">
        {truncateText(description, 100)}{" "}
        <Link href={`/blogs/${id}`}>
          <span className="read-more">READ MORE</span>
        </Link>
      </p>
    </div>
  );
};

export default SingleBlogCard;