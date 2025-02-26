import { BiSearch } from "react-icons/bi";

const SearchBox = () => {
  return (
    <div>
      <h6 className="blog-aside-title">Search</h6>
      <hr />
      <form action="" className="blog-search-form">
        <input
          type="text"
          name="blogSearch"
          id="blogSearch"
          placeholder="Search Here"
        />
        <button>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
