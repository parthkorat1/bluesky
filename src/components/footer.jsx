'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useToast } from "@/hooks/use-toast"

import {  ArrowRight, MapPin, Phone, Mail, Globe, ChevronUp } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const controls = useAnimation()
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signed up with:', email)
    toast({
      title: "fill the form with your credentials",
      description: "plese get in touch with us", 
    })

    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
  }, [controls])

  const footerSections = [
    {
      title: 'Products',
      links: ['Web App', 'Mobile App', 'Desktop Software', 'API Services', 'Custom Solutions']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press Kit', 'Investor Relations', 'Contact']
    },
    // {
    //   title: 'Resources',
    //   links: ['Blog', 'Newsletter', 'Events', 'Help Center', 'Documentation', 'Tutorials']
    // },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'GDPR Compliance', 'Security']
    }
  ]

  // const socialLinks = [
  //   { name: 'Facebook', icon: Facebook, href: '#' },
  //   { name: 'Twitter', icon: Twitter, href: '#' },
  //   { name: 'Instagram', icon: Instagram, href: '#' },
  //   { name: 'LinkedIn', icon: Linkedin, href: '#' },
  //   { name: 'GitHub', icon: GitHub, href: '#' }
  // ]

  return (
    <footer id='footer' className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Globe className="h-10 w-10 text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                BlueSky
              </h2>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Empowering businesses with cutting-edge solutions. Join our community and stay ahead in the digital revolution.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={controls}
          className="border-t border-gray-700 pt-8 mt-8"
        >
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Comming Soon....</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>.</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-end space-x-6">
              {/* {socialLinks.map((link) => (
                <Tooltip key={link.name} content={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                </Tooltip>
              ))} */}
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={controls}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </motion.div>
      </div>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </footer>
  )
}