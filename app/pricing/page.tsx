"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, CheckCircle, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  const developmentPackages = [
    {
      name: "Starter",
      description: "Essential Shopify store for new businesses",
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
      description: "Complete Shopify solution for growing businesses",
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
      description: "Advanced Shopify solution with premium features",
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
      description: "Enterprise-grade Shopify solution with all features",
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
      <header className="py-6 border-b border-white border-opacity-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
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
          </div>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-white">
                Pricing
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Shopify Development Packages</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Comprehensive Shopify solutions tailored for businesses of all sizes
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
              Shopify Development Services
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
                        href={`https://wa.me/919500656339?text=${encodeURIComponent("Hello, I'm interested in your Shopify development services. Can you please provide me with more information?")}`}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Shopify Packages Comparison</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
              Detailed breakdown of all Shopify development tiers
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
                      feature: "Shopify Theme",
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
              Everything you need to know about our Shopify services
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
                answer: "Shopify includes hosting in their plans. We'll help you choose and set up the right Shopify plan for your needs."
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
                answer: "Absolutely! Contact us to discuss custom Shopify solutions tailored to your specific business needs."
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Shopify Store?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Choose the perfect plan for your business or contact us for a custom solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => {
                    const phoneNumber = "919500656339";
                    const message = "Hello, I'm interested in your Shopify development services. Can you please provide me with more information?";
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
      <footer className="py-12 bg-black border-t border-white border-opacity-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Hynox</h3>
              <p className="text-gray-400 mt-2">Complete Shopify Development Solutions</p>
            </div>
            <div className="flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Services
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