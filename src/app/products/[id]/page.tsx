import ProductPageComponent from "@/components/page/product";
import { baseUrl } from "@/lib/api";
import { Product } from "@/types";
import axios from "axios";

const Productpage = async ({ params }: { params: { id: string } }) => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/product/${params.id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch product");
    }
  };

  // fetch product_id
  const product = await fetchProduct();

  if (!product) {
    return (
      <div className="h-screen w-full text-wprimary text-2xl flex items-center justify-center">
        Product not found
      </div>
    );
  }

  // transform returned data to match model
  const transformedProduct: Product = {
    id: product?.id, // Convert to number if needed
    image: `https://api.timbu.cloud/images/${product?.photos[0]?.url}` || "",
    name: product?.name,
    description: product?.description,
    price: product?.current_price,
    rating: "4.5", // Assuming no rating data available, adjust as necessary
    status: product.is_available ? "In-stock" : "out of stock",
  };

  return <ProductPageComponent activeProduct={transformedProduct} />;
};

export default Productpage;
