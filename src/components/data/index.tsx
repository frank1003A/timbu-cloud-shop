export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  status?: "new" | "out of stock";
}

export interface Blog {
  image: string;
  date: string;
  title: string;
  content: string;
}

export const Products: Product[] = [
  {
    id: 1,
    image: "item_1.png",
    name: "Toner",
    description: "Elf Toner",
    price: "£680.00",
    rating: "4.5",
  },
  {
    id: 2,
    image: "item_2.png",
    name: "Serum",
    description: "Advanced Night Repair",
    price: "£950.00",
    rating: "4.8",
    status: "new",
  },
  {
    id: 3,
    image: "item_3.png",
    name: "Serum",
    description: "Hydrating Serum",
    price: "£750.00",
    rating: "4.7",
  },
  {
    id: 4,
    image: "item_4.png",
    name: "Moisturizer",
    description: "Daytime Moisturizer",
    price: "£900.00",
    rating: "4.8",
  },
  {
    id: 5,
    image: "item_5.png",
    name: "Cleanser",
    description: "Gentle Cleanser",
    price: "£550.00",
    rating: "4.4",
  },
  {
    id: 6,
    image: "item_6.png",
    name: "Sunscreen",
    description: "SPF 50 Sunscreen",
    price: "£320.00",
    rating: "4.3",
    status: "new",
  },
  {
    id: 7,
    image: "item_7.png",
    name: "Eye Cream",
    description: "Anti-Aging Eye Cream",
    price: "£480.00",
    rating: "4.6",
    status: "out of stock",
  },
  {
    id: 8,
    image: "item_8.png",
    name: "Face Mask",
    description: "Revitalizing Face Mask",
    price: "£250.00",
    rating: "4.2",
  },
  {
    id: 9,
    image: "item_9.png",
    name: "Lip Balm",
    description: "Hydrating Lip Balm",
    price: "£150.00",
    rating: "4.1",
    status: "out of stock",
  },
  {
    id: 10,
    image: "item_10.png",
    name: "Night Cream",
    description: "Restorative Night Cream",
    price: "£780.00",
    rating: "4.7",
  },
  {
    id: 11,
    image: "item_11.png",
    name: "Face Oil",
    description: "Nourishing Face Oil",
    price: "£860.00",
    rating: "4.6",
  },
  {
    id: 12,
    image: "item_12.png",
    name: "Body Lotion",
    description: "Moisturizing Body Lotion",
    price: "£430.00",
    rating: "4.4",
  },
];

export const blogs: Blog[] = [
  {
    image: "item_1.png",
    date: "07 July 2024",
    title: " The Ultimate Guide to a Glowing Complexion",
    content:
      "In order to discuss the general function of the logo, we must firstly identify and define the environment…",
  },
  {
    image: "item_2.png",
    date: "08 July 2024",
    title: "Top Anti-Aging Skincare Tips and Products",
    content:
      "Aging is a natural process, but with the right skincare regimen, you can maintain a youthful and vibrant appearance.",
  },
  {
    image: "item_3.png",
    date: "09 July 2024",
    title: " Transform Your Skin Naturally and Repair ",
    content:
      "In order to discuss the general function of the logo, we Harness the power of nature with skincare products that utilize ",
  },
];
