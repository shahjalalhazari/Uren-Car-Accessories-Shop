import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBox = () => {
    return (
      <div>
        <h6 className="blog-search-title mb-2">Search</h6>
        <hr />
        <form action="" className="blog-search-form mt-8">
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