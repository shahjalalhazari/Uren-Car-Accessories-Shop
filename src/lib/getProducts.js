export const getProducts = async (category) => {
  if (category) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=0`); // get all products of the category.
    const data = await res.json();
    return data.products;
  } else {
    const res = await fetch('https://dummyjson.com/products?limit=100'); // get 1st 100 products
    const data = await res.json();
    return data.products;
  }
};
