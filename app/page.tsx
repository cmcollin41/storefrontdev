import Image from "next/image";
import RecentArticles from "@/components/recent-articles";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-3 py-16 font-geist">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">storefront.dev</h1>
        <a href="https://www.youtube.com/@storefront" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white font-semibold rounded-sm hover:bg-red-700 transition duration-300">
          Visit our YouTube
        </a>
      </div>
      <p className="text-lg max-w-lg mt-4 font-light">
        We build modern, high-performance, and scalable e-commerce stores and then share what we learn along the way.
      </p>
      <div className="flex gap-4">
        <button className="mt-4 px-3 py-2 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
      <RecentArticles />
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Tools We Love</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/shopify-logo.png" alt="Shopify" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Shopify</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Powerful e-commerce platform for businesses of all sizes</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/hydrogen-logo.png" alt="Hydrogen" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Hydrogen</h3>
            <p className="mt-2 text-sm text-center text-gray-600">React-based framework for building custom storefronts</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/remix-logo.png" alt="Remix" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Remix</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Full stack web framework for building modern web applications</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/packdigital-logo.png" alt="Pack Digital" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Pack Digital</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Headless commerce solutions for scaling businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
