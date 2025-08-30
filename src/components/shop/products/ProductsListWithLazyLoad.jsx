"use client";
import SingleProductCard from "@/components/shared/cards/SingleProductCard";
import UrenLoading from "@/components/shared/UrenLoading";
import { useEffect, useRef, useState } from "react";

const ProductsListWithLazyLoad = ({ productsList }) => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const productsPerLoad = 6;

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
      {displayProducts?.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <SingleProductCard
            singleProduct={item}
            borderStyle="border"
            cardStyle="h-full"
          />
        </div>
      ))}

      {/* Lazy Load Trigger */}
      {displayProducts.length < productsList.length && (
        <div
          id="lazy-load-trigger"
          className="md:col-span-2 lg:col-span-3 text-center"
        >
          <UrenLoading />
        </div>
      )}

      {/* END MESSAGE */}
      {displayProducts.length > 0 && displayProducts.length >= productsList.length && (
        <div className="col-span-full text-center">
          <p className="text-body text-xs lg:text-sm">Showing all {productsList.length} products</p>
        </div>
      )}

      {/* EMPTY STATE */}
      {productsList.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-body">No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductsListWithLazyLoad;
