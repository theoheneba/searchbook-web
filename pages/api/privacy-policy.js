'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Smartphone, Users, Truck, Package, Calendar, CreditCard, MapPin, BarChart, ChevronRight, Apple, Play } from 'lucide-react';
import AppStoreButtons from './AppStoreButtons';

// Image sources for phone mockups - easily customizable
const APP_MOCKUP_IMAGES = {
  user: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  partner: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  courier: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  vendor: 'https://images.pexels.com/photos/5625115/pexels-photo-5625115.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
};

const apps = [
  {
    id: 'user',
    title: 'Customer',
    subtitle: 'Book Any Service Instantly',
    description: 'Have home repairs, cleaning, beauty services, and maintenance delivered to you within minutes from verified professionals.',
    features: ['Service browsing & booking', 'Real-time professional tracking', 'Secure payment processing', 'Service history & ratings'],
    icon: Smartphone,
    gradient: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-500',
    image: APP_MOCKUP_IMAGES.user,
    color: '#3B82F6'
  },
  {
    id: 'partner',
    title: 'Partners',
    subtitle: 'Grow Your Service Business',
    description: 'Manage jobs, communicate with customers, generate invoices, and track your earnings with powerful business tools.',
    features: ['Job management dashboard', 'Customer communication', 'Invoice generation', 'Earnings & analytics'],
    icon: Users,
    gradient: 'from-green-500 to-blue-600',
    bgColor: 'bg-green-500',
    image: APP_MOCKUP_IMAGES.partner,
    color: '#10B981'
  },
  {
    id: 'courier',
    title: 'Couriers',
    subtitle: 'Deliver & Earn Flexibly',
    description: 'Optimize your delivery routes, track packages in real-time, work flexible hours, and receive instant payments.',
    features: ['Route optimization', 'Package tracking', 'Flexible scheduling', 'Instant payment processing'],
    icon: Truck,
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-500',
    image: APP_MOCKUP_IMAGES.courier,
    color: '#F97316'
  },
  {
    id: 'vendor',
    title: 'Vendors',
    subtitle: 'Manage Your Inventory Smart',
    description: 'Control your inventory, fulfill orders efficiently, access comprehensive dashboards, and analyze your sales data.',
    features: ['Inventory management', 'Order fulfillment', 'Vendor dashboard', 'Sales analytics'],
    icon: Package,
    gradient: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-500',
    image: APP_MOCKUP_IMAGES.vendor,
    color: '#8B5CF6'
  }
];

export default function MobileApps() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeApp, setActiveApp] = useState('user');

  const selectedApp = apps.find(app => app.id === activeApp) || apps[0];

  return (
    <section ref={sectionRef} className="py-28 px-4 bg-gradient-to-br from-indigo-50/50 to-purple-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-purple-400/20 rounded-[60%_40%_80%_20%] blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-l from-green-400/12 to-orange-400/18 rounded-[40%_60%_30%_70%] blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Try the App
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have home repairs, cleaning, beauty services, and maintenance delivered to you within minutes from your favourite professionals.
          </p>
        </motion.div>

        {/* App Toggle Navigation - Chowdeck Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-2 gap-1">
            {apps.map((app) => (
              <motion.button
                key={app.id}
                onClick={() => setActiveApp(app.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeApp === app.id
                    ? `${app.bgColor} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {app.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Selected App Content */}
        <motion.div
          key={activeApp}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            {selectedApp.description}
          </p>
        </motion.div>

        {/* Phone Mockup - Chowdeck Style */}
        <motion.div
          key={`phone-${activeApp}`}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center relative"
        >
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 z-10"
            style={{ backgroundColor: selectedApp.color }}
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full opacity-15 z-10"
            style={{ backgroundColor: selectedApp.color }}
          />

          {/* Main Phone Container */}
          <div className="relative max-w-sm mx-auto">
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 0.5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone Frame */}
              <div 
                className="rounded-3xl p-4 shadow-2xl"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <div className="w-80 h-[640px] bg-black rounded-3xl p-3 shadow-xl overflow-hidden">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-12 bg-gray-900 dark:bg-black flex items-center justify-between px-6">
                      <span className="text-white text-sm font-medium">9:28</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
                        <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
                        <div className="w-4 h-2 bg-white rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div 
                      className="h-20 flex items-center justify-center relative"
                      style={{ backgroundColor: selectedApp.color }}
                    >
                      <div className="text-center">
                        <selectedApp.icon className="w-8 h-8 text-white mx-auto mb-1" />
                        <p className="text-white font-semibold text-sm">{selectedApp.title} App</p>
                      </div>
                    </div>
                    
                    {/* Location Bar */}
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">New York, Greater New York Region</span>
                        <div className="ml-auto px-3 py-1 bg-gray-800 dark:bg-gray-600 text-white text-xs rounded-full">
                          Filter
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6 space-y-4 flex-1">
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${selectedApp.color}20` }}
                        >
                          <selectedApp.icon className="w-6 h-6" style={{ color: selectedApp.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mt-2" />
                        </div>
                      </div>
                      
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-2">
                          <div 
                            className="h-20 rounded-xl animate-pulse flex items-center justify-center"
                            style={{ 
                              backgroundColor: `${selectedApp.color}10`,
                              animationDelay: `${i * 0.2}s` 
                            }}
                          >
                            <div 
                              className="w-8 h-8 rounded-full"
                              style={{ backgroundColor: `${selectedApp.color}30` }}
                            />
                          </div>
                        </div>
                      ))}
                      
                      <div 
                        className="h-12 rounded-xl flex items-center justify-center mt-6"
                        style={{ backgroundColor: selectedApp.color }}
                      >
                        <span className="text-white font-semibold">Book Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {selectedApp.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-blue-300 transition-all duration-300"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${selectedApp.color}20` }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: selectedApp.color }}
                />
              </div>
              <p className="text-gray-700 font-medium text-sm">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* App Store Buttons */}
        <div className="flex justify-center mt-12">
          <AppStoreButtons variant="primary" appType={selectedApp.id} />
        </div>

      </div>
    </section>
  );
}