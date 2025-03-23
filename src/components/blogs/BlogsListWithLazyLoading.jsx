"use client";
import { useEffect, useRef, useState } from "react";
import SingleBlogCard from "../shared/cards/SingleBlogCard";
import LoadingComponent from "../shared/LoadingComponent";

const BlogsListWithLazyLoading = ({ allBlogs }) => {
  const [displayBlog, setDisplayBlog] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  // REPLACE
  const blogsPerLoad = 3;

  useEffect(() => {
    // Load first batch
    setDisplayBlog(allBlogs.reverse().slice(0, blogsPerLoad));
  }, [allBlogs]);

  useEffect(() => {
    if (page > 1) {
      // Append next batch when scrolls down
      const newBatch = allBlogs.slice(displayBlog.length, page * blogsPerLoad);
      setDisplayBlog((prev) => [...prev, ...newBatch]);
    }
  }, [page, allBlogs]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    const observer = observerRef.current;
    const lastBlog = document.querySelector("#lazy-load-trigger");

    if (lastBlog) {
      observer.observe(lastBlog);
    }

    return () => {
      if (lastBlog) observer.unobserve(lastBlog);
    };
  }, [displayBlog]);

  return (
    <div className="blogs-list-layout mt-8 md:mt-0">
      {displayBlog.map((singleBlog, index) => (
        <SingleBlogCard blog={singleBlog} key={index} bg={"bg-[#eee]"} />
      ))}

      {/* Lazy Load Trigger */}
      {displayBlog.length < allBlogs.length && (
        <div
          id="lazy-load-trigger"
          className="md:col-span-2 lg:col-span-3 text-center"
        >
          <LoadingComponent />
        </div>
      )}
    </div>
  );
};

export default BlogsListWithLazyLoading;
