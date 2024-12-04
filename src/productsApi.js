import axios from "redaxios";

export const getProducts = async (path = "") => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products${path}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error.message || error);
    throw error;
  }
};
