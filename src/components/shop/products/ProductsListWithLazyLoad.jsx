"use client";
import SingleProductCard from "@/components/shared/cards/SingleProductCard";
import LoadingComponent from "@/components/shared/LoadingComponent";
import { useEffect, useRef, useState } from "react";

const ProductsListWithLazyLoad = ({ productsList }) => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  // REPLACE
  const productsPerLoad = 3;

  useEffect(() => {
    // Load first batch
    setDisplayProducts(productsList.slice(0, productsPerLoad));
  }, [productsList]);

  useEffect(() => {
    if (page > 1) {
      // Append next batch when scrolls down
      const newBatch = productsList.slice(
        displayProducts.length,
        page * productsPerLoad
      );
      setDisplayProducts((prev) => [...prev, ...newBatch]);
    }
  }, [page, productsList]);

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
    const lastProduct = document.querySelector("#lazy-load-trigger");

    if (lastProduct) {
      observer.observe(lastProduct);
    }

    return () => {
      if (lastProduct) observer.unobserve(lastProduct);
    };
  }, [displayProducts]);

  return (
    <div className="products-list-layout">
      {displayProducts.map((item, index) => (
        <SingleProductCard
          singleProduct={item}
          key={index}
          borderStyle={"border"}
        />
      ))}

      {/* Lazy Load Trigger */}
      {displayProducts.length < productsList.length && (
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

export default ProductsListWithLazyLoad;
