"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Phone, 
  Mail, 
  ArrowLeft,
  HelpCircle,
  Users,
  Shield,
  CreditCard,
  Clock,
  Star,
  Headphones,
  ArrowRight,
  MapPin,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          question: "How do I create an account on Searchbook?",
          answer: "Download our app from Google Play Store or App Store, tap 'Sign Up', enter your phone number and email, verify with the OTP sent to your phone, and complete your profile. It's that simple!"
        },
        {
          question: "Is Searchbook available in my area?",
          answer: "We currently operate in 15+ cities across Ghana including Accra, Kumasi, Tamale, Cape Coast, and more. Check our app to see if we're available in your specific location."
        },
        {
          question: "How do I book my first service?",
          answer: "Open the app, browse service categories, select your needed service, choose a provider based on ratings and reviews, pick your preferred time slot, and make payment. You'll receive instant confirmation!"
        }
      ]
    },
    {
      title: "Payments & Pricing",
      icon: CreditCard,
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Mobile Money (MTN, Vodafone, AirtelTigo), Visa/Mastercard, bank transfers, and cash payments. All digital payments are processed securely with encryption."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! All costs are displayed upfront before booking. You'll see the service fee, any applicable taxes, and total amount before confirming your booking."
        },
        {
          question: "How does the escrow system work?",
          answer: "Your payment is held securely until service completion. Once you confirm satisfaction, payment is released to the provider. If there's an issue, we'll help resolve it before releasing funds."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "Yes! We have a satisfaction guarantee. If you're not happy with the service, contact us within 24 hours. We'll investigate and may provide a full refund or free re-service."
        }
      ]
    },
    {
      title: "Service Providers",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          question: "How are service providers verified?",
          answer: "All providers undergo thorough background checks, identity verification, skill assessments, and reference checks. We also continuously monitor performance through customer reviews."
        },
        {
          question: "What if a provider doesn't show up?",
          answer: "If a provider is more than 15 minutes late without notice, you can cancel and get a full refund. We'll also help you rebook with another available provider immediately."
        },
        {
          question: "How do I rate and review a service provider?",
          answer: "After service completion, you'll receive a prompt to rate (1-5 stars) and write a review. Your feedback helps other customers and helps us maintain quality standards."
        }
      ]
    },
    {
      title: "Safety & Security",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          question: "Is my personal information safe?",
          answer: "Absolutely! We use bank-level encryption to protect your data. We never share personal information with third parties without your consent. Read our Privacy Policy for full details."
        },
        {
          question: "What safety measures are in place?",
          answer: "All providers are background-checked, GPS tracking is enabled during services, we have 24/7 support, emergency contact features, and comprehensive insurance coverage."
        },
        {
          question: "What if there's an emergency during service?",
          answer: "Use the emergency button in the app to contact our 24/7 support team immediately. We also have direct integration with local emergency services when needed."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 100 + faqIndex;
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <Button variant="ghost" size="sm" className="group-hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FAQ
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 mb-6">
            <HelpCircle className="w-3 h-3 mr-1" />
            Help Center
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Find answers to common questions about Searchbook. Can't find what you're looking for? 
            Our support team is here to help 24/7.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openFAQ === globalIndex;
                    
                    return (
                      <Card key={faqIndex} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-600 leading-relaxed text-lg">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Our friendly support team is available 24/7 to assist you with any questions or concerns.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                <p className="text-blue-100 mb-6">Get instant help through our in-app chat support</p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-blue-100 mb-6">Speak directly with our support team</p>
                <a href="tel:+233XXXXXXXX">
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                    Call Us
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Support</h3>
                <p className="text-blue-100 mb-6">Send us a detailed message about your issue</p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  support@searchbook.com
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Clock className="w-6 h-6 text-white" />
              <h3 className="text-xl font-bold text-white">Support Hours</h3>
            </div>
            <p className="text-blue-100 text-lg">
              We're available 24/7 to help you with any questions or concerns. 
              Average response time is less than 5 minutes during business hours.
            </p>
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