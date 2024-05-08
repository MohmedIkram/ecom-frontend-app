import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font color-[#282C31]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap order-first text-center md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            {/* <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2> */}
            


            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">FIND A STORE</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">BECOME A MEMBER</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Send Us Feedback</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
            GET HELP
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Order Status</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Delivery</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Returns</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Investors</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Sustainability</a>
              </li>

            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              ABOUT NIKE
            </h2>
            <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
              <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                <label
                  htmlFor="footer-field"
                  className="text-sm leading-7 text-gray-600"
                >
                  News
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                ></input>
              </div>
              <button className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-indigo-500 border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-indigo-600">
                Careers
              </button>
            </div>
            <p className="mt-2 text-sm text-center text-gray-500 md:text-left">
              Investors
              {/* <br className="hidden lg:block" /> waistcoat green juice */}
            </p>
            <p className="mt-2 text-sm text-center text-gray-500 md:text-left">
            Sustainability
              {/* <br className="hidden lg:block" /> waistcoat green juice */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
