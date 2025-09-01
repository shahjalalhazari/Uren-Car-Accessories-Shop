export const getProductsByCategory = async (category) => {
  const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=0`);
  const data = await res.json();
  return data.products;
};