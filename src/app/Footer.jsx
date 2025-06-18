import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-white md:py-25 py-10 px-6 bg-[url('/footer.jpg')] bg-cover bg-center bg-no-repeat text-white py-10 px-6">
      <div className="md:pl-50 pb-10 ">
        {" "}
        <img src="/logo.png" />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        <div className="md:pl-12 text-gray">
          <h3 className="text-lg font-semibold mb-4 text-black">
            APPLICATIONS
          </h3>
          <ul className="space-y-2  text-gray-600 text-base">
            <li className="py-5">
              <a href="#" className="hover:text-black ">
                Apparel
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black ">
                Automotive
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black">
                Filtration
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black ">
                Customised Nonwoven
              </a>
            </li>
          </ul>
        </div>
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-black">COMPANY</h3>
          <ul className="space-y-2 text-gray-600 text-base">
            <li className="py-5">
              <a href="#" className="hover:text-black ">
                Who We Are
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black ">
                Global Compentency
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black ">
                Innovation
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black ">
                ESG Impact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-black">MORE</h3>
          <ul className="space-y-2  text-gray-600 text-base">
            <li className="py-5">
              <a href="#" className="hover:text-black ">
                Contact Us
              </a>
            </li>
            <li className="pb-5">
              <a href="#" className="hover:text-black ">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold mb-4 text-black ">FOLLOW US</h3>
          <ul className="space-y-2  text-gray-600 text-base">
            <li className="py-5">
              <a href="#" className="hover:text-black ">
                LinkedIn
              </a>
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