"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Package, Truck, Palette, Search, ShoppingCart, X, Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  // Update the services array to focus on clothing brand support
  const services = [
    {
      icon: <Search className="h-10 w-10 mb-4" />,
      title: "Brand Strategy & Consultation",
      description:
        "We help define your clothing brand identity, target audience, and market positioning to create a cohesive strategy.",
    },
    {
      icon: <Palette className="h-10 w-10 mb-4" />,
      title: "Website Development & Management",
      description:
        "Custom e-commerce website design, development, and ongoing management tailored to your clothing brand's unique needs.",
    },
    {
      icon: <Package className="h-10 w-10 mb-4" />,
      title: "Product Sourcing & Manufacturing",
      description:
        "Connect with vetted manufacturers and suppliers to create high-quality clothing products that match your brand vision.",
    },
    {
      icon: <Truck className="h-10 w-10 mb-4" />,
      title: "Print on Demand Services",
      description:
        "Custom designs printed on clothing items only when ordered, eliminating inventory costs while maintaining quality.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 mb-4" />,
      title: "Order Fulfillment & Logistics",
      description:
        "End-to-end order processing, from receipt to delivery, ensuring timely and accurate shipments to your customers.",
    },
  ]

  return (
    <div className="bg-black text-white" ref={containerRef}>

<header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <Image
              src="/hynox_logo.jpg"
              alt="HYNOX Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            HYNOX
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Products", "Services", "Company", "Blogs", "Startup Support"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize ${
                  activeSection === item ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-shopping-app-45398-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Update the hero section text */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Complete Clothing Brand Support</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              End-to-end solutions from brand strategy to customer delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowRight className="h-8 w-8 rotate-90" />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Update the services section title and description */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Clothing Brand Services A-Z</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Everything you need to launch and grow a successful clothing brand without the hassle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How Our Process Works</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              A seamless journey from product selection to customer delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white bg-opacity-20 -z-10"></div>

            {/* Update the How It Works section steps */}
            {[
              {
                number: "01",
                title: "Brand Strategy",
                description:
                  "We help define your clothing brand identity, target audience, and develop a cohesive market strategy.",
              },
              {
                number: "02",
                title: "Website & Production",
                description:
                  "We build your e-commerce platform and set up manufacturing partnerships for your clothing line.",
              },
              {
                number: "03",
                title: "Fulfillment & Growth",
                description:
                  "Orders are processed, packed, and shipped to customers while we help scale your clothing brand.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10 h-full">
                  <div className="text-5xl font-bold text-white text-opacity-20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Update the CTA section */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Clothing Brand?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Choose a package that fits your clothing business needs and start growing today
              </p>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
                <Link href="/pricing">
                  View Pricing Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white border-opacity-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              {/* Update the footer brand name */}
              <h3 className="text-2xl font-bold">Hynox</h3>
              <p className="text-gray-400 mt-2">Delivers cutting-edge IT solutions and efficient manufacturing services. <br />
              We connect technology and industry to drive innovation and growth.</p>
            </div>
            <div className="flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white border-opacity-10 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Hynox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

