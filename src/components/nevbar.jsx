'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const SkyBlueGradientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({
      backgroundColor: scrollY > 20 ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0)',
      backdropFilter: scrollY > 20 ? 'blur(10px)' : 'blur(0px)',
      transition: { duration: 0.3 },
    })
  }, [scrollY, controls])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    {
      name: 'Resources',
      href: '#',
      subItems: [
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/support' },
      ],
    },
  ]

  return (
    <motion.nav
      className="fixed w-full z-50 px-6 py-4" // Increased padding for a larger navbar
      initial={{ backgroundColor: 'rgba(56, 189, 248, 0)' }}
      animate={controls}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">SkyBlue</Link>
          </motion.div>
          {/* Centering navigation items */}
          <div className="hidden md:flex space-x-6 justify-center w-full">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <motion.div
                  className="text-white hover:text-sky-100 transition-colors duration-200 cursor-pointer flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.subItems ? (
                    <>
                      <span>{item.name}</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                </motion.div>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-sky-500 hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-sky-400 bg-opacity-90 backdrop-filter backdrop-blur-md mt-2 rounded-lg shadow-lg">
          {navItems.map((item, index) => (
            <div key={item.name}>
              {item.subItems ? (
                <div className="block px-4 py-2 text-white hover:bg-sky-500 transition-colors duration-200">
                  <span>{item.name}</span>
                  <div className="pl-4 mt-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-white hover:text-sky-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-white hover:bg-sky-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default SkyBlueGradientNavbar
