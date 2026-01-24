import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/dist/client/link";
import Filter from "./Filter";

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
      Gray: "/products/1g.png",
      Purple: "/products/1p.png",
      Green: "/products/1gr.png",
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
      Gray: "/products/2g.png",
      Green: "/products/2gr.png",
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
    colors: ["Black", "Blue", "Green"],
    images: {
      Black: "/products/3b.png",
      Blue: "/products/3bl.png",
      Green: "/products/3gr.png",
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
    colors: ["Pink", "Gray"],
    images: {
      Pink: "/products/4p.png",
      Gray: "/products/4w.png",
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
    colors: ["Black", "Orange", "Red"],
    images: {
      Black: "/products/5bl.png",
      Orange: "/products/5o.png",
      Red: "/products/5r.png",
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
    colors: ["Gray", "White"],
    images: {
      Gray: "/products/6g.png",
      White: "/products/6w.png",
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
    colors: ["Gray", "Pink"],
    images: {
      Gray: "/products/7g.png",
      Pink: "/products/7p.png",
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
    colors: ["Blue", "Green"],
    images: {
      Blue: "/products/8b.png",
      Green: "/products/8gr.png",
    },
  },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
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
