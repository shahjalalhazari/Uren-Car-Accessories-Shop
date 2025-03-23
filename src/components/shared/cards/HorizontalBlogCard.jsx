import Image from 'next/image';
import Link from 'next/link';

const HorizontalBlogCard = ({singleBlog}) => {
  const { image, title, date } = singleBlog;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  
    return (
      <div className="horizontal-blog-card">
        <Link href={"/"}>
          <Image
            src={image}
            width={"85"}
            height={"45"}
            alt={"blog.name"}
            className="uren-transition"
          />
        </Link>
        <div className="horizontal-blog-card-content uren-transition">
          <Link href={""}>
            <h6 className="uren-transition">{truncateText(title, 30)}</h6>
          </Link>
          <p className="text-xs">{date}</p>
        </div>
      </div>
    );
};

export default HorizontalBlogCard;