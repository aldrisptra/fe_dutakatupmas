"use client";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

// TEMPORARY
const CartItems = [
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
    quantity: 1,
    sekectedSize: "l",
    selectedColor: "Gray",
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
    quantity: 1,
    sekectedSize: "l",
    selectedColor: "Gray",
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
    quantity: 1,
    sekectedSize: "l",
    selectedColor: "Black",
  },
];

const CartPage = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div className="" key={step.id}>
            <div className="">{step.id}</div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
