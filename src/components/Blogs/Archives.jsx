import Link from "next/link";


const Archives = () => {
  return (
    <div>
      <h6 className="blog-aside-title">Archives</h6>
      <hr />
      <ul className="archives-list text-[#999] text-sm">
        <li>
          <Link href={"/"}>February 2025</Link>
        </li>
        <li>
          <Link href={"/"}>January 2025</Link>
        </li>
        <li>
          <Link href={"/"}>December 2024</Link>
        </li>
        <li>
          <Link href={"/"}>November 2024</Link>
        </li>
        <li>
          <Link href={"/"}>October 2024</Link>
        </li>
        <li>
          <Link href={"/"}>September 2024</Link>
        </li>
      </ul>
    </div>
  );
};

export default Archives;