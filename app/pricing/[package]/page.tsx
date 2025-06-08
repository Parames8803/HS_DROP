"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const packageDetails = {
  starter: {
    name: "StartUp",
    description: "For entrepreneurs just starting their clothing brand",
    price: 5999,
    annualPrice: 99,
    features: [
      "Custom Shopify Store Design & Development",
      "Shopify Theme Customization",
      "Shopify App Integration & Development",
      "Product Listing & Management",
      "Payment Gateway Setup",
      "Speed Optimization & Performance Enhancement",
    ],
    limitations: [
      "No custom packaging",
      "Limited design revisions",
      "No marketing support",
      "Basic analytics only",
    ],
    integrations: [
      "Full-stack Payment Gateway Integration",
      "Multi-vendor Delivery API Setup",
      "Realtime Stock Syncing",
      "Custom Shipping Rules Engine",
      "Integration with ERP",
      "Courier Aggregators (Delhivery, BlueDart)",
      "Live Delivery Tracking Page",
      "Automatic Invoice & Label Generator",
      "24/7 Monitoring & Support",
      "Weekly Security Patching",
    ],
    paymentIntegrations: [
      "PhonePe Integration",
    ], 
    maintenance: [
      "Monthly Maintenance",
      "Website & App Updates",
      "Bug Fixes & Security Patches"
    ],
    seo: [
      "SEO Setup",
      "Keyword Research & Optimization"
    ]
  },
  essential: {
    name: "Basic",
    description: "For new clothing brands ready to establish presence",
    price: 14999,
    annualPrice: 199,
    features: [
      "Custom Shopify Store Design & Development",
      "Shopify Theme Customization",
      "Shopify App Integration & Development",
      "Product Listing & Management",
      "Payment Gateway Setup",
      "Speed Optimization & Performance Enhancement",
      "Shopify Store Migration",
    ],
    limitations: [
      "Limited custom packaging",
      "Basic marketing support",
      "Standard analytics",
    ],
    integrations: [
      "Full-stack Payment Gateway Integration",
      "Multi-vendor Delivery API Setup",
      "Realtime Stock Syncing",
      "Custom Shipping Rules Engine",
      "Integration with ERP",
      "Courier Aggregators (Delhivery, BlueDart)",
      "Live Delivery Tracking Page",
      "Automatic Invoice & Label Generator",
      "24/7 Monitoring & Support",
      "Weekly Security Patching",
    ],
    paymentIntegrations: [
      "PhonePe Integration",
    ],  
    maintenance: [
      "Monthly Maintenance",
      "Website & App Updates",
      "Bug Fixes & Security Patches"
    ],
    seo: [
      "SEO Setup",
      "Keyword Research & Optimization"
    ]
  },
  growth: {
    name: "Standard",
    description: "For established clothing brands looking to scale",
    price: 44999,
    annualPrice: 349,
    features: [
      "Custom Shopify Store Design & Development",
      "Shopify Theme Customization",
      "Shopify App Integration & Development",
      "Product Listing & Management",
      "Payment Gateway Setup",
      "Speed Optimization & Performance Enhancement",
      "Shopify Store Migration",
    ],
    limitations: [
      "Limited international shipping",
      "Standard marketing campaigns",
    ],
    integrations: [
      "Full-stack Payment Gateway Integration",
      "Multi-vendor Delivery API Setup",
      "Realtime Stock Syncing",
      "Custom Shipping Rules Engine",
      "Integration with ERP",
      "Courier Aggregators (Delhivery, BlueDart)",
      "Live Delivery Tracking Page",
      "Automatic Invoice & Label Generator",
      "24/7 Monitoring & Support",
      "Weekly Security Patching",
    ],
    paymentIntegrations: [
      "PhonePe Integration",
    ],  
    maintenance: [
      "Monthly Maintenance",
      "Website & App Updates",
      "Bug Fixes & Security Patches"
    ],
    seo: [
      "SEO Setup",
      "Keyword Research & Optimization"
    ]
  },
  professional: {
    name: "Premium",
    description: "For serious clothing brands with growth ambitions",
    price: 99999,
    annualPrice: 599,
    features: [
      "Custom Shopify Store Design & Development",
      "Shopify Theme Customization",
      "Shopify App Integration & Development",
      "Product Listing & Management",
      "Payment Gateway Setup",
      "Speed Optimization & Performance Enhancement",
      "Shopify Store Migration",
      "Shopify Plus Solutions",
    ],
    limitations: ["Limited seasonal campaign planning"],
    integrations: [
      "Full-stack Payment Gateway Integration",
      "Multi-vendor Delivery API Setup",
      "Realtime Stock Syncing",
      "Custom Shipping Rules Engine",
      "Integration with ERP",
      "Courier Aggregators (Delhivery, BlueDart)",
      "Live Delivery Tracking Page",
      "Automatic Invoice & Label Generator",
      "24/7 Monitoring & Support",
      "Weekly Security Patching",
    ],
    paymentIntegrations: [
      "PhonePe Integration",
    ],  
    maintenance: [
      "Monthly Maintenance",
      "Website & App Updates",
      "Bug Fixes & Security Patches"
    ],
    seo: [
      "SEO Setup",
      "Keyword Research & Optimization"
    ]
  },
  enterprise: {
    name: "Enterprise",
    description: "Complete solution for high-volume clothing brands",
    price: 1299,
    annualPrice: 999,
    features: [
      "Elite brand strategy & positioning",
      "Custom e-commerce solution",
      "Unlimited product designs",
      "Premium manufacturing network",
      "Fully customized packaging",
      "Global logistics optimization",
      "24/7 dedicated support team",
      "Comprehensive marketing & PR",
      "Advanced analytics & forecasting",
      "Seasonal collection planning",
    ],
    limitations: [],
    integrations: [
      "Full-stack Payment Gateway Integration",
      "Multi-vendor Delivery API Setup",
      "Realtime Stock Syncing",
      "Custom Shipping Rules Engine",
      "Integration with ERP",
      "Courier Aggregators (Delhivery, BlueDart)",
      "Live Delivery Tracking Page",
      "Automatic Invoice & Label Generator",
      "24/7 Monitoring & Support",
      "Weekly Security Patching",
    ],
    paymentIntegrations: [
      "PhonePe Integration",
    ],  
    maintenance: [
      "Monthly Maintenance",
      "Website & App Updates",
      "Bug Fixes & Security Patches"
    ],
    seo: [
      "SEO Setup",
      "Keyword Research & Optimization"
    ]
  },
};

