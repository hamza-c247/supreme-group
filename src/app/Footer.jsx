import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import Logo from "../../public/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-white md:py-25 py-10 px-6 bg-[url('/footer.jpg')] bg-cover bg-center bg-no-repeat text-white py-10 px-6">
      <div className="md:pl-50 pb-10 ">
        <Image src={Logo} alt="logo.png"/>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        <div className="md:pl-12 text-gray">
          <h3 className="text-lg font-semibold mb-4 text-black">
            APPLICATIONS
          </h3>
          <ul className="space-y-2  text-gray-600 text-base">
            <li className="py-5">
              <Link href="#" className="hover:text-black ">
                Apparel
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black ">
                Automotive
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black">
                Filtration
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black ">
                Customised Nonwoven
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-black">COMPANY</h3>
          <ul className="space-y-2 text-gray-600 text-base">
            <li className="py-5">
              <Link href="#" className="hover:text-black ">
                Who We Are
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black ">
                Global Compentency
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black ">
                Innovation
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black ">
                ESG Impact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-black">MORE</h3>
          <ul className="space-y-2  text-gray-600 text-base">
            <li className="py-5">
              <Link href="#" className="hover:text-black ">
                Contact Us
              </Link>
            </li>
            <li className="pb-5">
              <Link href="#" className="hover:text-black ">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-black ">FOLLOW US</h3>
          <ul className="space-y-2  text-gray-600 text-base">
            <li className="py-5">
              <Link href="#" className="hover:text-black ">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto md:pt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center">
        <div className="mt-8 md:pl-12 text-sm text-gray-900 text-left">
          ©2024. All Rights Reserved.
        </div>
        <div className="mt-8 md:pl-12 text-center text-sm text-gray-900">
          Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
        </div>
      </div>
    </footer>
  )
}

export default Footer