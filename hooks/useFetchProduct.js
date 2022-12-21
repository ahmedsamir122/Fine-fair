import { useQuery } from "react-query";
import axios from "axios";

// const FetchProduct = async (productId) => {
//   const res = await fetch(`https://dummyjson.com/products/${productId}`);
//   return res.json();
// };

const FetchProduct = (productId) => {
  return axios.get(`https://dummyjson.com/products/${productId}`);
};
export const useFetchProduct = (productId) => {
  return useQuery(["product", productId], () => FetchProduct(productId));
};
