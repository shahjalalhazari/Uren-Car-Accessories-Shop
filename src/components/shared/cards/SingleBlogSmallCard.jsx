import Image from 'next/image';
import Link from 'next/link';

const SingleBlogSmallCard = ({ singleBlog }) => {
  const { image, title, date } = singleBlog;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="small-blog-card">
      <Link href={"/"}>
        <Image
          src={image}
          width={"75"}
          height={"40"}
          alt={"blog.name"}
          className="small-blog-card-img"
        />
      </Link>
      <div className="text-[#999] ">
        <Link href={""}>
          <h6>
            {truncateText(title, 30)}
          </h6>
        </Link>
        <p className='text-sm mt-1'>{date}</p>
      </div>
    </div>
  );
};

export default SingleBlogSmallCard;