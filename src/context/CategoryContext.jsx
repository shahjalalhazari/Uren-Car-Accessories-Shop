"use client"
import { usePathname, useRouter } from "next/navigation";
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
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // GET CATEGORY FROM URL ON INITIAL LOAD.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const getCategoryFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("category") || "";
    };
    
    const categoryFromUrl = getCategoryFromUrl();
    setSelectedCategory(categoryFromUrl);
    setIsInitialized(true);
    
    // LISTEN FOR BROWSER NAVIGATION (BACK/FORWARD BUTTONS)
    const handleUrlChange = () => {
      const newCategory = getCategoryFromUrl();
      if (newCategory !== selectedCategory) {
        setSelectedCategory(newCategory);
      }
    };
    
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);


  // HANDLE CATEGORY SELECTION UPDATE STATE AND URL.
  const handleCategorySelect = useCallback((category) => {
    if (typeof window === 'undefined') return;
    
    const params = new URLSearchParams(window.location.search);
    
    // IF CLICK ON SAME CATEGORY, DESELECT IT.
    const newCategory = selectedCategory === category ? "" : category;
    
    if (newCategory) {
      params.set("category", newCategory);
    } else {
      params.delete("category");
    }
    
    setSelectedCategory(newCategory);

    router.push(`/shop/products?${params.toString()}`, { scroll: false });
  }, [selectedCategory, router]);


  // GENERATE URL WITH CATEGORY PARAMETER.
  const getCategoryUrl = useCallback((category) => {
    if (typeof window === 'undefined') {
      return `/shop/products?category=${encodeURIComponent(category)}`;
    }
    
    const params = new URLSearchParams(window.location.search);
    
    if (selectedCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    
    return `/shop/products?${params.toString()}`;
  }, [selectedCategory, pathname]);

  if (!isInitialized) {
    return null;
  }


  return (
    <CategoryContext.Provider value={{
      selectedCategory,
      handleCategorySelect,
      getCategoryUrl
    }}>
      {children}
    </CategoryContext.Provider>
  );
}