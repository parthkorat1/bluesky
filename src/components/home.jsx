'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import PulsingSquareParticles from 'src/components/rectengle'

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div id="#home">
      <div  className="relative w-full min-h-screen overflow-hidden  bg-sky-400 ">
       

        <main  className="flex-grow w-full h-full flex flex-col min-h-screen relative">
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
          <section id="#home" className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r bg-sky-400 text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl  font-extrabold tracking-tight mb-4">
                  Fly With BlueSky.
                </h1>
                <br />
                <br />
                <p className="text-xl text-gray-600 sm:text-2xl md:text-3xl mb-8">
                  Empowering businesses with cutting-edge software solutions.<br />
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
