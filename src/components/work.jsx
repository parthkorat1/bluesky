'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform with real-time inventory management.',
    image: 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-2.jpg',
    tags: ['React', 'Node.js', 'MongoDB','NextJs'],
    liveUrl: 'https://example.com/ecommerce',
   // githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    id: 2,
    title: 'LMS Platform',
    description: 'A ultimate lernet platform with heavy functionality and performance monitoring.',
    image: 'https://www.ispringsolutions.com/blog/wp-content/uploads/2019/04/Top-1.png',
    tags: ['NextJs', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com/taskapp',
   // githubUrl: 'https://github.com/example/taskapp',
  },
  {
    id: 3,
    title: 'Event Management App',
    description: 'An upcoming event management application with real-time updates and notifications.',
    image: 'https://hire4event.com/blogs/wp-content/uploads/2019/04/event-services.jpg',
    tags: ['Gemini', 'NextJS', 'MERN'],
    liveUrl: 'https://example.com/chatbot',
   // githubUrl: 'https://github.com/example/chatbot',
  }
//   {
//     id: 4,
//     title: 'Social Media Dashboard',
//     description: 'A comprehensive dashboard for managing multiple social media accounts and analytics.',
//     image: '/placeholder.svg?height=400&width=600',
//     tags: ['Angular', 'Firebase', 'D3.js'],
//     liveUrl: 'https://example.com/dashboard',
//     githubUrl: 'https://github.com/example/dashboard',
//   },
//   {
//     id: 5,
//     title: 'Fitness Tracking App',
//     description: 'A mobile app for tracking workouts, nutrition, and personal fitness goals.',
//     image: '/placeholder.svg?height=400&width=600',
//     tags: ['React Native', 'Redux', 'Firebase'],
//     liveUrl: 'https://example.com/fitnessapp',
//     githubUrl: 'https://github.com/example/fitnessapp',
//   },
//   {
//     id: 6,
//     title: 'Weather Forecast App',
//     description: 'A sleek weather application providing accurate forecasts and severe weather alerts.',
//     image: '/placeholder.svg?height=400&width=600',
//     tags: ['Svelte', 'OpenWeatherMap API', 'Chart.js'],
//     liveUrl: 'https://example.com/weatherapp',
//     githubUrl: 'https://github.com/example/weatherapp',
//   },
]

const Work = () => {
  return (
    <section id="work" className="bg-gradient-to-br bg-sky-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-12 text-black">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            >
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 flex justify-between">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Live
                </motion.a>
                {/* <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </motion.a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work