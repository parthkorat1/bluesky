'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Globe, Layers, Code, CheckCircle, ArrowRight, X } from "lucide-react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import axios from 'axios'
import { useToast } from "@/hooks/use-toast"

// Your services array here...
const services = [
  {
    title: "Web Development",
    description: "Custom websites tailored to your needs",
    price: "₹5000-10000+",
    icon: Globe,
    features: [
      "Responsive design for all devices",
      "CMS integration for easy content management",
      "E-commerce functionality with secure payment gateways",
      "Performance optimization for fast loading times",
      "Cross-browser compatibility",
    ],
    support: [
      "30 days free trial period",
      "Regular security updates",
      "Optional maintenance packages available",
    ],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    price: "₹10000-20000+",
    icon: Layers,
    features: [/* features array here */
      "iOS and Android native app development",
      "Cross-platform development using React Native or Flutter",
      "Intuitive UI/UX design",
      "Push notifications for user engagement",
      "Offline functionality and data synchronization",
     
    ],
    support: [/* support array here */
      "3 months of updates and bug fixes",
      "User analytics and crash reporting setup",
      "Scalability planning for future growth",
    ],
  },
  {
    title: "AI Integration",
    description: "Seamless integration with third-party services",
    price: "₹10000-30000+",
    icon: Code,
    features: [/* features array here */
      "RESTful and GraphQL API development",
      "Make powerfull current system",
      "Chat with AI",
      "Train on your data",
      "Comprehensive AI documentation",
      
    ],
    support: [/* support array here */
      "Ongoing AI maintenance and updates",
      "Performance monitoring and optimization",
      "cuntinus training and testing performance",
    ],
  },
]

export default function EnhancedServicesNoTabs() {
  const { toast } = useToast()
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedService, setSelectedService] = useState(null) // To track the selected service

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: '',
    budget: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      console.log(formData);
      
      const submit = await axios.post('api/touch',formData)
      if (submit) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          serviceType: '',
          budget: '',
        })
        toast({
          title: "Message sent successfully",
          description: "we connect with you soon....", 
        })
        
      }
      
    } catch (error) {
      console.log("An error occurred", error);
      toast({
        title: "Plese fill ritgh data",
        description: "problem with your credentials , please try again", 
      })
      // addd tosterrrr
      
    }
    setOpen(false)
    // Here you would typically send the data to your server
  }

  // Function to handle card click
  const handleCardClick = (service) => {
    setSelectedService(service) // Set the selected service to the clicked card's service
  }

  // Function to close the popup
  const closePopup = () => {
    setSelectedService(null)
  }

  return (
    <section id='service' className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-br bg-sky-400 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-6xl font-bold tracking-tighter text-center mb-4">Our Services</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Empowering your digital journey with cutting-edge solutions</p>
        </motion.div>

        <motion.div
        className="absolute w-96 h-96 rounded-full bg-white opacity-10"
        style={{ top: '10%', right: '10%' }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />
    

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="flex flex-col h-full  transition-all duration-300 hover:shadow-lg relative overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(service)} // Handle card click
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <service.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="text-sm font-semibold">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-primary">Support:</h4>
                    <ul className="space-y-2">
                      {service.support.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardContent>
                  <Button className="w-full group">
                    Book Plan
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      
      {/* Render your custom popup when a service is selected */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
            {/* Close button at the top right corner */}
            <button 
              onClick={closePopup} 
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
            <p className="mb-6">{selectedService.description}</p>

            <motion.form
              onSubmit={closePopup}
              className="space-y-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onValueChange={(value) => handleSelectChange('serviceType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="webDevelopment">Web Development</SelectItem>
                    <SelectItem value="mobileDevelopment">Mobile Development</SelectItem>
                    <SelectItem value="uiuxDesign">UI/UX Design</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select
                  name="budget"
                  value={formData.budget}
                  onValueChange={(value) => handleSelectChange('budget', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lessThan5k">Less than $5,000</SelectItem>
                    <SelectItem value="5kTo10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10kTo20k">$10,000 - $20,000</SelectItem>
                    <SelectItem value="moreThan20k">More than $20,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button onClick={handleSubmit} type="submit" className="w-full">Submit</Button>
            </motion.form>

            <Button onClick={closePopup} className="w-full mt-4">Close</Button>
          </div>
        </div>
      )}
    </section>
  )
}
