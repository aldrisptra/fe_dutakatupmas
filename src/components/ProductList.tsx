import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/dist/client/link";

// TEMPORARY
const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 39.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Purple", "Green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 59.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Nike ProFit Hoodie",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 79.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Blue", "Red"],
    images: {
      black: "/products/3b.png",
      blue: "/products/3bl.png",
      red: "/products/3r.png",
    },
  },
  {
    id: 4,
    name: "Reebok FlexFit Shorts",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 29.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray"],
    images: {
      black: "/products/4b.png",
      gray: "/products/4g.png",
    },
  },
  {
    id: 5,
    name: "Under Armour SpeedRun Cap",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 19.9,
    sizes: ["One Size"],
    colors: ["Black", "White"],
    images: {
      black: "/products/5b.png",
      white: "/products/5w.png",
    },
  },
  {
    id: 6,
    name: "Asics Gel-Kayano Sneakers",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 19.9,
    sizes: ["One Size"],
    colors: ["Black", "White"],
    images: {
      black: "/products/5b.png",
      white: "/products/5w.png",
    },
  },
  {
    id: 7,
    name: "New Balance Fresh Foam Shoes",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 19.9,
    sizes: ["One Size"],
    colors: ["Black", "White"],
    images: {
      black: "/products/5b.png",
      white: "/products/5w.png",
    },
  },
  {
    id: 8,
    name: "Brooks Ghost Running Shoes",
    shortDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 19.9,
    sizes: ["One Size"],
    colors: ["Black", "White"],
    images: {
      black: "/products/5b.png",
      white: "/products/5w.png",
    },
  },
];

const ProductList = ({ category }: { category: string }) => {
  return (
    <div className="w-full">
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View All Products
      </Link>
    </div>
  );
};
export default ProductList;
