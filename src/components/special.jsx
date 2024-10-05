'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'


const specialties = [
  {
    title: "Innovative Solutions",
    description: "We pioneer cutting-edge technologies to solve complex business challenges.",
    image: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_2121,h_1414/https://www.advictoriamsolutions.com/wp-content/uploads/2019/01/Innovation-for-Manufacturing-Blog-min.jpg", // Replace with your actual image path
  },
  {
    title: "Client-Centric Approach",
    description: "Your success is our priority. We tailor our services to your unique needs.",
    image: "https://th.bing.com/th/id/OIP.IyYzKXjRmzJOwiWO49xMngHaEj?rs=1&pid=ImgDetMain", // Replace with your actual image path
  },
  {
    title: "Agile Methodology",
    description: "We adapt quickly to changes, ensuring your project stays on track and on budget.",
    image: "https://teamhood.com/wp-content/uploads/2023/02/agile-team-roles.png", // Replace with your actual image path
  },
  {
    title: "Global Expertise",
    description: "Our diverse team brings worldwide insights to tackle your local challenges.",
    image: "https://th.bing.com/th/id/OIP.uu_UA1YFN4fV786hTUWdRAHaEP?rs=1&pid=ImgDetMain", // Replace with your actual image path
  },
  {
    title: "Continuous Learning",
    description: "We're always evolving, integrating the latest tech trends into our solutions.",
    image: "https://th.bing.com/th/id/OIP.w97QMqfqp75-LBNugi-oqwHaEj?rs=1&pid=ImgDetMain", // Replace with your actual image path
  },
]

export default function Special() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="special"
      className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br bg-sky-400 overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl text-center mb-12 text-black drop-shadow-lg">
          Why <span className="text-purple-800">Special</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side (text) */}
          <div className="w-full lg:w-1/2   space-y-4">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg  cursor-pointer transition-all duration-300 backdrop-blur-sm bg-opacity-30 ${
                  activeIndex === index ? 'bg-sky-400 shadow-lg' : 'bg-sky-100'
                }`}
                onHoverStart={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    activeIndex === index ? 'text-white' : 'text-sky-800'
                  }`}
                >
                  {specialty.title}
                </h3>
                <p
                  className={`${
                    activeIndex === index ? 'text-gray-800' : 'text-gray-500'
                  }`}
                >
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right side (image) */}
          <div className="w-full lg:w-1/2 relative h-[400px]">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                initial={false}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${specialty.image})` }}
                >
                  {/* <div className="w-full h-full flex items-center justify-center p-8 bg-black bg-opacity-40">
                    <p className="text-4xl font-bold text-white text-center drop-shadow-md">
                      {specialty.title}
                    </p>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle line patterns */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white opacity-10"
        style={{ top: '10%', right: '10%' }}
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

        {/* <PulsingSquareParticles /> */}
        {/* <FloatingParticles /> */}
      {/* Floating particles for added visual effect */}
      {/* {[...Array(15)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white scroll-events-none pointer-events-none"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 3,
          }}
        />
      ))} */}
    </section>
  )
}
