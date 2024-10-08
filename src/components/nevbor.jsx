'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function StickyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header  className="sticky top-0 z-50 bg-[#001f3f] shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-xl font-bold text-white">BlueSky</a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-sky-200 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-base font-medium text-sky-100 hover:text-yellow-100">Home</a>
            <a href="#special" className="text-base font-medium text-sky-100 hover:text-yellow-100">Why Special</a>
            <a href="#featuer" className="text-base font-medium text-sky-100 hover:text-yellow-100">Features</a>
            <a href="#service" className="text-base font-medium text-sky-100 hover:text-yellow-100">Pricing</a>
            <a href="#work" className="text-base font-medium text-sky-100 hover:text-yellow-100">Work</a>
            <a href="#contact" className="text-base font-medium text-sky-100 hover:text-yellow-100">Contact</a>
            <a href="#footer" className="text-base font-medium text-sky-100 hover:text-yellow-100">About Us</a>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-sky-200 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#" className="text-xl font-bold text-gray-900">BlueSky</a>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#home" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Home</span>
                  </a>
                  <a href="#special" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Why Special</span>
                  </a>
                  <a href="#featuer" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Features</span>
                  </a>
                  <a href="#service" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Pricing</span>
                  </a>
                  <a href="#work" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Work</span>
                  </a>
                  <a href="#contact" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                  </a>
                  <a href="#footer" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">About Us</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}