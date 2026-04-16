import HeroSlider from "@/components/HeroSlider";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSlider />
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
