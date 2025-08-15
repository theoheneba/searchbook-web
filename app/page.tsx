"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Users2, 
  Truck, 
  Package2, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ClipboardList,
  UserCheck,
  Shield,
  ShieldCheck,
  Clock,
  MapPin,
  CreditCard,
  Award,
  Zap,
  Target,
  TrendingUp,
  Search,
  Bell,
  User,
  Settings,
  MessageCircle,
  Calendar,
  DollarSign,
  ChevronDown,
  Download,
  RefreshCw,
  HelpCircle,
  Phone,
  BarChart3,
  Headphones,
  Play,
  DollarSignIcon,
  CalculatorIcon
} from 'lucide-react';

export default function SearchbookHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    providers: 0,
    categories: 0,
    rating: 0
  });

  // Animated counters
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        customers: 10000,
        providers: 500,
        categories: 50,
        rating: 4.8
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    {
      id: 'user',
      title: 'Request Any Service Instantly',
      subtitle: 'For Customers',
      description: 'Browse services, request instantly, pay securely, and track in real-time',
      features: ['Service browsing', 'Instant request', 'Secure payments', 'Real-time tracking'],
      discount: 'Get 15% discount when you request on the app',
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600',
      mockup: '/api/placeholder/300/600',
      alignment: 'right'
    },
    {
      id: 'partner',
      title: 'Grow Your Service Business',
      subtitle: 'For Professionals',
      description: 'Manage jobs, communicate with customers, generate invoices, and track earnings',
      features: ['Job management', 'Customer communication', 'Invoice generation', 'Earnings tracking'],
      discount: 'Join as a Partner',
      icon: Users2,
      color: 'from-green-500 to-green-600',
      mockup: '/api/placeholder/300/600',
      alignment: 'left'
    },
    {
      id: 'courier',
      title: 'Deliver & Earn Flexibly',
      subtitle: 'For Riders',
      description: 'Optimize routes, track deliveries, flexible scheduling, and instant payments',
      features: ['Route optimization', 'Delivery tracking', 'Flexible scheduling', 'Instant payments'],
      discount: 'Join as a Rider',
      icon: Truck,
      color: 'from-orange-500 to-orange-600',
      mockup: '/api/placeholder/300/600',
      alignment: 'right'
    },
    {
      id: 'vendor',
      title: 'Manage Your Inventory Smart',
      subtitle: 'For Vendors',
      description: 'Control inventory, fulfill orders, access dashboard, and analyze sales',
      features: ['Inventory management', 'Order fulfillment', 'Vendor dashboard', 'Sales analytics'],
      discount: '',
      icon: Package2,
      color: 'from-purple-500 to-purple-600',
      mockup: '/api/placeholder/300/600',
      alignment: 'left'
    }
  ];

  const services = [
    { name: 'Home Cleaning', emoji: '🏠' },
    { name: 'Plumbing', emoji: '🔧' },
    { name: 'Electrical', emoji: '⚡' },
    { name: 'AC Repair', emoji: '❄️' },
    { name: 'Appliance Repair', emoji: '🔨' },
    { name: 'Painting', emoji: '🎨' },
    { name: 'Carpentry', emoji: '🪚' },
  ];

  const howItWorksSteps = [
    {
      title: 'Request Your Service',
      description: 'Select category, describe need, choose time, pay GHS 50-150 visiting charge',
      icon: Target,
    },
    {
      title: 'Accept & Assessment',
      description: 'Verified provider visits, assesses work, provides detailed quote',
      icon: CheckCircle2,
    },
    {
      title: 'Service Booking',
      description: 'Review quote, secure payment, work completion',
      icon: CalculatorIcon,
    },
    {
      title: 'Complete & Payment',
      description: 'Review quote, secure payment, work completion',
      icon: DollarSignIcon,
    },
  ];

  const testimonials = [
    {
      name: 'Abena Mensah',
      service: 'Home Cleaning',
      rating: 5,
      text: 'Amazing service! The cleaner arrived on time and did an incredible job. The app made booking so easy.',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Kofi Owusu',
      service: 'Plumbing',
      rating: 5,
      text: 'Quick response time and fair pricing. The plumber fixed my issue within an hour of arrival.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ama Nkrumah',
      service: 'AC Repair',
      rating: 5,
      text: 'Professional service and transparent pricing. My AC is working perfectly now!',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
                Searchbook
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium nav-link-indicator">
                Services
              </a>
              <a href="#apps" className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium nav-link-indicator">
                Apps
              </a>
              
              
              <Link href="/faq" className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium nav-link-indicator">
                FAQ
              </Link>
              
              
              {/* The Company Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium nav-link-indicator"
                >
                  The Company
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCompanyMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCompanyMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    <Link href="/about" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      About Us
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Our Apps</div>
                    <Link href="/apps/customer" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      📱 Customer App
                    </Link>
                    <Link href="/apps/professional" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      👨‍💼 Professional App
                    </Link>
                    <Link href="/apps/courier" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      🚚 Courier App
                    </Link>
                    <Link href="/apps/vendor" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                      📦 Vendor App
                    </Link>
                  </div>
                )}
              </div>
              
              
              <div className="flex items-center space-x-3 ml-4">
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
                  <Play className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#services" className="block py-3 px-4 text-gray-700 hover:text-blue-600 rounded-lg transition-colors font-medium">
                Services
              </a>
              <a href="#apps" className="block py-3 px-4 text-gray-700 hover:text-blue-600 rounded-lg transition-colors font-medium">
                Apps
              </a>
              
              {/* Mobile Company Section */}
              <div>
                <button
                  onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  The Company
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCompanyMenuOpen && (
                  <div className="ml-4 space-y-1">
                    <Link href="/about" className="block py-2 px-4 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
                      About Us
                    </Link>
                    <Link href="/apps/customer" className="block py-2 px-4 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
                      📱 Customer App
                    </Link>
                    <Link href="/apps/professional" className="block py-2 px-4 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
                      👨‍💼 Professional App
                    </Link>
                    <Link href="/apps/courier" className="block py-2 px-4 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
                      🚚 Courier App
                    </Link>
                    <Link href="/apps/vendor" className="block py-2 px-4 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
                      📦 Vendor App
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/faq" className="block py-3 px-4 text-gray-700 hover:text-blue-600 rounded-lg transition-colors font-medium">
                FAQ
              </Link>
              
              
              {/* Mobile Company Section */}
              <div className="pt-2">
                <div className="px-4 py-2">
                  <span className="text-sm font-semibold text-gray-600">The Company</span>
                </div>
                <a href="/about" className="block py-2 px-6 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
                  About Us
                </a>
                <div className="px-6 py-1">
                  <span className="text-xs font-medium text-gray-500">Our Apps</span>
                </div>
                <a href="/apps/customer" className="block py-2 px-8 text-gray-600 hover:text-blue-600 rounded-lg transition-colors text-sm">
                  Customer App
                </a>
                <a href="/apps/professional" className="block py-2 px-8 text-gray-600 hover:text-green-600 rounded-lg transition-colors text-sm">
                  Professional App
                </a>
                <a href="/apps/courier" className="block py-2 px-8 text-gray-600 hover:text-orange-600 rounded-lg transition-colors text-sm">
                  Courier App
                </a>
                <a href="/apps/vendor" className="block py-2 px-8 text-gray-600 hover:text-purple-600 rounded-lg transition-colors text-sm">
                  Vendor App
                </a>
              </div>
              
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Play className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <div className="space-y-6">
                <Badge variant="outline" className="border-blue-200 text-blue-700 bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm">
                  <Zap className="w-3 h-3 mr-1" />
                  Life Just Got Easier
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Life Just Got Easier with{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                    Searchbook
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed">
                  Discover, request, and manage services, couriers, rentals, and more across Ghana -- all from one powerful mobile app.
                </p>
                
                {/* Feature highlights */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Instant Requesting</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Verified Providers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
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
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced image container */}
              <div className="relative z-20">
                <img
                  src="https://images.pexels.com/photos/8486929/pexels-photo-8486929.jpeg"
                  alt="Professional Ghanaian service provider"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              
              {/* Enhanced floating cards */}
              <div className="absolute top-6 left-6 bg-white rounded-xl p-4 shadow-xl z-30">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">Verified Professional</span>
                    <p className="text-xs text-gray-600">Background checked</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-xl z-30">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-900">4.9 Rating</span>
                    <p className="text-xs text-gray-600">2,847 reviews</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-4 bg-white rounded-xl p-3 shadow-xl z-30">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-900">Live Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-gradient-to-r from-indigo-50 to-purple-50 mb-4 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2 inline-block animate-pulse"></span>
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Why Choose Searchbook?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of service requesting with our revolutionary platform designed for modern Ghana
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50',
                shadowColor: 'shadow-purple-500/25',
                title: 'All-in-One Service Platform',
                description: 'Access all services from one convenient platform with seamless integration and unified experience'
              },
              {
                icon: Award,
                gradient: 'from-emerald-400 to-teal-500',
                bgGradient: 'from-emerald-50 to-teal-50',
                shadowColor: 'shadow-emerald-500/25',
                title: 'Local, Verified Vendors',
                description: 'All service providers are locally vetted, verified, and background-checked across Ghana for your complete safety'
              },
              {
                icon: CreditCard,
                gradient: 'from-orange-400 to-red-500',
                bgGradient: 'from-orange-50 to-red-50',
                shadowColor: 'shadow-orange-500/25',
                title: 'Real-Time request & Escrow',
                description: 'Secure payments with escrow protection, instant request confirmation, and real-time tracking'
              },
              {
                icon: Truck,
                gradient: 'from-blue-400 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50',
                shadowColor: 'shadow-blue-500/25',
                title: 'Rentals, Deliveries & Skilled Services',
                description: 'Complete solution for rentals, deliveries, and skilled services - all in one powerful, intuitive app'
              },
              {
                icon: Zap,
                gradient: 'from-indigo-400 to-purple-500',
                bgGradient: 'from-indigo-50 to-purple-50',
                shadowColor: 'shadow-indigo-500/25',
                title: 'Uber-Style Convenience',
                description: 'Request any service as easily as calling a ride - just a few taps and you\'re done'
              },
              {
                icon: DollarSign,
                gradient: 'from-pink-400 to-rose-500',
                bgGradient: 'from-pink-50 to-rose-50',
                shadowColor: 'shadow-pink-500/25',
                title: 'Transparent Pricing',
                description: 'No hidden fees, upfront pricing for all services with detailed cost breakdowns and fair rates'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <Card className={`relative overflow-hidden bg-white border-0 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:${feature.shadowColor} transition-all duration-500 hover:-translate-y-4 hover:scale-105`}>
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 transition-all duration-500 group-hover:opacity-100`}></div>
                  
                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}></div>
                  <div className={`absolute inset-[1px] rounded-2xl bg-white transition-all duration-500`}></div>
                  
                  <CardContent className="relative p-0 z-10">
                    {/* Icon with enhanced design */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                        <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 shadow-lg`}>
                          <feature.icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-700">
                      {feature.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} w-0 transition-all duration-500 group-hover:w-full rounded-b-2xl`}></div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50 mb-6">
              <HelpCircle className="w-3 h-3 mr-1" />
              Help Center
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Download,
                title: "Getting Started",
                question: "How do I create an account?",
                answer: "Download our app, tap 'Sign Up', enter your details, and verify with OTP. It's that simple!"
              },
              {
                icon: CreditCard,
                title: "Payments",
                question: "What payment methods do you accept?",
                answer: "We accept Mobile Money, Visa/Mastercard, bank transfers, and cash payments - all processed securely."
              },
              {
                icon: Shield,
                title: "Safety",
                question: "How do you ensure safety?",
                answer: "All providers are verified, GPS tracking is enabled, and we have 24/7 support with emergency features."
              },
              {
                icon: Star,
                title: "Quality",
                question: "How do you maintain quality?",
                answer: "We use customer ratings, reviews, and continuous monitoring to ensure high service standards."
              },
              {
                icon: Headphones,
                title: "Support",
                question: "Do you offer customer support?",
                answer: "Yes! Our support team is available 24/7 via chat, phone, and email to assist you."
              },
              {
                icon: RefreshCw,
                title: "Refunds",
                question: "What's your refund policy?",
                answer: "We offer full refunds for unsatisfactory services within 24 hours of completion."
              }
            ].map((faq, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-indigo-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors">
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                        {faq.title}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-indigo-100 mb-6 text-lg max-w-2xl mx-auto">
                Our friendly support team is here to help you 24/7. Get in touch and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Live Chat
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +233 XX XXX XXXX
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 mb-4">
              <Settings className="w-3 h-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your service needs fulfilled in just three simple steps
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-8">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-110' 
                        : 'bg-white border-gray-300 text-gray-600 hover:border-blue-400 hover:shadow-md'
                    }`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                    {index < howItWorksSteps.length - 1 && (
                      <div className={`w-24 h-1 mx-4 transition-colors duration-300 ${
                        activeStep > index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step Content */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {howItWorksSteps[activeStep].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {howItWorksSteps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section id="apps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50 mb-4">
              <Smartphone className="w-3 h-3 mr-1" />
              Mobile Apps
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Four Apps, One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored experiences for every user type - customers, professionals, riders, and vendors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <Card key={app.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200 shadow-lg overflow-hidden relative ${
                app.id === 'user' ? 'hover:bg-blue-50' :
                app.id === 'partner' ? 'hover:bg-green-50' :
                app.id === 'courier' ? 'hover:bg-orange-50' :
                'hover:bg-purple-50'
              }`}>
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  app.id === 'user' ? 'bg-blue-500' :
                  app.id === 'partner' ? 'bg-green-500' :
                  app.id === 'courier' ? 'bg-orange-500' :
                  'bg-purple-500'
                }`}></div>
                <CardContent className="p-8">
                  {/* App Mockup */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="w-48 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                          {/* Status Bar */}
                          <div className="h-6 bg-gray-100 flex items-center justify-between px-4 text-xs">
                            <span className="font-medium">9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                              <div className="w-6 h-3 border border-gray-400 rounded-sm">
                                <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* App Content */}
                          <div className={`flex-1 p-4 ${
                            app.id === 'user' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                            app.id === 'partner' ? 'bg-gradient-to-br from-green-50 to-green-100' :
                            app.id === 'courier' ? 'bg-gradient-to-br from-orange-50 to-orange-100' :
                            'bg-gradient-to-br from-purple-50 to-purple-100'
                          }`}>
                            {/* App Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-2">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                  app.id === 'user' ? 'bg-blue-500' :
                                  app.id === 'partner' ? 'bg-green-500' :
                                  app.id === 'courier' ? 'bg-orange-500' :
                                  'bg-purple-500'
                                }`}>
                                  <app.icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-gray-900">
                                    {app.id === 'user' ? 'Searchbook' :
                                     app.id === 'partner' ? 'Searchbook Pro' :
                                     app.id === 'courier' ? 'Searchbook Rider' :
                                     'Searchbook Vendor'}
                                  </div>
                                  <div className="text-xs text-gray-600">{app.subtitle}</div>
                                </div>
                              </div>
                              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                            </div>
                            
                            {/* App Interface Elements */}
                            {app.id === 'user' && (
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Search className="w-3 h-3 text-blue-500" />
                                    <div className="text-xs font-medium">Find Services</div>
                                  </div>
                                  <div className="grid grid-cols-3 gap-2">
                                    <div className="bg-blue-100 rounded p-1 text-center">
                                      <div className="text-xs">🧹</div>
                                      <div className="text-xs">Clean</div>
                                    </div>
                                    <div className="bg-blue-100 rounded p-1 text-center">
                                      <div className="text-xs">🔧</div>
                                      <div className="text-xs">Repair</div>
                                    </div>
                                    <div className="bg-blue-100 rounded p-1 text-center">
                                      <div className="text-xs">🎨</div>
                                      <div className="text-xs">Paint</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-2 shadow-sm">
                                  <div className="text-xs font-medium mb-1">Recent Bookings</div>
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                      <span>House Cleaning</span>
                                      <span className="text-green-600">✓</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                      <span>Plumbing Fix</span>
                                      <span className="text-blue-600">→</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {app.id === 'partner' && (
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Calendar className="w-3 h-3 text-green-500" />
                                    <div className="text-xs font-medium">Today's Jobs</div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="bg-green-100 rounded p-2">
                                      <div className="text-xs font-medium">10:00 AM</div>
                                      <div className="text-xs">Kitchen Repair - Kwame A.</div>
                                      <div className="text-xs text-green-600">GHS 150</div>
                                    </div>
                                    <div className="bg-green-100 rounded p-2">
                                      <div className="text-xs font-medium">2:00 PM</div>
                                      <div className="text-xs">Bathroom Fix - Ama O.</div>
                                      <div className="text-xs text-green-600">GHS 200</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-2 shadow-sm">
                                  <div className="text-xs font-medium mb-1">This Week</div>
                                  <div className="text-xs text-green-600 font-bold">GHS 1,250 earned</div>
                                </div>
                              </div>
                            )}
                            
                            {app.id === 'courier' && (
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <MapPin className="w-3 h-3 text-orange-500" />
                                    <div className="text-xs font-medium">Active Delivery</div>
                                  </div>
                                  <div className="bg-orange-100 rounded p-2 mb-2">
                                    <div className="text-xs font-medium">Pickup: Accra Mall</div>
                                    <div className="text-xs">Delivery: East Legon</div>
                                    <div className="text-xs text-orange-600">15 mins away</div>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>Today's Earnings</span>
                                    <span className="font-bold text-orange-600">GHS 85</span>
                                  </div>
                                </div>
                                <div className="bg-white rounded-lg p-2 shadow-sm">
                                  <div className="text-xs font-medium mb-1">Route Optimization</div>
                                  <div className="bg-orange-100 rounded p-1 text-xs text-center">
                                    3 deliveries optimized
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {app.id === 'vendor' && (
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 shadow-sm">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <BarChart3 className="w-3 h-3 text-purple-500" />
                                    <div className="text-xs font-medium">Sales Dashboard</div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div className="bg-purple-100 rounded p-1 text-center">
                                      <div className="text-xs font-bold">24</div>
                                      <div className="text-xs">Orders</div>
                                    </div>
                                    <div className="bg-purple-100 rounded p-1 text-center">
                                      <div className="text-xs font-bold">GHS 850</div>
                                      <div className="text-xs">Revenue</div>
                                    </div>
                                  </div>
                                  <div className="text-xs">
                                    <div className="flex justify-between">
                                      <span>Electronics</span>
                                      <span className="text-purple-600">12 sold</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Fashion</span>
                                      <span className="text-purple-600">8 sold</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Bottom Navigation */}
                          <div className="h-12 bg-white border-t border-gray-200 flex items-center justify-around">
                            {[1,2,3,4].map((item, idx) => (
                              <div key={idx} className={`w-6 h-6 rounded-full ${
                                idx === 0 ? (
                                  app.id === 'user' ? 'bg-blue-500' :
                                  app.id === 'partner' ? 'bg-green-500' :
                                  app.id === 'courier' ? 'bg-orange-500' :
                                  'bg-purple-500'
                                ) : 'bg-gray-200'
                              }`}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* App Name Badge */}
                      <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                        app.id === 'user' ? 'bg-blue-500' :
                        app.id === 'partner' ? 'bg-green-500' :
                        app.id === 'courier' ? 'bg-orange-500' :
                        'bg-purple-500'
                      }`}>
                        {app.id === 'user' ? 'Searchbook' :
                         app.id === 'partner' ? 'Searchbook Pro' :
                         app.id === 'courier' ? 'Searchbook Rider' :
                         'Searchbook Vendor'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 ${
                      app.id === 'user' ? 'bg-blue-500 group-hover:bg-blue-600' :
                      app.id === 'partner' ? 'bg-green-500 group-hover:bg-green-600' :
                      app.id === 'courier' ? 'bg-orange-500 group-hover:bg-orange-600' :
                      'bg-purple-500 group-hover:bg-purple-600'
                    }`}>
                      <app.icon className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <div>
                      <Badge variant="outline" className={`text-xs mb-2 ${
                        app.id === 'user' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                        app.id === 'partner' ? 'border-green-200 text-green-700 bg-green-50' :
                        app.id === 'courier' ? 'border-orange-200 text-orange-700 bg-orange-50' :
                        'border-purple-200 text-purple-700 bg-purple-50'
                      }`}>
                        {app.subtitle}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {app.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {app.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-5 h-5 ${
                          app.id === 'user' ? 'text-blue-500' :
                          app.id === 'partner' ? 'text-green-500' :
                          app.id === 'courier' ? 'text-orange-500' :
                          'text-purple-500'
                        }`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {app.discount && (
                    <div className={`rounded-lg p-4 mb-6 ${
                      app.id === 'user' ? 'bg-blue-100 border border-blue-200' :
                      app.id === 'partner' ? 'bg-green-100 border border-green-200' :
                      app.id === 'courier' ? 'bg-orange-100 border border-orange-200' :
                      'bg-purple-100 border border-purple-200'
                    }`}>
                      <p className={`font-semibold text-center text-sm ${
                        app.id === 'user' ? 'text-blue-700' :
                        app.id === 'partner' ? 'text-green-700' :
                        app.id === 'courier' ? 'text-orange-700' :
                        'text-purple-700'
                      }`}>
                        {app.discount}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-3">
                    <a href="#" className="inline-block">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Get it on Google Play" 
                        className="h-10 hover:opacity-80 transition-opacity"
                      />
                    </a>
                    <a href="#" className="inline-block">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                        alt="Download on the App Store" 
                        className="h-10 hover:opacity-80 transition-opacity"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional services at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center cursor-pointer group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center text-4xl">
                    {service.emoji}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-white/30 text-white bg-white/20 mb-4">
              <BarChart3 className="w-3 h-3 mr-1" />
              Trusted Platform
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join our growing community of satisfied customers and service providers across Ghana
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Happy Customers', value: counters.customers, suffix: '+', icon: Users2 },
              { label: 'Verified Providers', value: counters.providers, suffix: '+', icon: ShieldCheck },
              { label: 'Service Categories', value: counters.categories, suffix: '+', icon: Package2 },
              { label: 'Average Rating', value: counters.rating, suffix: '/5', icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {typeof stat.value === 'number' && stat.value > 0 
                    ? stat.value.toLocaleString() 
                    : '0'}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/95 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white/30"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-white/80 text-sm">{testimonial.service}</div>
                    </div>
                  </div>
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