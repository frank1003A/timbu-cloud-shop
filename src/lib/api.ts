import axios from "axios";

export const baseUrl = "https://timbu-cloud-shop-kappa.vercel.app";

export const fetchProducts = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching products");
  }
};
