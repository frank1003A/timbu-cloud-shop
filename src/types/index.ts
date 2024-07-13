export interface Blog {
  image: string;
  date: string;
  title: string;
  content: string;
}

export interface APIProduct {
  id: string;
  name: string;
  description: string;
  is_available: boolean;
  photos: Photo[];
  current_price: { NGN: [number, null, any[]] }[];
}

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  status?: "In-stock" | "out of stock";
}

interface ExtraInfo {
  id: string;
  key: string;
  value: string | null;
  value_dt: string | null;
}

// Type for Category
interface Category {
  organization_id: string;
  name: string;
  position: number | null;
  category_type: string;
  description: string;
  last_updated: string;
  id: string;
  parent_id: string | null;
  url_slug: string | null;
  is_deleted: boolean;
  date_created: string;
  subcategories: Category[];
  parents: Category[];
}

// Type for Photo
interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

// Type for CurrencyPrice
interface CurrencyPrice {
  NGN: (number | null | any[])[];
}

// Type for CurrentPrice
interface CurrentPrice {
  NGN: CurrencyPrice[];
}

// Type for Product
export interface ProductResponse {
  name: string;
  description: string | null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: string | null;
  organization_id: string;
  product_image: string[];
  categories: Category[];
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: CurrentPrice[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: ExtraInfo[];
}
