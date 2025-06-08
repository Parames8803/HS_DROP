"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle, Package2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const subscriptionDetails = {
  basic: {
    name: "Basic",
    description: "Monthly maintenance for small clothing brands",
    price: 99,
    annualPrice: 79,
    features: [
      "Website maintenance",
      "Basic inventory management",
      "Standard shipping fulfillment",
      "Monthly performance report",
      "Email support",
    ],
    limitations: ["No design updates", "No marketing services", "Limited technical support"],
    responseTime: "24-48 hours",
  },
  standard: {
    name: "Standard",
    description: "Regular support for growing clothing brands",
    price: 179,
    annualPrice: 149,
    features: [
      "Website maintenance & updates",
      "Inventory management",
      "Order fulfillment & tracking",
      "Bi-weekly performance reports",
      "Email & chat support",
      "Basic social media updates",
    ],
    limitations: ["Limited design updates", "Basic marketing support"],
    responseTime: "24 hours",
  },
  premium: {
    name: "Premium",
    description: "Comprehensive support for established brands",
    price: 349,
    annualPrice: 299,
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
    responseTime: "12 hours",
  },
  professional: {
    name: "Professional",
    description: "Advanced support for serious clothing brands",
    price: 599,
    annualPrice: 499,
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
    responseTime: "4 hours",
  },
  enterprise: {
    name: "Enterprise",
    description: "All-inclusive support for large clothing brands",
    price: 1099,
    annualPrice: 899,
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
    responseTime: "1 hour",
  },
}

export default function SubscriptionPlanPage() {
  const params = useParams()
  const router = useRouter()
  const planName = params.plan as string

  const planInfo = subscriptionDetails[planName]

  if (!planInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Subscription plan not found</h1>
        <p className="mb-8">The subscription plan you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/subscription">Back to Subscriptions</Link>
        </Button>
      </div>
    )
  }

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
              <Link href="/subscription" className="text-gray-400 hover:text-white transition-colors">
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

      {/* Subscription Plan Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-8" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subscriptions
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold mb-4">{planInfo.name} Subscription</h1>
              <p className="text-xl text-gray-300 mb-6">{planInfo.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${planInfo.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-green-400 mt-2">Annual billing: ${planInfo.annualPrice}/month</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's included:</h3>
                  <ul className="space-y-3">
                    {planInfo.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {planInfo.limitations.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Limitations:</h3>
                    <ul className="space-y-3">
                      {planInfo.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start text-gray-400">
                          <span className="mr-3">•</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 mt-8">
                  <h3 className="text-xl font-semibold mb-4">Support Response Time</h3>
                  <p className="text-gray-300">
                    With the {planInfo.name} plan, our team responds to your support requests within{" "}
                    <span className="font-bold text-white">{planInfo.responseTime}</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white bg-opacity-5 border-white border-opacity-10">
                <CardHeader>
                  <CardTitle>Subscribe to {planInfo.name} Plan</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below to start your subscription
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          className="bg-white bg-opacity-5 border-white border-opacity-10"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white bg-opacity-5 border-white border-opacity-10"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="company">Company/Brand Name</Label>
                        <Input
                          id="company"
                          placeholder="Enter your company name"
                          className="bg-white bg-opacity-5 border-white border-opacity-10"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="website">Website URL</Label>
                        <Input
                          id="website"
                          placeholder="https://your-brand.com"
                          className="bg-white bg-opacity-5 border-white border-opacity-10"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Billing Cycle</Label>
                        <RadioGroup defaultValue="monthly">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <Label htmlFor="monthly">Monthly (${planInfo.price}/month)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="annual" id="annual" />
                            <Label htmlFor="annual">
                              Annual (${planInfo.annualPrice}/month - Save ${planInfo.price - planInfo.annualPrice} per
                              month)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          placeholder="Tell us about your specific needs"
                          className="bg-white bg-opacity-5 border-white border-opacity-10"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>

              <div className="mt-8 bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10">
                <div className="flex items-center gap-4 mb-4">
                  <Package2 className="h-8 w-8" />
                  <h3 className="text-xl font-semibold">Need a custom plan?</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  If the {planInfo.name} plan doesn't perfectly match your needs, we can create a custom subscription
                  tailored to your specific requirements.
                </p>
                <Button variant="outline" className="w-full">
                  Request Custom Plan
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
              See how our {planInfo.name} subscription has helped clothing brands thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Chen",
                company: "Urban Thread Co.",
                quote:
                  "The ongoing support from ClothBrand Pro has been invaluable. Their team handles all our website updates and order fulfillment, allowing us to focus on designing new collections.",
              },
              {
                name: "Marcus Johnson",
                company: "Elevate Apparel",
                quote:
                  "Having a dedicated team manage our e-commerce operations has increased our efficiency by 40%. The regular performance reports help us make data-driven decisions for our clothing line.",
              },
              {
                name: "Sophia Rodriguez",
                company: "Eco Fashion Collective",
                quote:
                  "The subscription service pays for itself. Our conversion rate has improved by 25% since they optimized our website, and their inventory management has reduced our stockouts by 60%.",
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

