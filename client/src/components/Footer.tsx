import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-slate-900 text-slate-300 shadow-sm overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-slate-700 to-red-600" />

      <div className="flex flex-col gap-8 p-8 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="/" className="flex items-center">
            {/* Logo untuk mobile */}
            <Image
              src="/logo-dkm.png"
              alt="DKM e-Commerce"
              width={40}
              height={40}
              className="block lg:hidden w-10 h-10"
            />
            {/* Logo untuk desktop */}
            <Image
              src="/banner-dkm.png"
              alt="DKM e-Commerce"
              width={200}
              height={40}
              className="hidden lg:block h-10 w-auto brightness-0 invert"
            />
          </Link>

          <p className="text-sm text-slate-400">© 2026 DUTA KATUP MAS.</p>
          <p className="text-sm text-slate-400">All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-4 text-sm items-center md:items-start">
          <p className="text-sm font-semibold text-white">Company</p>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Homepage
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col gap-4 text-sm items-center md:items-start">
          <p className="text-sm font-semibold text-white">Products</p>
          <Link
            href="/"
            className="text-slate-400 hover:text-red-400 transition-colors"
          >
            All Products
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-red-400 transition-colors"
          >
            New Arrivals
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-red-400 transition-colors"
          >
            Best Sellers
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-red-400 transition-colors"
          >
            Sale
          </Link>
        </div>

        <div className="flex flex-col gap-4 text-sm items-center md:items-start">
          <p className="text-sm font-semibold text-white">Explore</p>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Affiliate Program
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
