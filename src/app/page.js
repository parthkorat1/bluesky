"use client"
import { useState, useEffect } from 'react'

import Service from '../components/service'
import Touch from '../components/touch'
import Feature from '../components/feature'
import Special from '../components/special'
import Homepage from '../components/home'
import Footer from '../components/footer'
import Work from 'src/components/work'


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className=" w-full flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      
     
      <main className="flex-1">
      
        <Homepage />
        <Special />
        <Feature />
        <Service />
        <Work />
       <Touch />
       <Footer />
      </main>
     
      
    </div>
  )
}