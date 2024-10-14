import Image from "next/image";
import RecentArticles from "@/components/recent-articles";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-3 py-16 font-geist">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Modern E-Commerce</h1>
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
            <Image src="/images/shopify.svg" alt="Shopify" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Shopify</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Powerful e-commerce platform for businesses of all sizes</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/pack-digital.svg" alt="Pack Digital" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Pack</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Pack is the visual frontend for Shopify Hydrogen. </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/hydrogen.svg" alt="Hydrogen" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Hydrogen</h3>
            <p className="mt-2 text-sm text-center text-gray-600">React-based framework for building custom storefronts</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image src="/images/remix.svg" alt="Remix" width={100} height={100} className="mb-4" />
            <h3 className="text-lg font-semibold">Remix</h3>
            <p className="mt-2 text-sm text-center text-gray-600">Full stack web framework for building modern web applications</p>
          </div>
        </div>
      </div>
    </div>
  );
}
