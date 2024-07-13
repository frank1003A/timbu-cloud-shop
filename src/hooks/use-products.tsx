import { baseUrl, fetchProducts } from "@/lib/api";
import { ProductsResponse } from "@/types";
import useSWR from "swr";

const useProducts = () => {
  const { data, error, isLoading } = useSWR<ProductsResponse>(
    `${baseUrl}/api/products`,
    fetchProducts
  );

  return {
    products: data,
    isLoading,
    isError: error,
  };
};

export default useProducts;
