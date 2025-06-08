"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, CheckCircle, HelpCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubscriptionPage() {
  const [annual, setAnnual] = useState(false)

  const subscriptionPackages = [
    {
      name: "Basic",
      description: "Monthly maintenance for small clothing brands",
      price: annual ? 79 : 99,
      features: [
        "Website maintenance",
        "Basic inventory management",
        "Standard shipping fulfillment",
        "Monthly performance report",
        "Email support",
      ],
      limitations: ["No design updates", "No marketing services", "Limited technical support"],
      cta: "Subscribe",
      popular: false,
    },
    {
      name: "Standard",
      description: "Regular support for growing clothing brands",
      price: annual ? 149 : 179,
      features: [
        "Website maintenance & updates",
        "Inventory management",
        "Order fulfillment & tracking",
        "Bi-weekly performance reports",
        "Email & chat support",
        "Basic social media updates",
      ],
      limitations: ["Limited design updates", "Basic marketing support"],
      cta: "Subscribe",
      popular: false,
    },
    {
      name: "Premium",
      description: "Comprehensive support for established brands",
      price: annual ? 299 : 349,
      features: [
        "Website maintenance & optimization",
        "Advanced inventory management",
        "Priority order fulfillment",
        "Weekly performance analytics",
        "Priority support response",
        "Regular social media management",
        "Basic SEO maintenance",
        "Monthly design updates",
      ],
      limitations: ["Limited marketing campaigns"],
      cta: "Subscribe Now",
      popular: true,
    },
    {
      name: "Professional",
      description: "Advanced support for serious clothing brands",
      price: annual ? 499 : 599,
      features: [
        "Full website management & optimization",
        "Complete inventory & supply chain management",
        "Express order fulfillment",
        "Real-time analytics dashboard",
        "Dedicated support manager",
        "Full social media management",
        "Comprehensive SEO optimization",
        "Bi-weekly design updates",
        "Quarterly marketing campaigns",
      ],
      limitations: ["Limited brand strategy revisions"],
      cta: "Get Professional",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "All-inclusive support for large clothing brands",
      price: annual ? 899 : 1099,
      features: [
        "Complete website & platform management",
        "Advanced inventory & logistics optimization",
        "Premium order fulfillment & tracking",
        "Advanced analytics & forecasting",
        "24/7 dedicated support team",
        "Comprehensive digital marketing",
        "Complete SEO & content strategy",
        "Unlimited design updates",
        "Monthly strategy consultations",
        "Seasonal campaign planning",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="py-6 border-b border-white border-opacity-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              ClothBrand Pro
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                Packages
              </Link>
              <Link href="/subscription" className="text-white">
                Subscriptions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </nav>
            <Button variant="outline" asChild>
              <Link href="#">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Subscription Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ongoing Support Subscriptions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Choose the perfect subscription plan for your clothing brand's ongoing needs
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={annual ? "text-gray-400" : "text-white font-medium"}>Monthly</span>
              <Switch
                checked={annual}
                onCheckedChange={setAnnual}
                className="data-[state=checked]:bg-white data-[state=checked]:text-black"
              />
              <span className={!annual ? "text-gray-400" : "text-white font-medium"}>
                Annual <span className="text-green-400 text-sm ml-1">Save 20%</span>
              </span>
            </div>
          </motion.div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Plans</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subscriptionPackages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative h-full`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 mb-6">{pkg.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">${pkg.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>

                      <Button
                        className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href={`/subscription/${pkg.name.toLowerCase()}`}>
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
            </TabsContent>
            <TabsContent value="maintenance" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subscriptionPackages.slice(0, 3).map((pkg, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative h-full`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 mb-6">{pkg.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">${pkg.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>

                      <Button
                        className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href={`/subscription/${pkg.name.toLowerCase()}`}>
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
            </TabsContent>
            <TabsContent value="growth" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subscriptionPackages.slice(2, 5).map((pkg, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white bg-opacity-5 rounded-xl overflow-hidden border ${pkg.popular ? "border-white" : "border-white border-opacity-10"} relative h-full`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-white text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 mb-6">{pkg.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">${pkg.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>

                      <Button
                        className={`w-full ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href={`/subscription/${pkg.name.toLowerCase()}`}>
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
            </TabsContent>
          </Tabs>

          {/* Feature Comparison */}
          <div className="mt-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Compare Subscription Features</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
                Find the perfect ongoing support plan for your clothing brand
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white border-opacity-10">
                    <th className="text-left py-4 px-4 font-medium">Features</th>
                    <th className="text-center py-4 px-4 font-medium">Basic</th>
                    <th className="text-center py-4 px-4 font-medium">Standard</th>
                    <th className="text-center py-4 px-4 font-medium bg-white bg-opacity-5">Premium</th>
                    <th className="text-center py-4 px-4 font-medium">Professional</th>
                    <th className="text-center py-4 px-4 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Website Management",
                      basic: "Maintenance only",
                      standard: "Maintenance & updates",
                      premium: "Maintenance & optimization",
                      professional: "Full management",
                      enterprise: "Complete platform management",
                    },
                    {
                      feature: "Inventory Management",
                      basic: "Basic",
                      standard: "Standard",
                      premium: "Advanced",
                      professional: "Complete",
                      enterprise: "Advanced optimization",
                    },
                    {
                      feature: "Order Fulfillment",
                      basic: "Standard",
                      standard: "Standard with tracking",
                      premium: "Priority",
                      professional: "Express",
                      enterprise: "Premium",
                    },
                    {
                      feature: "Performance Reports",
                      basic: "Monthly",
                      standard: "Bi-weekly",
                      premium: "Weekly",
                      professional: "Real-time dashboard",
                      enterprise: "Advanced analytics",
                    },
                    {
                      feature: "Support Level",
                      basic: "Email only",
                      standard: "Email & chat",
                      premium: "Priority response",
                      professional: "Dedicated manager",
                      enterprise: "24/7 team",
                    },
                    {
                      feature: "Social Media",
                      basic: "No",
                      standard: "Basic updates",
                      premium: "Regular management",
                      professional: "Full management",
                      enterprise: "Comprehensive strategy",
                    },
                    {
                      feature: "SEO Services",
                      basic: "No",
                      standard: "No",
                      premium: "Basic maintenance",
                      professional: "Comprehensive",
                      enterprise: "Complete strategy",
                    },
                    {
                      feature: "Design Updates",
                      basic: "No",
                      standard: "Limited",
                      premium: "Monthly",
                      professional: "Bi-weekly",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "Marketing Campaigns",
                      basic: "No",
                      standard: "No",
                      premium: "Basic",
                      professional: "Quarterly",
                      enterprise: "Monthly + seasonal",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white border-opacity-10">
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
                      <td className="text-center py-4 px-4">
                        {row.basic === "Yes" ? (
                          <Check className="h-5 w-5 mx-auto text-green-400" />
                        ) : row.basic === "No" ? (
                          <X className="h-5 w-5 mx-auto text-gray-500" />
                        ) : (
                          row.basic
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.standard === "Yes" ? (
                          <Check className="h-5 w-5 mx-auto text-green-400" />
                        ) : row.standard === "No" ? (
                          <X className="h-5 w-5 mx-auto text-gray-500" />
                        ) : (
                          row.standard
                        )}
                      </td>
                      <td className="text-center py-4 px-4 bg-white bg-opacity-5">
                        {row.premium === "Yes" ? (
                          <Check className="h-5 w-5 mx-auto text-green-400" />
                        ) : row.premium === "No" ? (
                          <X className="h-5 w-5 mx-auto text-gray-500" />
                        ) : (
                          row.premium
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.professional === "Yes" ? (
                          <Check className="h-5 w-5 mx-auto text-green-400" />
                        ) : row.professional === "No" ? (
                          <X className="h-5 w-5 mx-auto text-gray-500" />
                        ) : (
                          row.professional
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.enterprise === "Yes" ? (
                          <Check className="h-5 w-5 mx-auto text-green-400" />
                        ) : row.enterprise === "No" ? (
                          <X className="h-5 w-5 mx-auto text-gray-500" />
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
              Everything you need to know about our ongoing support subscriptions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's the difference between packages and subscriptions?",
                answer:
                  "Our packages are one-time setups for launching your clothing brand, while subscriptions provide ongoing support and maintenance after your brand is established.",
              },
              {
                question: "Can I change my subscription level?",
                answer:
                  "Yes, you can upgrade or downgrade your subscription at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle.",
              },
              {
                question: "Is there a minimum commitment period?",
                answer:
                  "Monthly subscriptions can be canceled anytime. Annual subscriptions require a 12-month commitment but offer significant savings compared to monthly billing.",
              },
              {
                question: "What happens if I need services not included in my subscription?",
                answer:
                  "We offer add-on services for specific needs not covered by your subscription. These can be purchased separately without changing your subscription level.",
              },
              {
                question: "How quickly do you respond to support requests?",
                answer:
                  "Response times vary by subscription level. Basic: 24-48 hours, Standard: 24 hours, Premium: 12 hours, Professional: 4 hours, Enterprise: 1 hour.",
              },
              {
                question: "Can I combine a package with a subscription?",
                answer:
                  "Yes, many clients start with a package to launch their brand and then transition to a subscription for ongoing support. We offer special discounts for combined purchases.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Ongoing Brand Support?</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Join successful clothing brands who rely on our subscription services for continuous growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                  <Link href="/subscription/premium">
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#">Schedule a Consultation</Link>
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
              <h3 className="text-2xl font-bold">ClothBrand Pro</h3>
              <p className="text-gray-400 mt-2">Complete clothing brand solutions</p>
            </div>
            <div className="flex gap-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                Packages
              </Link>
              <Link href="/subscription" className="text-gray-400 hover:text-white transition-colors">
                Subscriptions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white border-opacity-10 text-center text-gray-500">
            <p>© {new Date().getFullYear()} ClothBrand Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

