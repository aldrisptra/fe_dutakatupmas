import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16b flex flex-col items-center gap-8 md:flex-row md:items-start justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link href="/" className="w-full flex items-center">
          <Image src="/logo.png" alt="DutaKatupMas" width={36} height={36} />
          <p className="hiden md:block text-md font-medium tracking-wider">
            DutaKatupMas
          </p>
        </Link>
        <p className="text-sm text-gray-400"> © 2026 DutaKatupMas</p>
        <p className="text-sm text-gray-400"> All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Police</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Programs</Link>
      </div>
    </div>
  );
};

export default Footer;
