'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Cloud, Zap, Shield, Smartphone, Users, BarChart, Globe, Mail } from 'lucide-react'
import Homepage from 'src/components/home'
import Special from 'src/components/special'

const SkyBlueContinuousScrollPage = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const services = [
    { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for your business needs.' },
    { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast solutions that keep your operations running smoothly.' },
    { icon: Shield, title: 'Enhanced Security', description: 'State-of-the-art security measures to protect your valuable data.' },
    { icon: Smartphone, title: 'Mobile Integration', description: 'Seamless integration with mobile platforms for on-the-go access.' },
  ]

  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Clients' },
    { icon: BarChart, value: '99.9%', label: 'Uptime' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-sky-400 via-sky-300 to-sky-200">
      {/* Animated gradient overlay */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(14, 165, 233, 0.5) 0%, rgba(56, 189, 248, 0.5) 50%, rgba(186, 230, 253, 0.5) 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(45deg, rgba(14, 165, 233, 0.5) 0%, rgba(56, 189, 248, 0.5) 50%, rgba(186, 230, 253, 0.5) 100%)",
            "linear-gradient(45deg, rgba(186, 230, 253, 0.5) 0%, rgba(14, 165, 233, 0.5) 50%, rgba(56, 189, 248, 0.5) 100%)",
            "linear-gradient(45deg, rgba(56, 189, 248, 0.5) 0%, rgba(186, 230, 253, 0.5) 50%, rgba(14, 165, 233, 0.5) 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Subtle line patterns */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
        {/* <Homepage /> */}
        {/* <Special /> */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Sky Blue
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-sky-100 mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your business with our cutting-edge solutions
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-white text-sky-500 rounded-full font-semibold hover:bg-sky-100 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className="text-white mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sky-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sky-600 bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="text-white mx-auto mb-4" size={48} />
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sky-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
       <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="max-w-md mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sky-100 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-sky-200" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sky-100 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-sky-200" placeholder="your@email.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sky-100 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-sky-200" placeholder="Your message..."></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-white text-sky-500 rounded-md font-semibold hover:bg-sky-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
 
      {/* Floating particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="fixed rounded-full bg-white pointer-events-none"
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
            repeatType: "reverse",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}

export default SkyBlueContinuousScrollPage