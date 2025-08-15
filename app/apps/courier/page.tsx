"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  MapPin, 
  Route, 
  Clock, 
  DollarSign, 
  Smartphone, 
  Navigation, 
  TrendingUp, 
  ArrowLeft,
  CheckCircle2,
  Download,
  Star,
  Zap,
  Calendar,
  ArrowRight,
  Headphones,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function CourierApp() {
  const features = [
    {
      title: "Route Optimization",
      icon: Route,
      color: "from-orange-500 to-red-500",
      description: "Smart routing to maximize your deliveries and earnings",
      details: [
        "AI-powered route planning",
        "Real-time traffic updates",
        "Multiple delivery optimization",
        "Fuel-efficient route suggestions"
      ]
    },
    {
      title: "Delivery Tracking",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
      description: "Track all your deliveries in real-time",
      details: [
        "Live GPS tracking for customers",
        "Delivery status updates",
        "Photo confirmation of deliveries",
        "Digital signature collection"
      ]
    },
    {
      title: "Flexible Scheduling",
      icon: Calendar,
      color: "from-green-500 to-emerald-500",
      description: "Work when you want, how you want",
      details: [
        "Set your own working hours",
        "Accept or decline delivery requests",
        "Plan your daily schedule",
        "Work-life balance control"
      ]
    },
    {
      title: "Instant Payments",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      description: "Get paid immediately after each delivery",
      details: [
        "Instant payment processing",
        "Multiple payment methods",
        "Daily earnings summary",
        "Transparent fee structure"
      ]
    },
    {
      title: "Navigation Support",
      icon: Navigation,
      color: "from-indigo-500 to-purple-500",
      description: "Advanced navigation tools for efficient deliveries",
      details: [
        "Turn-by-turn navigation",
        "Offline map support",
        "Landmark-based directions",
        "Voice-guided navigation"
      ]
    },
    {
      title: "Performance Analytics",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500",
      description: "Track your performance and optimize earnings",
      details: [
        "Delivery completion rates",
        "Customer rating analytics",
        "Earnings growth tracking",
        "Performance improvement tips"
      ]
    }
  ];

  const benefits = [
    "Earn money with flexible working hours",
    "No minimum delivery requirements",
    "Instant payment after each delivery",
    "Advanced route optimization tools",
    "24/7 rider support",
    "Performance bonuses and incentives"
  ];

  const stats = [
    { label: "Average Hourly Earnings", value: "GHS 25+", icon: DollarSign },
    { label: "Delivery Success Rate", value: "98%", icon: CheckCircle2 },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Response Time", value: "< 2 min", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <Button variant="ghost" size="sm" className="group-hover:bg-orange-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Courier App
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50 mb-6">
                <Truck className="w-3 h-3 mr-1" />
                For Riders
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Deliver & Earn 
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {' '}Flexibly
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our delivery network and earn money on your schedule. 
                Advanced tools, instant payments, and flexible working hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-14 hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-14 hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-orange-700 text-lg">Join as a Rider</span>
                </div>
                <p className="text-orange-700 font-medium">
                  Start earning today with flexible hours and instant payments!
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Courier app interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating feature cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Route className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-semibold">Smart Routes</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold">Instant Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Tools for Riders
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to deliver efficiently and maximize your earnings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Become a Rider?
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Join thousands of riders who are earning flexible income with Searchbook
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              <Download className="w-5 h-5 mr-2" />
              Join as Rider
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
              <Truck className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Start earning as a rider in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up & Verify",
                description: "Download the app, create your profile, and complete our quick verification process",
                icon: Smartphone
              },
              {
                step: "2", 
                title: "Get Your Vehicle Ready",
                description: "Ensure your vehicle meets our requirements and upload necessary documents",
                icon: Truck
              },
              {
                step: "3",
                title: "Start Delivering",
                description: "Go online, accept delivery requests, and start earning money immediately",
                icon: DollarSign
              }
            ].map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-4">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
            {/* Enhanced Footer */}
      <footer className="bg-black text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
                  Searchbook
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Ghana's leading service marketplace connecting customers with trusted professionals across the country.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Serving 15+ cities across Ghana</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-600' },
                  { name: 'Twitter', icon: 't', color: 'hover:bg-blue-400' },
                  { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-700' },
                  { name: 'Instagram', icon: 'ig', color: 'hover:bg-pink-600' }
                ].map((social, index) => (
                  <div key={index} className={`w-12 h-12 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg group`}>
                    <span className="text-sm font-bold group-hover:scale-110 transition-transform duration-200">{social.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Services', href: '#services' },
                  { name: 'How It Works', href: '#how-it-works' },
                  { name: 'Support', href: '#support' },
                  { name: 'About Us', href: '/about' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition-all duration-200 py-2 block group flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:translate-x-2 transition-transform duration-200">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Our Apps */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-white relative">
                Our Apps
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Customer App', href: '/apps/customer', color: 'text-blue-400' },
                  { name: 'Professional App', href: '/apps/professional', color: 'text-green-400' },
                  { name: 'Courier App', href: '/apps/courier', color: 'text-orange-400' },
                  { name: 'Vendor App', href: '/apps/vendor', color: 'text-purple-400' }
                ].map((app, index) => (
                  <li key={index}>
                    <a href={app.href} className={`text-gray-300 hover:${app.color} transition-all duration-200 py-2 block group flex items-center`}>
                      <Smartphone className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{app.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Download Buttons */}
              <div className="mt-8 space-y-4">
                <a href="#" className="block group">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-12 hover:opacity-80 transition-all duration-200 group-hover:scale-105"
                  />
                </a>
                <a href="#" className="block group">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-12 hover:opacity-80 transition-all duration-200 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>
            
            {/* Newsletter & Support */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-white relative">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get updates on new features, services, and exclusive offers.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-8">
                <div className="flex rounded-xl overflow-hidden shadow-lg">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-4 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 rounded-l-xl"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-l-none px-6 shadow-lg hover:shadow-xl transition-all duration-200">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              {/* Support Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">24/7 Support</div>
                    <div className="text-gray-400 text-sm">We're here to help</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Secure Platform</div>
                    <div className="text-gray-400 text-sm">Your data is protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 mt-16 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div>
                <p className="text-gray-400 text-lg">
                  &copy; 2025 <span className="text-white font-semibold">Searchbook</span>. All rights reserved.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Made with ❤️ in Ghana 🇬🇭 for Ghanaians
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-400">
                  {[
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Terms of Service', href: '/terms' },
                    { name: 'Cookie Policy', href: '/cookie-policy' }
                  ].map((link, index) => (
                    <a 
                      key={index}
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </footer>
    </div>
  );
}