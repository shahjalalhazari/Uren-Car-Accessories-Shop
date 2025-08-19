import Link from "next/link";

const PrimaryBtn = ({ text, path }) => {
  return (
    <button className="primary-btn">
      <Link href={path}>{text}</Link>
    </button>
  );
};

export default PrimaryBtn;