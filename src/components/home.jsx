'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import PulsingSquareParticles from 'src/components/rectengle'

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className="relative w-full min-h-screen overflow-hidden  bg-sky-400">
        <header id='home' className="sticky top-0 z-50 bg-[#001f3f] shadow-sm">
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
              {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Get Started
                </a>
              </div> */}
            </div>
          </div>
          {isMenuOpen && (
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-sky-200 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="#" className="text-xl font-bold text-gray-900">TechNova</a>
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
                {/* <div className="py-6 px-5 space-y-6">
                  <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Get Started
                  </a>
                </div> */}
              </div>
            </div>
          )}
        </header>

        <main className="flex-grow w-full h-full flex flex-col min-h-screen relative">
          {/* Background Patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 1440 800"
              preserveAspectRatio="xMinYMin meet"
              style={{ opacity: 0.05 }}
            >
              <defs>
                <pattern
                  id="line-pattern"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="0"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#line-pattern)"
              />
            </svg>
          </div>

          {/* Floating Circles */}
          {/* <FloatingCircles />
          <PulsingSquareParticles /> */}

            {/* Floating circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white opacity-10"
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-white opacity-10"
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
      />

          {/* Hero Section */}
          <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r bg-sky-400 text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl  font-extrabold tracking-tight mb-4">
                  Fly With BlueSky.
                </h1>
                <br/>
                <br/>
                <p className="text-xl text-gray-600 sm:text-2xl md:text-3xl mb-8">
                  Empowering businesses with cutting-edge software solutions.<br/>
                  Make more possible IT with AI service.
                </p>
                {/* <p className=" text-gray-600 sm:text-2xl md:text-3xl mb-8">
                Make more possible with all-in-one IT services.
                </p> */}
                {/* <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:text-lg md:px-10">
                  Get Started
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </a> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

const FloatingCircles = () => {
  const circles = Array.from({ length: 15 }).map((_, index) => ({
    size: Math.random() * 20 + 10 + 'px',
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    duration: Math.random() * 5 + 3,
  }));

  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'fixed',
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            zIndex: -1,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </>
  );
};
