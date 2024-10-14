import Logo from "@/app/logo"
import Link from "next/link"

export default async function Navigation() {


  return (
    <nav className="mx-auto">
      <div className="flex items-center justify-between bg-black text-gray-50 py-10 px-3">
        <div className="flex-shrink-0">
          <Logo color="black" width={50} height={50} />
        </div>
        <div className="w-[300px]">
          <div className="flex flex-col">
            <span className="text-sm font-medium flex items-center font-anton">
              Provo Basketball Club
            </span>
            <p className="mt-2 text-xs font-light font-sans">
              Provo Basketball Club is a registered 501(c)3 in Utah. We are not directly affiliated with Provo High School or Provo School District.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-800 text-gray-300 py-2 px-3">
        <div className="text-sm font-medium flex flex-col md:flex-row items-center justify-center text-center gap-2">
          <Link href="/privacy-policy" className="text-xs hover:text-gray-300">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-xs hover:text-gray-300">Terms of Service</Link>
          <span className="text-xs font-sans">All rights reserved © {new Date().getFullYear()}</span>
        </div>
      </div>
    </nav>
  )
}
