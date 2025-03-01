"use client"
import { useEffect, useState } from 'react';
import SingleBlogCard from '../shared/cards/SingleBlogCard';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  },[])
  
  console.log(blogs);

  return (
    <div className="grid grid-cols-3 gap-8 mt-8 text-start mb-12">
      {blogs?.map((blog, index) => (
        <SingleBlogCard blog={blog} key={index} />
      ))}
    </div>
  );
};

export default AllBlogs;