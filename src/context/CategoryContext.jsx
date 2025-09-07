"use client"
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";


// CONTEXT TO MANAGE CATEGORIES.
const CategoryContext = createContext();


// CUSTOM HOOK TO USE CATEGORY CONTEXT.
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};


// CATEGORY PROVIDER TO WRAP THE APP.
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();


  // GET CATEGORY FROM URL ON INITIAL LOAD.
  useEffect(() => {
    const getCategoryFromUrl = () => {
      if(typeof window === 'undefined') return "";
      const params = new URLSearchParams(window.location.search);
      return params.get("category") || "";
    }
    setSelectedCategory(getCategoryFromUrl());

    const handleUrlChange = () => {
      setSelectedCategory(getCategoryFromUrl());
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  },[]);


  // HANDLE CATEGORY SELECTION UPDATE STATE AND URL.
  const handleCategorySelect = useCallback((category) => {
    const params = new URLSearchParams(window.location.search);

    if (selectedCategory === category) {
      params.delete("category");
      setSelectedCategory("");
    } else {
      params.set("category", category);
      setSelectedCategory(category);
    };

    router.push(`/shop/products?${params.toString()}`, { shallow: false });
  }, [selectedCategory, router]);


  // GENERATE URL WITH CATEGORY PARAMETER.
  const getCategoryUrl = useCallback((category) => {
    if (typeof window === 'undefined') return `/shop/products?category=${category}`;

    const params = new URLSearchParams(window.location.search);

    if (selectedCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    return `/shop/products?${params.toString()}`;
  },[selectedCategory]);


  return (
    <CategoryContext.Provider value={{
      selectedCategory,
      setSelectedCategory,
      handleCategorySelect,
      getCategoryUrl
    }}>
      {children}
    </CategoryContext.Provider>
  );
}