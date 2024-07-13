import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchProducts = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching products");
  }
};