export default function PackageDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const packageName = params.package as string;
  const packageInfo = packageDetails[packageName];

  if (!packageInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Package not found</h1>
        <p className="mb-8">The package you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/pricing">Back to Pricing</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="py-6 border-b border-white border-opacity-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Hitshoppers</Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link>
            <Link href="#" className="text-gray-400 hover:text-white">About</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Contact</Link>
          </nav>
          <Button variant="outline" asChild>
            <Link href="#">Login</Link>
          </Button>
        </div>
      </header>

      {/* First Package Section - Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button variant="outline" className="mb-8" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pricing
          </Button>

          {/* Title & Price */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">{packageInfo.name} Package</h1>
            <p className="text-lg text-gray-300 mb-6">{packageInfo.description}</p>
            <div className="mb-6">
              <span className="text-5xl font-bold">${packageInfo.price}</span>
              <span className="text-gray-400 text-lg ml-2">/month</span>
              <p className="text-green-400 mt-2 text-sm">Annual billing: ${packageInfo.annualPrice}/month</p>
            </div>
          </motion.div>

          {/* Two Card Layout - Showing Core Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Card - Core Features */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-5 p-6 rounded-xl border border-white border-opacity-10"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Features</h3>
                  <ul className="space-y-2">
                    {packageInfo.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {packageInfo.limitations.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Limitations</h3>
                    <ul className="space-y-2 text-gray-400">
                      {packageInfo.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Card - Key Benefits */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-5 p-6 rounded-xl border border-white border-opacity-10"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      "Dedicated account manager",
                      "Priority support",
                      "Custom onboarding",
                      "Performance analytics"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Monthly Maintenance */}
                {packageInfo.maintenance?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
                    <ul className="space-y-2 text-gray-300">
                      {packageInfo.maintenance.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Package Section - Detailed View */}
      <section className="py-16 bg-white bg-opacity-5">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">Detailed Package Breakdown</h1>
            <p className="text-lg text-gray-300 mb-6">Everything included in your {packageInfo.name} package</p>
          </motion.div>

          {/* Two Card Layout - Detailed Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Card - Technical Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-6 rounded-xl border border-white border-opacity-10"
            >
              <div className="space-y-6">
                {/* Integrations */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Integrations</h3>
                  <ul className="space-y-2 text-gray-300">
                    {packageInfo.integrations.slice(0, 5).map((integration, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>{integration}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Integrations */}
                {packageInfo.paymentIntegrations?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Payment Solutions</h3>
                    <ul className="space-y-2 text-gray-300">
                      {packageInfo.paymentIntegrations.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Card - Additional Services */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-6 rounded-xl border border-white border-opacity-10"
            >
              <div className="space-y-6">
                {/* SEO Services */}
                {packageInfo.seo?.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Marketing Services</h3>
                    <ul className="space-y-2 text-gray-300">
                      {packageInfo.seo.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Additional Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    {packageInfo.features.slice(4).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subscription Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-black border border-white border-opacity-20 rounded-2xl shadow-lg max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle>Get Started with {packageInfo.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below to subscribe to this package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div>
                      <Label htmlFor="website">Website URL</Label>
                      <Input id="website" placeholder="https://your-store.com" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>

            {/* CTA Block */}
            <div className="mt-8 bg-black p-6 rounded-2xl border border-white border-opacity-20 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <Package2 className="h-6 w-6 text-white" />
                <h3 className="text-lg font-semibold">Need help choosing?</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Not sure if this is the right fit? Book a free call with our team to discuss your needs.
              </p>
              <Button variant="outline" className="w-full">Schedule a Call</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
              Success stories from clothing brands using our {packageInfo.name} package
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Urban Threads Apparel",
                quote:
                  "ClothBrand Pro helped us launch our streetwear line from concept to sales in just 6 weeks.",
              },
              {
                name: "Michael Chen",
                company: "Eco Couture",
                quote:
                  "Their attention to detail and quality control for our sustainable clothing line is unmatched.",
              },
              {
                name: "Jessica Williams",
                company: "Fitness Fashion Co.",
                quote:
                  "The analytics dashboard gives us insights we never had before. We've optimized our collections.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white border-opacity-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">ClothBrand Pro</h3>
            <p className="text-gray-400 mt-2">Complete clothing brand solutions</p>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}