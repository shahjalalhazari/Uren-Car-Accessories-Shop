import Image from "next/image";
import Link from "next/link";


const SingleBlogCard = ({ blog }) => {
  const { title, body } = blog;
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  return (
    <div>
      <div className="blog-image">
        <Image
          src={"/images/blog/medium-size/1.jpg"}
          width={350}
          height={220}
          alt={blog.title}
          className="w-full"
        />
        <p className="blog-date">{"01 Feb 2025"}</p>
      </div>
      {/* REPLACE */}
      <Link href={"/"}>
        <h2 className="blog-title">{truncateText(title, 60)}</h2>
      </Link>
      <p className="blog-description">
        {truncateText(body, 100)}{" "}
        <Link href={"/"}>
          <span className="read-more">READ MORE</span>
        </Link>
      </p>
    </div>
  );
};

export default SingleBlogCard;