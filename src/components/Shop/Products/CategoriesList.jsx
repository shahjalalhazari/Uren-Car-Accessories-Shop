import Link from 'next/link';

const CategoriesList = ({ categoriesList }) => {
  return (
    <div className="bg-[#eee] p-6">
      <h5 className="uppercase text-xl text-[#333] font-bold">Categories</h5>
      <div className="relative my-4">
        <div className="bg-[#ddd] w-full h-[3px]"></div>
        <div className="bg-primary w-16 h-[3px] absolute top-0 left-0"></div>
      </div>
      <ul className="flex flex-col gap-y-4 text-[#999]">
        {categoriesList.map((category, index) => (
          <Link href={"/"} key={index}>
            <li className="flex justify-between font-medium text-sm hover:text-secondary">
              <span>{category.name}</span>
              <span>&#40;12&#41;</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;