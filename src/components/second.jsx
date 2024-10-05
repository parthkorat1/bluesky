'use client'


import { motion, useAnimation } from 'framer-motion';

import React, { useState, useEffect } from 'react'

const SecondPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br bg-sky-400">
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 opacity-500"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(14, 165, 233, 0.5) 0%, rgba(56, 189, 248, 0.5) 50%, rgba(186, 230, 253, 0.5) 100%)',
            'linear-gradient(45deg, rgba(186, 230, 253, 0.5) 0%, rgba(14, 165, 233, 0.5) 50%, rgba(56, 189, 248, 0.5) 100%)',
            'linear-gradient(45deg, rgba(56, 189, 248, 0.5) 0%, rgba(186, 230, 253, 0.5) 50%, rgba(14, 165, 233, 0.5) 100%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />

      {/* Animated wave */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          fill="rgba(255,255,255,0.2)"
          d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.svg>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Services
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-sky-100 mb-12 max-w-2xl drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the range of services we offer to help you succeed in your endeavors.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['Web Development', 'Digital Marketing', 'Consulting'].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{service}</h3>
              <p className="text-sky-100">
                Our {service.toLowerCase()} services are designed to help you reach your goals and improve your online presence.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="px-8 py-3 bg-white text-sky-500 rounded-full font-semibold text-lg hover:bg-sky-100 transition duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  )
}

export default SecondPage;
