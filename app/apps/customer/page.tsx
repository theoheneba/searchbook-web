"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  Smartphone, 
  Star, 
  CheckCircle2, 
  Search,
  MapPin,
  Clock,
  Shield,
  CreditCard,
  Bell,
  User,
  Calendar,
  MessageCircle,
  Phone,
  Download,
  Play,
  Zap,
  Target,
  Award,
  TrendingUp,
  Users,
  ThumbsUp,
  Heart,
  Bookmark,
  Filter,
  SlidersHorizontal,
  ArrowRight,
  Headphones
} from 'lucide-react';

export default function CustomerAppPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Browse & Discover Services',
      description: 'Explore hundreds of verified service providers in your area with detailed profiles, ratings, and reviews.',
      icon: Search,
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      title: 'Instant Request & Scheduling',
      description: 'Request services instantly or schedule for later with our smart calendar integration and real-time availability.',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    },
    {
      title: 'Secure Payments & Tracking',
      description: 'Pay securely with multiple payment options and track your service provider in real-time.',
      icon: CreditCard,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop'
    }
  ];

  const services = [
    { name: 'Home Cleaning', emoji: '🏠', rating: 4.8, providers: 120 },
    { name: 'Plumbing', emoji: '🔧', rating: 4.9, providers: 85 },
    { name: 'Electrical', emoji: '⚡', rating: 4.7, providers: 95 },
    { name: 'AC Repair', emoji: '❄️', rating: 4.8, providers: 67 },
    { name: 'Appliance Repair', emoji: '🔨', rating: 4.6, providers: 78 },
    { name: 'Painting', emoji: '🎨', rating: 4.9, providers: 102 },
    { name: 'Carpentry', emoji: '🪚', rating: 4.8, providers: 89 },
    { name: 'Gardening', emoji: '🌱', rating: 4.7, providers: 56 }
  ];

  const testimonials = [
    {
      name: 'Abena Mensah',
      service: 'Home Cleaning',
      rating: 5,
      text: 'The app made it so easy to find a reliable cleaner. Booked in seconds and the service was exceptional!',
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?w=150&h=150&fit=crop&crop=face',
      location: 'East Legon, Accra'
    },
    {
      name: 'Kofi Owusu',
      service: 'Plumbing',
      rating: 5,
      text: 'Quick response, fair pricing, and excellent work. The real-time tracking feature is amazing!',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?w=150&h=150&fit=crop&crop=face',
      location: 'Tema, Greater Accra'
    },
    {
      name: 'Ama Nkrumah',
      service: 'AC Repair',
      rating: 5,
      text: 'Professional service from start to finish. The app notifications kept me informed throughout.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150&h=150&fit=crop&crop=face',
      location: 'Kumasi, Ashanti'
    }
  ];

  const appBenefits = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All service providers are background-checked and verified for your safety and peace of mind.'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Get instant notifications about your booking status, provider location, and service completion.'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options with escrow protection. Pay only when you\'re satisfied with the service.'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'Rate and review services. We maintain high standards through continuous quality monitoring.'
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Chat directly with your service provider through our secure in-app messaging system.'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'Our AI matches you with the best providers based on your needs, location, and preferences.'
    }
  ];

  // Auto-advance features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Customer App
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <div className="space-y-8">
                <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 shadow-sm">
                  <Smartphone className="w-3 h-3 mr-1" />
                  For Customers
                </Badge>
                
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    Request Any Service{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Instantly
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed">
                    Browse services, request instantly, pay securely, and track in real-time. Your trusted service marketplace in Ghana.
                  </p>
                </div>
                
                {/* Key Features */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Instant Request</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Verified Providers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-gray-700">4.9 Rating</span>
                  </div>
                </div>
                
                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#" className="inline-block group">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                      alt="Get it on Google Play" 
                      className="h-14 group-hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <a href="#" className="inline-block group">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                      alt="Download on the App Store" 
                      className="h-14 group-hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            {/* App Mockup */}
            <div className="relative">
              <div className="relative z-20 max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-gray-100 flex items-center justify-between px-6 text-sm font-medium">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-3 border border-gray-400 rounded-sm">
                          <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 p-4">
                      {/* App Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">Searchbook</h3>
                            <p className="text-xs text-gray-600">Find Services</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <Bell className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Search Bar */}
                      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                        <div className="flex items-center space-x-3">
                          <Search className="w-5 h-5 text-gray-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">What service do you need?</div>
                            <div className="text-xs text-gray-500">Cleaning, repair, maintenance...</div>
                          </div>
                          <Filter className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      
                      {/* Service Categories */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Services</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {services.slice(0, 6).map((service, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm">
                              <div className="text-2xl mb-1">{service.emoji}</div>
                              <div className="text-xs font-medium text-gray-900">{service.name}</div>
                              <div className="flex items-center justify-center space-x-1 mt-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-xs text-gray-600">{service.rating}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Recent Bookings */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Bookings</h4>
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">House Cleaning</div>
                                  <div className="text-xs text-gray-500">Completed • GHS 120</div>
                                </div>
                              </div>
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Clock className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">Plumbing Repair</div>
                                  <div className="text-xs text-gray-500">In Progress • GHS 200</div>
                                </div>
                              </div>
                              <MessageCircle className="w-4 h-4 text-blue-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-around">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                        <span className="text-xs text-blue-600 mt-1">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <span className="text-xs text-gray-400 mt-1">Search</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <span className="text-xs text-gray-400 mt-1">Bookings</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <span className="text-xs text-gray-400 mt-1">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 bg-white rounded-xl p-3 shadow-xl z-30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">500+ Providers Online</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white rounded-xl p-3 shadow-xl z-30">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <div>
                    <span className="text-sm font-semibold">4.9 Rating</span>
                    <p className="text-xs text-gray-600">10,000+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 mb-4">
              <Zap className="w-3 h-3 mr-1" />
              App Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience seamless service booking with features designed to make your life easier
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How the App Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how easy it is to request and manage services with our intuitive mobile app
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Feature Navigation */}
            <div className="mb-12 lg:mb-0">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-white shadow-xl border-2 border-blue-200'
                        : 'bg-white/50 hover:bg-white hover:shadow-lg'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeFeature === index
                          ? `bg-gradient-to-r ${feature.color} shadow-lg`
                          : 'bg-gray-100'
                      }`}>
                        <feature.icon className={`w-6 h-6 transition-colors duration-300 ${
                          activeFeature === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`transition-colors duration-300 ${
                          activeFeature === index ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Feature Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transition-all duration-500"
                />
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Available Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our wide range of professional services available in your area
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">{service.providers} providers</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-white/30 text-white bg-white/20 mb-4">
              <Users className="w-3 h-3 mr-1" />
              Customer Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Real experiences from customers who have used our app to book services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/95 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white/30"
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-white/80 text-sm">{testimonial.service}</div>
                      <div className="text-white/60 text-xs flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
              <Download className="w-3 h-3 mr-1" />
              Get Started
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to Request Your First Service?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download the Searchbook Customer App today and experience the easiest way to request services in Ghana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a href="#" className="inline-block group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-16 group-hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="#" className="inline-block group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-16 group-hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-600" />
                <span>4.9 App Rating</span>
              </div>
            </div>
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