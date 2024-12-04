export const filterProducts = (products, category) => {
  if (!category) return products;
  return products.filter(
    (product) =>
      product.category.trim().toLowerCase() === category.trim().toLowerCase()
  );
};

export const getCategories = (products) => {
  return Array.from(
    new Set(products.map((product) => product.category.trim().toLowerCase()))
  );
};
