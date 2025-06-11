"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, CheckCircle, HelpCircle, X, Menu, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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

  const developmentPackages = [
    {
      name: "Starter",
      description: "Essential Store store for new businesses",
      price: annual ? Math.round(15000 * 12 * 0.9) : 15000,
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "SEO Setup",
        "Keyword Research & Optimization",
        "Domain under ₹600 (FREE)",
        "Payment Integration",
        "Phonepay Integration",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches"
      ],
      limitations: [
        "No store migration",
        "Basic SEO only",
        "Limited support hours"
      ],
      cta: "Start Starter Plan",
      popular: false,
    },
    {
      name: "Growth",
      description: "Complete Store solution for growing businesses",
      price: annual ? Math.round(45000 * 12 * 0.9) : 45000,
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "Shopify Store Migration",
        "SEO Setup",
        "Keyword Research & Optimization",
        "Domain under ₹600 (FREE)",
        "Payment Integration",
        "Phonepay Integration",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Return & Refund Handling System",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches"
      ],
      limitations: [
        "Standard SEO only",
        "No dedicated account manager"
      ],
      cta: "Choose Growth Plan",
      popular: true,
    },
    {
      name: "Pro",
      description: "Advanced Store solution with premium features",
      price: annual ? Math.round(75000 * 12 * 0.9) : 75000,
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "Shopify Store Migration",
        "SEO Setup",
        "Keyword Research & Optimization",
        "12/5 Tech Support",
        "Instant Bug Resolution",
        "Server Downtime Handling",
        "Website Monitoring & Troubleshooting",
        "Domain under ₹1500 (FREE)",
        "Payment Integration",
        "Phonepay Integration",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Return & Refund Handling System",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches",
        "Email Support",
        "Business Email Setup (5 Users)",
        "Email Campaign Management",
        "Transactional Email Setup"
      ],
      limitations: [
        "No Shopify Plus features",
        "Limited development hours"
      ],
      cta: "Get Pro Plan",
      popular: false,
    },
    {
      name: "Premium",
      description: "Enterprise-grade Store solution with all features",
      price: annual ? Math.round(100000 * 12 * 0.9) : 100000,
      features: [
        "Custom Shopify Store Design & Development",
        "Shopify Theme Customization",
        "Shopify App Integration & Development",
        "Product Listing & Management",
        "Payment Gateway Setup",
        "Speed Optimization & Performance Enhancement",
        "Shopify Store Migration",
        "Shopify Plus Solutions",
        "Advanced SEO Setup",
        "On-Page SEO (Meta Tags, Alt Text, URL Optimization)",
        "Off-Page SEO (Backlinking, Guest Posting)",
        "Technical SEO (Site Speed, Mobile Optimization)",
        "Keyword Research & Optimization",
        "Competitor Analysis",
        "Domain under ₹3000 (FREE)",
        "Payment Integration (Razorpay, Stripe, PayPal, etc.)",
        "UPI & Wallets Setup (Google Pay, PhonePe, Paytm)",
        "Multi-Currency Payment Setup",
        "Subscription-Based Payment Integration",
        "Payment Security & Fraud Prevention",
        "Delivery Integration",
        "API Integration for Order & Tracking Management",
        "Automated Shipping Label Generation",
        "Real-time Order Tracking System",
        "COD & Prepaid Shipping Setup",
        "Return & Refund Handling System",
        "Monthly Maintenance",
        "Website & App Updates",
        "Bug Fixes & Security Patches",
        "Server & Hosting Management",
        "Performance Optimization",
        "Backup & Data Protection",
        "New Feature Updates (if required)",
        "Dedicated Account Manager",
        "Priority Support"
      ],
      limitations: [
        "Custom development may require additional time"
      ],
      cta: "Go Premium Plan",
      popular: false,
    }
  ]

  const managementPackages = [
    {
      name: "Basic Management",
      description: "Essential website maintenance",
      price: annual ? 199 : 299,
      features: [
        "Monthly security updates",
        "Basic backups",
        "Uptime monitoring",
        "Email support",
        "Quarterly reports"
      ],
      limitations: [
        "No content updates",
        "48h response time",
        "2h support/month"
      ],
      cta: "Start Basic Care",
      popular: false,
    },
    {
      name: "Starter Management",
      description: "Proactive website maintenance",
      price: annual ? 499 : 599,
      features: [
        "Weekly security updates",
        "Daily backups",
        "Performance monitoring",
        "Up to 5 content updates/month",
        "24h response time",
        "Monthly reports"
      ],
      limitations: [
        "5h support/month",
        "No development work"
      ],
      cta: "Choose Starter Care",
      popular: true,
    },
    {
      name: "Standard Management",
      description: "Comprehensive website care",
      price: annual ? 799 : 899,
      features: [
        "Daily security updates",
        "Real-time backups",
        "Advanced monitoring",
        "Up to 15 content updates/month",
        "12h response time",
        "Weekly reports",
        "5h development/month"
      ],
      limitations: [
        "Complex changes may require upgrade"
      ],
      cta: "Get Standard Care",
      popular: false,
    },
    {
      name: "Premium Management",
      description: "Full-service website management",
      price: annual ? 1299 : 1499,
      features: [
        "24/7 monitoring",
        "Instant backups",
        "Unlimited content updates",
        "Immediate response",
        "Daily reports",
        "10h development/month",
        "Dedicated account manager",
        "SEO maintenance"
      ],
      limitations: [
        "Major redesigns not included"
      ],
      cta: "Go Premium Care",
      popular: false,
    }
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
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
            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </button>
              <a
                href="https://hs-home-git-main-parameshs-projects-5e915c35.vercel.app/#products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Products
              </a>
              <a
                href="https://hs-home-git-main-parameshs-projects-5e915c35.vercel.app/#services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Services
              </a>
              <button
                onClick={() => scrollToSection("company")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("blogs")}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Meet our Team
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black border-b border-white/10 md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                { name: "Home", action: () => scrollToSection("home") },
                { 
                  name: "Products", 
                  action: () => window.open("https://hs-home-git-main-parameshs-projects-5e915c35.vercel.app/#products", "_blank")
                },
                { 
                  name: "Services", 
                  action: () => window.open("https://hs-home-git-main-parameshs-projects-5e915c35.vercel.app/#services", "_blank")
                },
                { name: "About Us", action: () => scrollToSection("company") },
                { name: "Meet our Team", action: () => scrollToSection("blogs") },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`capitalize py-2 ${
                    activeSection === item.name
                      ? "text-white border-l-2 pl-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Store Development Packages</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
                Comprehensive Store solutions tailored for businesses of all sizes
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={annual ? "text-gray-400" : "text-white font-medium"}>One-time</span>
                <Switch
                  checked={annual}
                  onCheckedChange={setAnnual}
                  className="data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <span className={!annual ? "text-gray-400" : "text-white font-medium"}>
                  Annual <span className="text-green-400 text-sm ml-1">Save 10%</span>
                </span>
              </div>
            </motion.div>

            {/* Development Packages */}
            <div className="mb-20">
              <motion.h2 
                className="text-3xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Store Development Services
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {developmentPackages.map((pkg, index) => (
                  <motion.div
                    key={`dev-${index}`}
                    className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                        Popular Choice
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 mb-6">{pkg.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">₹{pkg.price.toLocaleString()}</span>
                        <span className="text-gray-400 ml-2">/{annual ? 'year' : 'month'}</span>
                      </div>

                      <Button
                        className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link
                          href={`https://wa.me/919500656339?text=${encodeURIComponent("Hello, I'm interested in your Store development services. Can you please provide me with more information?")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pkg.cta} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    <div className="p-8 border-t border-white border-opacity-10">
                      <h4 className="font-medium mb-4">What's included:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {pkg.limitations.length > 0 && (
                        <>
                          <h4 className="font-medium mb-4 mt-6">Limitations:</h4>
                          <ul className="space-y-3">
                            {pkg.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start text-gray-400">
                                <span className="mr-3">•</span>
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Management Packages */}
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Manufacturing Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementPackages.map((pkg, index) => (
                <motion.div
                  key={`mgmt-${index}`}
                  className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                      Popular Choice
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 mb-6">{pkg.description}</p>
                  </div>

                  <div className="p-8 border-t border-white border-opacity-10">
                    <h4 className="font-medium mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.limitations.length > 0 && (
                      <>
                        <h4 className="font-medium mb-4 mt-6">Limitations:</h4>
                        <ul className="space-y-3">
                          {pkg.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-gray-400">
                              <span className="mr-3">•</span>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-white text-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Store Packages Comparison</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
                Detailed breakdown of all Store development tiers
              </p>
            </motion.div>

            {/* Development Comparison */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Development Services</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-medium">Features</th>
                      {developmentPackages.map((pkg) => (
                        <th key={pkg.name} className="text-center py-4 px-4 font-medium">
                          {pkg.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Store Theme",
                        values: ["Custom", "Custom", "Custom", "Custom"]
                      },
                      {
                        feature: "Store Migration",
                        values: ["No", "Yes", "Yes", "Yes"]
                      },
                      {
                        feature: "SEO Setup",
                        values: ["Basic", "Standard", "Standard", "Advanced"]
                      },
                      {
                        feature: "Payment Gateways",
                        values: ["Basic", "Basic", "Standard", "Premium"]
                      },
                      {
                        feature: "Tech Support",
                        values: ["Email", "Email", "12/5", "24/7"]
                      },
                      {
                        feature: "Domain Included",
                        values: ["₹600", "₹600", "₹1500", "₹3000"]
                      },
                      {
                        feature: "Order Management",
                        values: ["Basic", "Standard", "Advanced", "Premium"]
                      },
                      {
                        feature: "Email Setup",
                        values: ["No", "No", "5 Users", "Custom"]
                      }
                    ].map((row, index) => (
                      <tr key={`dev-comp-${index}`} className="border-b border-gray-200">
                        <td className="py-4 px-4 font-medium">
                          <div className="flex items-center">
                            {row.feature}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-64">Information about {row.feature.toLowerCase()}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </td>
                        {row.values.map((value, i) => (
                          <td key={i} className="text-center py-4 px-4">
                            {value === "No" ? (
                              <span className="text-gray-400">—</span>
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Management Comparison */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Management Services</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-medium">Features</th>
                      {managementPackages.map((pkg) => (
                        <th key={pkg.name} className="text-center py-4 px-4 font-medium">
                          {pkg.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Response Time",
                        values: ["48h", "24h", "12h", "Immediate"]
                      },
                      {
                        feature: "Content Updates",
                        values: ["None", "Up to 5", "Up to 15", "Unlimited"]
                      },
                      {
                        feature: "Security Updates",
                        values: ["Monthly", "Weekly", "Daily", "Continuous"]
                      },
                      {
                        feature: "Included Support",
                        values: ["2h/month", "5h/month", "5h/month", "10h/month"]
                      },
                      {
                        feature: "Development Hours",
                        values: ["None", "None", "5h/month", "10h/month"]
                      },
                      {
                        feature: "Reporting",
                        values: ["Quarterly", "Monthly", "Weekly", "Daily"]
                      }
                    ].map((row, index) => (
                      <tr key={`mgmt-comp-${index}`} className="border-b border-gray-200">
                        <td className="py-4 px-4 font-medium">
                          <div className="flex items-center">
                            {row.feature}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="w-64">Information about {row.feature.toLowerCase()}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </td>
                        {row.values.map((value, i) => (
                          <td key={i} className="text-center py-4 px-4">
                            {value === "None" ? (
                              <span className="text-gray-400">—</span>
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
                Everything you need to know about our Store services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What's included in the development cost?",
                  answer: "All our development packages include complete store setup, theme customization, essential apps, and basic training. Higher tiers include more advanced features and longer support periods."
                },
                {
                  question: "Do you provide hosting?",
                  answer: "Store includes hosting in their plans. We'll help you choose and set up the right Store plan for your needs."
                },
                {
                  question: "How long does development take?",
                  answer: "Typical timelines range from 2 weeks for STARTUP plans to 6-8 weeks for PREMIUM plans, depending on complexity and content readiness."
                },
                {
                  question: "Can I migrate from another platform?",
                  answer: "Yes! Our BASIC plan and above include migration from platforms like WooCommerce, Magento, or other eCommerce systems."
                },
                {
                  question: "What about ongoing maintenance?",
                  answer: "All plans include at least 1 month of maintenance. We offer separate maintenance packages for long-term support."
                },
                {
                  question: "Do you offer custom solutions?",
                  answer: "Absolutely! Contact us to discuss custom Store solutions tailored to your specific business needs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Store Store?</h2>
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  Choose the perfect plan for your business or contact us for a custom solution
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={() => {
                      const phoneNumber = "919500656339";
                      const message = "Hello, I'm interested in your Store development services. Can you please provide me with more information?";
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                    }}
                  >
                    Chat on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Hynox</h3>
                <p className="text-gray-400 mb-4">Empowering businesses with innovative solutions and cutting-edge technology.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dropshipping</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Software Development</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meet our Team</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400">info@theblackcrest.com</li>
                  <li className="text-gray-400">+1 (555) 123-4567</li>
                  <li className="text-gray-400">123 Marketing St, tirupur</li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400">
                © 2024 The Black Crest. All rights reserved.
                <div className="flex gap-4 mt-2">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}