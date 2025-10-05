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

  // FUNCTION FOR CONVERT CATEGORY TO LOWERCASE STRING.
  const normalizeCategory = useCallback((category) => {
    if (!category) return "";

    // IF IT'S AN OBJECT WITH THE NAME PROPERTY (FROM CATEGORIES API).
    if (typeof category === "object" && category.name) {
      return category.name.toLowerCase().trim();
    }
    // IF IT'S ALREADY A STRING (FROM PRODUCT DETAILS API).
    else if (typeof category === "string") {
      return category.toLowerCase().trim();
    }

    return ""
  }, []);

  // GET CATEGORY FROM URL ON INITIAL LOAD.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const getCategoryFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("category") || "";
    };
    
    const categoryFromUrl = getCategoryFromUrl();
    setSelectedCategory(normalizeCategory(categoryFromUrl));
    setIsInitialized(true);
    
    // LISTEN FOR BROWSER NAVIGATION (BACK/FORWARD BUTTONS)
    const handleUrlChange = () => {
      const newCategory = getCategoryFromUrl();
      setSelectedCategory(normalizeCategory(newCategory));
      // if (newCategory !== selectedCategory) {
      //   setSelectedCategory(newCategory);
      // }
    };
    
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [normalizeCategory]);


  // HANDLE CATEGORY SELECTION UPDATE STATE AND URL.
  const handleCategorySelect = useCallback((category) => {
    if (typeof window === 'undefined') return;
    
    const normalizedCategory = normalizeCategory(category);
    const params = new URLSearchParams(window.location.search);
    
    // IF CLICK ON SAME CATEGORY, DESELECT IT.
    const newCategory = selectedCategory === normalizedCategory ? "" : normalizedCategory;

    if (newCategory) {
      params.set("category", newCategory);
    } else {
      params.delete("category");
    }
    
    setSelectedCategory(newCategory);

    router.push(`/shop/products?${params.toString()}`, { scroll: false });
  }, [selectedCategory, router, normalizeCategory]);


  // GENERATE URL WITH CATEGORY PARAMETER.
  const getCategoryUrl = useCallback((category) => {
    // if (typeof window === 'undefined') {
    //   return `/shop/products?category=${encodeURIComponent(category)}`;
    // }
    const normalizedCategory = normalizeCategory(category);
    const params = new URLSearchParams(window.location.search);
    
    if (selectedCategory === normalizedCategory) {
      params.delete("category");
    } else {
      params.set("category", normalizedCategory);
    }
    
    return `/shop/products?${params.toString()}`;
  }, [selectedCategory, normalizeCategory]);

  // 
  const isCategorySelected = useCallback((category) => {
    return selectedCategory === normalizeCategory(category);
  }, [selectedCategory, normalizeCategory])

  if (!isInitialized) {
    return null;
  }


  return (
    <CategoryContext.Provider value={{
      selectedCategory,
      handleCategorySelect,
      getCategoryUrl,
      isCategorySelected
    }}>
      {children}
    </CategoryContext.Provider>
  );
}